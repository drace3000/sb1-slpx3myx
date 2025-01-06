import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from './firebase';

export async function sendMessage(text: string) {
  if (!auth.currentUser) {
    return { error: 'Must be logged in to send messages' };
  }

  try {
    const username = `Guest-${auth.currentUser.uid.slice(0, 4)}`;
    
    await addDoc(collection(db, 'messages'), {
      text,
      username,
      userId: auth.currentUser.uid,
      timestamp: serverTimestamp(),
    });
    return { error: null };
  } catch (error) {
    console.error('Error sending message:', error);
    return { error: 'Failed to send message' };
  }
}