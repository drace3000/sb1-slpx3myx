import React from 'react';
import { Mail } from 'lucide-react';

interface EmailVerificationBannerProps {
  email: string;
}

export default function EmailVerificationBanner({ email }: EmailVerificationBannerProps) {
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <div className="flex">
        <div className="flex-shrink-0">
          <Mail className="h-5 w-5 text-blue-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800">
            Verify your email
          </h3>
          <div className="mt-2 text-sm text-blue-700">
            <p>
              We've sent a verification email to <strong>{email}</strong>.
              Please check your inbox and click the verification link to complete your registration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}