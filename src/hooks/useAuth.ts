import { useState, useCallback } from 'react';
import { signInAsGuest, signIn, signUp, signOut } from '../lib/auth';

export function useAuth() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignInAsGuest = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const { error } = await signInAsGuest();
      if (error) setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSignIn = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const { user, error } = await signIn(email, password);
      if (error) setError(error);
      return { user, error };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSignUp = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const { user, error } = await signUp(email, password);
      if (error) setError(error);
      return { user, error };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSignOut = useCallback(async () => {
    try {
      setIsLoading(true);
      const { error } = await signOut();
      if (error) setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return {
    error,
    isLoading,
    signInAsGuest: handleSignInAsGuest,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
    clearError
  };
}