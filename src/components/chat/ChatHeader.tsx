import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function ChatHeader() {
  return (
    <div className="relative py-8">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/90 via-green-50/95 to-green-50" />
      </div>
      
      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-2">
          <MessageSquare className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-1">
          Community Chat
        </h2>
        <p className="text-lg text-gray-600">
          Connect with fellow microgreen enthusiasts
        </p>
      </div>
    </div>
  );
}