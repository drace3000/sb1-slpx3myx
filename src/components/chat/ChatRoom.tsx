import React, { useEffect, useRef, useState } from 'react';
import { collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import type { Message } from '../../types/chat';

interface ChatRoomProps {
  username: string;
}

export default function ChatRoom({ username }: ChatRoomProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('timestamp', 'desc'),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() } as Message))
        .reverse();
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text: string) => {
    await addDoc(collection(db, 'messages'), {
      text,
      userId: username, // Use username as userId
      userName: username,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            isOwnMessage={msg.userId === username}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
}