import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import EmailVerificationBanner from './EmailVerificationBanner';
import Navbar from '../layout/Navbar';

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignUpSuccess = (email: string) => {
    setVerificationEmail(email);
    setIsSignUp(false);
  };

  const handleLoginSuccess = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isSignUp ? 'Create your account' : 'Sign in to your account'}
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {verificationEmail && (
              <div className="mb-6">
                <EmailVerificationBanner email={verificationEmail} />
              </div>
            )}

            {isSignUp ? (
              <SignUpForm
                onSuccess={(email) => handleSignUpSuccess(email)}
                onCancel={() => setIsSignUp(false)}
              />
            ) : (
              <LoginForm onSuccess={handleLoginSuccess} />
            )}

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="w-full flex justify-center py-2 px-4 border border-green-600 rounded-md shadow-sm text-sm font-medium text-green-600 hover:bg-green-50"
                >
                  {isSignUp ? 'Sign in instead' : 'Create an account'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}