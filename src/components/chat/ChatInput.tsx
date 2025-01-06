import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { auth } from '../../lib/firebase';

interface ChatInputProps {
  onSendMessage: (text: string) => Promise<void>;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !auth.currentUser || isSubmitting) return;

    try {
      setIsSubmitting(true);
      await onSendMessage(message.trim());
      setMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        disabled={!auth.currentUser || isSubmitting}
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!message.trim() || !auth.currentUser || isSubmitting}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
}