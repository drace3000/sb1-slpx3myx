import React, { useState } from 'react';
import ChatRoom from './ChatRoom';
import { generateUsername } from '../../utils/username';

export default function SimpleChat() {
  const [username] = useState(() => generateUsername());

  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Community Chat
          </h2>
          <p className="text-xl text-gray-600">
            Connect with fellow microgreen enthusiasts
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <ChatRoom username={username} />
        </div>
      </div>
    </section>
  );
}