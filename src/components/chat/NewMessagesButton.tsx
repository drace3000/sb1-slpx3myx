import React from 'react';
import { ArrowDown } from 'lucide-react';

interface NewMessagesButtonProps {
  onClick: () => void;
  show: boolean;
}

export default function NewMessagesButton({ onClick, show }: NewMessagesButtonProps) {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-2 px-4 py-2 bg-green-600/95 backdrop-blur-sm text-white rounded-full 
                shadow-lg hover:bg-green-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
      aria-label="Scroll to new messages"
    >
      <span className="text-sm font-medium">New Messages</span>
      <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
    </button>
  );
}