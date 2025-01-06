import { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { sendMessage } from '../lib/chat';
import type { Message } from '../types/chat';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('timestamp', 'desc'),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs
        .map(doc => ({
          id: doc.id,
          text: doc.data().text || '',
          username: doc.data().username || 'Anonymous',
          userId: doc.data().userId || '',
          timestamp: doc.data().timestamp || null
        } as Message))
        .reverse();
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (text: string) => {
    setError(null);
    const { error } = await sendMessage(text);
    if (error) setError(error);
  };

  return { messages, error, sendMessage: handleSendMessage };
}