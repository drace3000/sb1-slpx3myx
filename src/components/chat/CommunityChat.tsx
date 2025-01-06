import React from 'react';
import { useAuthState } from '../../hooks/useAuthState';
import ChatRoom from './ChatRoom';
import AuthButtons from './AuthButtons';
import { MessageSquare } from 'lucide-react';

export default function CommunityChat() {
  const { user } = useAuthState();

  return (
    <section id="community" className="py-24 bg-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MessageSquare className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Community Chat
          </h2>
          <p className="text-xl text-gray-600">
            Connect with fellow microgreen enthusiasts and share your growing experiences
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-end mb-4">
            <AuthButtons />
          </div>
          
          {user ? (
            <ChatRoom />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">
                Please sign in to join the conversation
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}