import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare, X } from 'lucide-react';
import { TiaAvatar } from './TiaAvatar';
import { TiaState } from '../../types';

interface TiaFloatingButtonProps {
  onClick: () => void;
  state?: TiaState;
  hasLessonContext?: boolean;
}

export const TiaFloatingButton: React.FC<TiaFloatingButtonProps> = ({
  onClick,
  state = 'idle',
  hasLessonContext = false,
}) => {
  const [showBubble, setShowBubble] = useState<boolean>(true);
  const [bubbleText, setBubbleText] = useState<string>('Stuck? Ask Tia! 💡');

  useEffect(() => {
    const hints = [
      hasLessonContext ? 'Want me to explain this lesson? 💡' : 'Need help learning? Ask Tia! ✨',
      'Try clicking "😂 Make It Funny"!',
      'Tap to talk with Tia 🎙️',
      'Ready for a 1-minute voice quiz? 🎯',
    ];

    const interval = setInterval(() => {
      setBubbleText(hints[Math.floor(Math.random() * hints.length)]);
    }, 14000);

    return () => clearInterval(interval);
  }, [hasLessonContext]);

  return (
    <div className="fixed bottom-24 sm:bottom-8 right-4 sm:right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Speech bubble prompt */}
      {showBubble && (
        <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 shadow-lg text-xs text-[#1A1A1A] max-w-[210px] animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className="font-medium text-[11px] leading-tight truncate">{bubbleText}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowBubble(false);
            }}
            className="p-0.5 text-gray-400 hover:text-black transition-colors rounded-full"
            aria-label="Dismiss bubble"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={onClick}
        className="pointer-events-auto group flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-[#1A1A1A] hover:bg-black text-white shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-200 border border-white/10 cursor-pointer"
        aria-label="Open Tia AI Voice Learning Assistant"
      >
        <TiaAvatar state={state} size="sm" showBadge={false} />
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-xs tracking-wide">Tia AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <span className="text-[9px] text-gray-300 font-mono">Voice Tutor</span>
        </div>
      </button>
    </div>
  );
};
