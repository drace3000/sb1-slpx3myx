import React from 'react';
import { LogOut, Loader } from 'lucide-react';

interface SignOutButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export default function SignOutButton({ onClick, isLoading }: SignOutButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 transition-colors disabled:opacity-50"
    >
      {isLoading ? (
        <Loader className="h-5 w-5 animate-spin" />
      ) : (
        <LogOut className="h-5 w-5" />
      )}
      Sign Out
    </button>
  );
}