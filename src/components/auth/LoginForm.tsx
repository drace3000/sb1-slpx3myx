import React, { useState } from 'react';
import { Mail, Lock, Loader } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface LoginFormProps {
  onSuccess: () => void;
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signInAsGuest, isLoading, error, clearError } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    const { error } = await signIn(email, password);
    if (!error) onSuccess();
  };

  const handleGuestSignIn = async () => {
    await signInAsGuest();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="••••••••"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? (
            <Loader className="h-5 w-5 animate-spin mx-auto" />
          ) : (
            'Sign In'
          )}
        </button>

        <button
          type="button"
          onClick={handleGuestSignIn}
          disabled={isLoading}
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
        >
          Continue as Guest
        </button>
      </div>
    </form>
  );
}