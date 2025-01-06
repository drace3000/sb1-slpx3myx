import React from 'react';
import { AlertCircle } from 'lucide-react';

interface AuthErrorProps {
  message: string;
  onDismiss: () => void;
}

export default function AuthError({ message, onDismiss }: AuthErrorProps) {
  return (
    <div 
      onClick={onDismiss}
      className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg cursor-pointer"
      role="alert"
    >
      <AlertCircle className="h-4 w-4 flex-shrink-0" />
      <span>{message}</span>
    </div>
  );
}