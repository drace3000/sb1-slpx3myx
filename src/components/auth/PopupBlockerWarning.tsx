import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function PopupBlockerWarning() {
  return (
    <div className="fixed top-4 right-4 z-50 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-lg max-w-md animate-fade-in">
      <div className="flex items-start">
        <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">Popup Blocked</h3>
          <div className="mt-1">
            <p className="text-sm text-yellow-700">
              Please allow popups for this site to sign in with Google. 
              Look for the popup blocker icon in your browser's address bar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}