import React from 'react';
import { LogIn, LogOut, Loader } from 'lucide-react';
import { auth } from '../../lib/firebase';
import { useAuth } from '../../hooks/useAuth';
import AuthError from './AuthError';

export default function AuthButtons() {
  const { error, isLoading, signIn, signOut, clearError } = useAuth();

  return (
    <div className="flex flex-col items-end gap-2">
      {error && <AuthError message={error} onDismiss={clearError} />}
      
      {auth.currentUser ? (
        <button
          onClick={signOut}
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
      ) : (
        <button
          onClick={signIn}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          {isLoading ? (
            <Loader className="h-5 w-5 animate-spin" />
          ) : (
            <LogIn className="h-5 w-5" />
          )}
          Sign In as Guest
        </button>
      )}
    </div>
  );
}