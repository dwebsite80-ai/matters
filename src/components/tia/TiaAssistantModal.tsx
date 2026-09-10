import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles,
  Send,
  HelpCircle,
  Brain,
  MessageCircle,
  Lightbulb,
  Laugh,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { TiaAvatar } from './TiaAvatar';
import { useTiaVoice } from '../../lib/useTiaVoice';
import {
  TiaLessonContext,
  TiaMessage,
  TiaMode,
  TiaState,
} from '../../types';
import * as tiaService from '../../services/tiaService';

interface TiaAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: TiaLessonContext;
  initialMode?: TiaMode;
}

export const TiaAssistantModal: React.FC<TiaAssistantModalProps> = ({
  isOpen,
  onClose,
  context,
  initialMode = 'chat',
}) => {
  const [activeMode, setActiveMode] = useState<TiaMode>(initialMode);
  const [messages, setMessages] = useState<TiaMessage[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [voiceEnabled, setVoiceEnabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const {
    tiaState,
    setTiaState,
    isListening,
    isSpeaking,
    transcript,
    startListening,
    stopListening,
    speakText,
    stopSpeaking,
    replayLastSpeech,
    voiceVolumeLevel,
  } = useTiaVoice();

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, tiaState]);

  // Initial welcome greeting whenever modal opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const lessonName = context?.lessonTitle;
      const greeting: TiaMessage = {
        id: 'welcome-msg',
        sender: 'tia',
        text: lessonName
          ? `Hey! I'm **Tia**, your AI learning companion. 🎙️\n\nI see you're working on **${lessonName}**. Stuck anywhere, need a simpler explanation, or want me to make it funny? Ask me anything or tap the mic to speak!`
          : `Hey! I'm **Tia**, your AI voice tutor. 🎙️\n\nI'm here to help make complex concepts simple, memorable, and fun. Speak or type whatever you'd like to learn!`,
        mode: 'chat',
        timestamp: Date.now(),
        quickActions: [
          '💡 Explain This Lesson',
          '😂 Make It Funny',
          '🎯 Quick Quiz',
          '🗣️ Speaking Practice',
        ],
      };
      setMessages([greeting]);
      if (voiceEnabled) {
        speakText(greeting.text);
      }
    }
  }, [isOpen, context, voiceEnabled]);

  // Handle when mode changes via prop or user selection
  useEffect(() => {
    if (initialMode && initialMode !== 'chat') {
      setActiveMode(initialMode);
      handleTriggerModeAction(initialMode as TiaMode);
    }
  }, [initialMode]);

  // When speech recognition produces a final transcript, automatically process it!
  useEffect(() => {
    if (transcript && !isListening && transcript.trim().length > 2) {
      handleSendUserText(transcript, true);
    }
  }, [isListening]);

  // Core action triggers
  const handleTriggerModeAction = async (mode: TiaMode) => {
    setActiveMode(mode);
    setIsLoading(true);
    setTiaState('thinking');

    try {
      let response: TiaMessage;

      switch (mode) {
        case 'explain':
          response = await tiaService.getLessonExplanation(context);
          break;
        case 'funny':
          response = await tiaService.generateFunnyExplanation(context);
          break;
        case 'quiz':
          response = await tiaService.generateQuizQuestion(context);
          break;
        case 'speaking_practice':
          response = await tiaService.getSpeakingPracticePrompt(context);
          break;
        case 'revision':
          response = await tiaService.generateRevisionQuestions(context);
          break;
        default:
          response = await tiaService.sendTextMessage('Hello Tia!', context, 'chat');
          break;
      }

      setMessages((prev) => [...prev, response]);
      if (voiceEnabled) {
        speakText(response.text);
      } else {
        setTiaState('idle');
      }
    } catch (e) {
      console.error('Error generating Tia response:', e);
      setTiaState('idle');
    } finally {
      setIsLoading(false);
    }
  };

  // Send user message
  const handleSendUserText = async (textToSend: string, isVoice = false) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: TiaMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: Date.now(),
      isVoice,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);
    setTiaState('thinking');

    try {
      // Check if last message was a quiz question and evaluate answer
      const lastMsg = messages[messages.length - 1];
      if (lastMsg?.quizData || activeMode === 'quiz') {
        const evalResult = await tiaService.evaluateQuizAnswer(
          textToSend,
          lastMsg?.quizData?.question || '',
          context
        );

        const tiaReply: TiaMessage = {
          id: `tia-eval-${Date.now()}`,
          sender: 'tia',
          text: `${evalResult.feedback}\n\n${evalResult.explanation}\n\n${evalResult.funnyRemark || ''}\n\n${evalResult.nextPrompt || ''}`,
          mode: 'quiz',
          timestamp: Date.now(),
          quickActions: [
            '🎯 Another Quiz Question',
            '😂 Make it funny',
            '💡 Explain this lesson',
            'Back to reading',
          ],
        };

        setMessages((prev) => [...prev, tiaReply]);
        if (voiceEnabled) {
          speakText(tiaReply.text);
        } else {
          setTiaState('idle');
        }
        return;
      }

      // Check if in speaking practice
      if (activeMode === 'speaking_practice') {
        const speakingEval = await tiaService.evaluateSpeakingAnswer(textToSend, context);
        setMessages((prev) => [...prev, speakingEval]);
        if (voiceEnabled) {
          speakText(speakingEval.text);
        } else {
          setTiaState('idle');
        }
        return;
      }

      // Default contextual message routing
      const response = await tiaService.sendTextMessage(textToSend, context, activeMode);
      setMessages((prev) => [...prev, response]);

      if (voiceEnabled) {
        speakText(response.text);
      } else {
        setTiaState('idle');
      }
    } catch (err) {
      console.error('Tia error', err);
      setTiaState('idle');
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleVoice = () => {
    if (voiceEnabled) {
      stopSpeaking();
      setVoiceEnabled(false);
    } else {
      setVoiceEnabled(true);
      const lastTia = [...messages].reverse().find((m) => m.sender === 'tia');
      if (lastTia) {
        speakText(lastTia.text);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Container / Sheet */}
      <div className="bg-[#FDFCFB] w-full sm:max-w-2xl h-[92vh] sm:h-[86vh] rounded-t-[36px] sm:rounded-[36px] border border-black/10 shadow-2xl flex flex-col overflow-hidden animate-slideUp">
        {/* 1. Header */}
        <div className="p-4 sm:p-5 bg-white border-b border-black/5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <TiaAvatar state={tiaState} size="md" showBadge={true} />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif italic font-bold text-lg text-[#1A1A1A]">Tia</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#FFE66D]/40 text-[#8C5E1A]">
                  AI Tutor
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isListening
                      ? 'bg-emerald-500 animate-ping'
                      : isSpeaking
                      ? 'bg-indigo-500 animate-pulse'
                      : isLoading
                      ? 'bg-amber-500 animate-spin'
                      : 'bg-emerald-400'
                  }`}
                />
                <span className="font-mono text-[11px]">
                  {isListening
                    ? 'Listening to you... Speak freely'
                    : isSpeaking
                    ? 'Tia is speaking...'
                    : isLoading
                    ? 'Tia is thinking...'
                    : 'Ready & listening'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleVoice}
              className={`p-2 rounded-full border transition-colors cursor-pointer ${
                voiceEnabled
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                  : 'bg-white text-gray-400 border-black/10 hover:text-black'
              }`}
              title={voiceEnabled ? 'Mute voice audio' : 'Unmute voice audio'}
            >
              {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                stopSpeaking();
                stopListening();
                onClose();
              }}
              className="p-2 rounded-full border border-black/10 bg-white hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
              aria-label="Close Tia"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Lesson Context Pill */}
        {context && (
          <div className="px-4 py-2 bg-[#F5F5F0] border-b border-black/5 flex items-center justify-between text-xs text-gray-600 shrink-0">
            <div className="flex items-center gap-2 truncate">
              <BookOpen className="w-3.5 h-3.5 text-gray-500 shrink-0" />
              <span className="font-semibold text-[#1A1A1A] truncate">
                {context.subjectName}: {context.lessonTitle}
              </span>
            </div>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-white border border-black/5 shrink-0">
              Context Active
            </span>
          </div>
        )}

        {/* 2. Mode Selector Navigation */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-white border-b border-black/5 overflow-x-auto no-scrollbar shrink-0">
          {[
            { id: 'chat' as TiaMode, label: '💬 Ask Tia' },
            { id: 'explain' as TiaMode, label: '💡 Explain This' },
            { id: 'funny' as TiaMode, label: '😂 Make It Funny' },
            { id: 'quiz' as TiaMode, label: '🎯 Voice Quiz' },
            { id: 'speaking_practice' as TiaMode, label: '🗣️ Speaking' },
            { id: 'revision' as TiaMode, label: '🔄 Revision' },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => handleTriggerModeAction(mode.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeMode === mode.id
                  ? 'bg-[#1A1A1A] text-white shadow-xs'
                  : 'bg-[#F5F5F0] text-gray-600 hover:bg-gray-200'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* 3. Messages Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-1.5 animate-fadeIn`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[78%] rounded-3xl p-4 sm:p-5 shadow-xs text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#1A1A1A] text-white rounded-tr-sm'
                    : 'bg-white border border-black/5 text-[#1A1A1A] rounded-tl-sm'
                }`}
              >
                {/* Voice message tag */}
                {msg.isVoice && (
                  <div className="flex items-center gap-1 text-[10px] text-gray-300 font-mono mb-1.5">
                    <Mic className="w-3 h-3 text-emerald-400" />
                    <span>Voice Message</span>
                  </div>
                )}

                {/* Body Text */}
                <div className="whitespace-pre-wrap font-light">{msg.text}</div>

                {/* Quiz options if present */}
                {msg.quizData?.options && (
                  <div className="mt-3 space-y-2">
                    {msg.quizData.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleSendUserText(opt)}
                        className="w-full text-left p-2.5 rounded-xl border border-black/10 bg-[#FDFCFB] hover:bg-[#F5F5F0] hover:border-black/20 text-xs font-medium text-[#1A1A1A] transition-all cursor-pointer"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {/* Voice Replay on Tia messages */}
                {msg.sender === 'tia' && voiceEnabled && (
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-black/5 text-[11px] text-gray-500">
                    <button
                      onClick={() => speakText(msg.text)}
                      className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Listen to Tia</span>
                    </button>
                    {isSpeaking && (
                      <button
                        onClick={stopSpeaking}
                        className="flex items-center gap-1 text-rose-600 hover:underline cursor-pointer"
                      >
                        <VolumeX className="w-3.5 h-3.5" />
                        <span>Stop Voice</span>
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Quick Action Chips attached to Tia reply */}
              {msg.sender === 'tia' && msg.quickActions && msg.quickActions.length > 0 && (
                <div className="flex items-center flex-wrap gap-1.5 pl-2 pt-1 max-w-[90%]">
                  {msg.quickActions.map((qa, qIdx) => (
                    <button
                      key={qIdx}
                      onClick={() => handleSendUserText(qa)}
                      className="text-[11px] font-semibold text-gray-700 bg-white hover:bg-black hover:text-white px-3 py-1 rounded-full border border-black/10 shadow-2xs transition-all cursor-pointer"
                    >
                      {qa}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Live transcript bubble while user is speaking */}
          {isListening && (
            <div className="flex flex-col items-end space-y-1 animate-fadeIn">
              <div className="max-w-[80%] rounded-3xl p-4 bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 font-bold text-[10px] text-emerald-800 uppercase tracking-widest mb-1">
                  <Mic className="w-3 h-3 text-emerald-600 animate-ping" />
                  <span>Live Voice Transcript</span>
                </div>
                <p className="italic font-mono text-xs">{transcript || 'Listening... Speak now.'}</p>
              </div>
            </div>
          )}

          {/* Thinking indicator */}
          {isLoading && (
            <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-black/5 w-fit text-xs text-gray-500 animate-fadeIn">
              <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
              <span>Tia is thinking of a witty explanation...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 4. Active Voice Waveform & Visualizer Strip */}
        <div className="bg-[#F5F5F0] border-t border-black/5 px-4 py-2.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={isListening ? stopListening : startListening}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer ${
                isListening
                  ? 'bg-rose-500 text-white hover:bg-rose-600 animate-pulse'
                  : 'bg-[#1A1A1A] text-white hover:bg-black active:scale-95'
              }`}
            >
              {isListening ? (
                <>
                  <MicOff className="w-4 h-4" />
                  <span>Stop Listening</span>
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4 text-emerald-400" />
                  <span>Tap to Speak</span>
                </>
              )}
            </button>

            {/* Animated Waveform Visualizer */}
            <div className="flex items-center gap-1 h-6">
              {[0.4, 0.8, 1.2, 0.6, 1.0, 0.5, 0.9].map((scale, i) => {
                const height =
                  isListening || isSpeaking
                    ? Math.max(4, Math.min(22, 22 * voiceVolumeLevel * scale))
                    : 4;
                return (
                  <span
                    key={i}
                    style={{ height: `${height}px` }}
                    className={`w-1 rounded-full transition-all duration-100 ${
                      isListening
                        ? 'bg-emerald-500'
                        : isSpeaking
                        ? 'bg-indigo-600'
                        : 'bg-gray-300'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isSpeaking && (
              <button
                onClick={stopSpeaking}
                className="text-[11px] font-semibold text-rose-600 hover:underline px-2 py-1"
              >
                Stop Speech
              </button>
            )}
            <button
              onClick={replayLastSpeech}
              className="p-1.5 rounded-full border border-black/10 bg-white hover:bg-gray-100 text-gray-600 cursor-pointer"
              title="Replay last speech"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 5. Bottom Text Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-black/5 space-y-2.5 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendUserText(inputText);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Tia anything or ask for an example..."
              className="flex-1 bg-[#F5F5F0] border border-black/5 rounded-full px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black/10 font-light"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="p-2.5 rounded-full bg-[#1A1A1A] hover:bg-black disabled:opacity-30 text-white transition-all shadow-sm cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Quick preset suggestion pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-[11px]">
            {[
              '💡 Explain simply',
              '😂 Make it funny',
              '🎯 Quiz me',
              'Give a real-life example',
              '🗣️ Speaking drill',
              'Explain in Hinglish',
            ].map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendUserText(chip)}
                className="px-2.5 py-1 rounded-full bg-[#F5F5F0] hover:bg-gray-200 text-gray-600 whitespace-nowrap transition-colors cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
