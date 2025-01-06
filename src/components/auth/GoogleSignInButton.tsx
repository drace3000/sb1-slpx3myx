import React from 'react';
import { LogIn, Loader } from 'lucide-react';

interface GoogleSignInButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export default function GoogleSignInButton({ onClick, isLoading }: GoogleSignInButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      aria-label="Sign in with Google"
    >
      {isLoading ? (
        <Loader className="h-5 w-5 animate-spin" />
      ) : (
        <LogIn className="h-5 w-5" />
      )}
      Sign in with Google
    </button>
  );
}