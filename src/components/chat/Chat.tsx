import React, { useRef, useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import NewMessagesButton from './NewMessagesButton';
import { useChat } from '../../hooks/useChat';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../lib/firebase';

export default function Chat() {
  const { messages, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(true);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!messagesContainerRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
    setShowScrollButton(!isNearBottom);
  };

  useEffect(() => {
    if (messagesContainerRef.current) {
      const { scrollHeight, clientHeight } = messagesContainerRef.current;
      messagesContainerRef.current.scrollTop = scrollHeight - clientHeight - 1;
      handleScroll();
    }
  }, [messages]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleSignOut = async () => {
    await auth.signOut();
    navigate('/login');
  };

  const handleSendMessage = async (text: string) => {
    await sendMessage(text);
    scrollToBottom();
  };

  return (
    <section className="min-h-screen bg-green-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChatHeader />

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="h-[600px] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b bg-white">
              <div className="relative">
                <NewMessagesButton 
                  onClick={scrollToBottom}
                  show={showScrollButton}
                />
              </div>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
            
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </section>
  );
}