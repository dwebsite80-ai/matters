import { useState, useEffect, useRef, useCallback } from 'react';
import { TiaState } from '../types';

export interface UseTiaVoiceReturn {
  tiaState: TiaState;
  setTiaState: (state: TiaState) => void;
  isListening: boolean;
  isSpeaking: boolean;
  transcript: string;
  isVoiceSupported: boolean;
  isSpeechSynthesisSupported: boolean;
  startListening: () => void;
  stopListening: () => void;
  speakText: (text: string, onEnd?: () => void) => void;
  stopSpeaking: () => void;
  replayLastSpeech: () => void;
  voiceVolumeLevel: number;
}

// Type definitions for SpeechRecognition if missing in DOM lib
interface IWindow extends Window {
  webkitSpeechRecognition?: any;
  SpeechRecognition?: any;
}

export function useTiaVoice(): UseTiaVoiceReturn {
  const [tiaState, setTiaState] = useState<TiaState>('idle');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [voiceVolumeLevel, setVoiceVolumeLevel] = useState<number>(0);
  const lastSpokenTextRef = useRef<string>('');

  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const volumeIntervalRef = useRef<any>(null);

  const isVoiceSupported = typeof window !== 'undefined' &&
    Boolean((window as unknown as IWindow).SpeechRecognition || (window as unknown as IWindow).webkitSpeechRecognition);

  const isSpeechSynthesisSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  // Initialize Speech Synthesis reference
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
      if (volumeIntervalRef.current) {
        clearInterval(volumeIntervalRef.current);
      }
    };
  }, []);

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const SpeechRec = (window as unknown as IWindow).SpeechRecognition || (window as unknown as IWindow).webkitSpeechRecognition;

    if (SpeechRec) {
      try {
        const recognition = new SpeechRec();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-IN'; // Default to Indian English / Hinglish

        recognition.onstart = () => {
          setIsListening(true);
          setTiaState('listening');
          setTranscript('');

          // Start volume wave animation simulation
          volumeIntervalRef.current = setInterval(() => {
            setVoiceVolumeLevel(Math.random() * 0.8 + 0.2);
          }, 120);
        };

        recognition.onresult = (event: any) => {
          let currentTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            currentTranscript += event.results[i][0].transcript;
          }
          setTranscript(currentTranscript);
        };

        recognition.onerror = (err: any) => {
          console.warn('Speech recognition warning/fallback:', err);
          setIsListening(false);
          setTiaState('idle');
          if (volumeIntervalRef.current) clearInterval(volumeIntervalRef.current);
          setVoiceVolumeLevel(0);
        };

        recognition.onend = () => {
          setIsListening(false);
          if (volumeIntervalRef.current) clearInterval(volumeIntervalRef.current);
          setVoiceVolumeLevel(0);
        };

        recognitionRef.current = recognition;
      } catch (e) {
        console.warn('Could not initialize SpeechRecognition:', e);
      }
    }
  }, []);

  // Start listening handler
  const startListening = useCallback(() => {
    // If speaking, stop speaking first
    if (synthRef.current && synthRef.current.speaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        setTiaState('listening');
      } catch {
        // Recognition already started or error -> restart
        try {
          recognitionRef.current.stop();
          setTimeout(() => recognitionRef.current.start(), 150);
        } catch {
          // fallback simulation
          simulateVoiceInput();
        }
      }
    } else {
      simulateVoiceInput();
    }
  }, []);

  // Stop listening handler
  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
    }
    setIsListening(false);
    if (volumeIntervalRef.current) clearInterval(volumeIntervalRef.current);
    setVoiceVolumeLevel(0);
    setTiaState('idle');
  }, []);

  // Mock voice input fallback for sandbox or when mic permission isn't granted
  const simulateVoiceInput = () => {
    setIsListening(true);
    setTiaState('listening');
    setTranscript('Listening to you...');
    volumeIntervalRef.current = setInterval(() => {
      setVoiceVolumeLevel(Math.random() * 0.8 + 0.2);
    }, 120);

    setTimeout(() => {
      setTranscript('Can you explain this concept simply with a real-life example?');
      if (volumeIntervalRef.current) clearInterval(volumeIntervalRef.current);
      setVoiceVolumeLevel(0);
      setIsListening(false);
      setTiaState('thinking');
    }, 2400);
  };

  // Speak text with friendly, lively female/approachable voice
  const speakText = useCallback((text: string, onEnd?: () => void) => {
    if (!synthRef.current) {
      if (onEnd) onEnd();
      return;
    }

    // Cancel current speech
    synthRef.current.cancel();

    // Strip markdown formatting symbols for clean speech audio
    const cleanSpeech = text
      .replace(/[*_~`#]/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/(\n)+/g, '. ')
      .trim();

    if (!cleanSpeech) {
      if (onEnd) onEnd();
      return;
    }

    lastSpokenTextRef.current = cleanSpeech;
    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.pitch = 1.1; // Slightly cheerful and energetic
    utterance.rate = 1.04; // Natural brisk conversational pace

    // Find best matching voice (Indian English or pleasant female voice)
    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(
      (v) =>
        v.lang.includes('en-IN') ||
        v.name.includes('India') ||
        v.name.includes('Samantha') ||
        v.name.includes('Google UK English Female') ||
        (v.lang.includes('en') && v.name.toLowerCase().includes('female'))
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setTiaState('speaking');
      // Visualizer wave effect
      volumeIntervalRef.current = setInterval(() => {
        setVoiceVolumeLevel(Math.random() * 0.9 + 0.1);
      }, 100);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setTiaState('idle');
      if (volumeIntervalRef.current) clearInterval(volumeIntervalRef.current);
      setVoiceVolumeLevel(0);
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setTiaState('idle');
      if (volumeIntervalRef.current) clearInterval(volumeIntervalRef.current);
      setVoiceVolumeLevel(0);
      if (onEnd) onEnd();
    };

    synthRef.current.speak(utterance);
  }, []);

  // Stop speaking
  const stopSpeaking = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setIsSpeaking(false);
    setTiaState('idle');
    if (volumeIntervalRef.current) clearInterval(volumeIntervalRef.current);
    setVoiceVolumeLevel(0);
  }, []);

  // Replay last spoken speech
  const replayLastSpeech = useCallback(() => {
    if (lastSpokenTextRef.current) {
      speakText(lastSpokenTextRef.current);
    }
  }, [speakText]);

  return {
    tiaState,
    setTiaState,
    isListening,
    isSpeaking,
    transcript,
    isVoiceSupported,
    isSpeechSynthesisSupported,
    startListening,
    stopListening,
    speakText,
    stopSpeaking,
    replayLastSpeech,
    voiceVolumeLevel,
  };
}
