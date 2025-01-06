import { Timestamp } from 'firebase/firestore';

export interface Message {
  id: string;
  text: string;
  username: string;
  userId: string;
  timestamp: Timestamp;
}