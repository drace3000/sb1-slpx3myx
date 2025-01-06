import React from 'react';
import { ArrowDown } from 'lucide-react';

interface ScrollToBottomProps {
  onClick: () => void;
  show: boolean;
}

export default function ScrollToBottom({ onClick, show }: ScrollToBottomProps) {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:shadow-xl"
      aria-label="Scroll to bottom"
    >
      <span>New Messages</span>
      <ArrowDown className="h-4 w-4" />
    </button>
  );
}