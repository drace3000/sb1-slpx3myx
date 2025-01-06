import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { auth } from '../../lib/firebase';
import type { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const getFormattedTime = () => {
    if (!message.timestamp) return 'Just now';
    try {
      return formatDistanceToNow(message.timestamp.toDate(), { addSuffix: true });
    } catch (error) {
      return 'Just now';
    }
  };

  const formattedTime = getFormattedTime();
  const isOwnMessage = auth.currentUser?.uid === message.userId;

  return (
    <div className={`flex w-full mb-4 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-sm
          ${isOwnMessage 
            ? 'bg-green-600 text-white ml-auto' 
            : 'bg-gray-100 text-gray-800'
          }`}
      >
        <div className={`flex items-baseline gap-2 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
          <span className={`text-sm ${isOwnMessage ? 'text-green-50' : 'text-gray-900'}`}>
            {message.username}
          </span>
          <span className={`text-xs ${isOwnMessage ? 'text-green-100' : 'text-gray-500'}`}>
            {formattedTime}
          </span>
        </div>
        <p className={`mt-1 break-words ${isOwnMessage ? 'text-right' : 'text-left'}`}>
          {message.text}
        </p>
      </div>
    </div>
  );
}