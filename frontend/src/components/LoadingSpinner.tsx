import React from 'react';
import { BookOpen } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="relative">
          <BookOpen className="h-12 w-12 text-blue-600 mx-auto animate-pulse" />
          <div className="absolute inset-0 animate-spin">
            <div className="h-12 w-12 border-4 border-blue-200 border-t-blue-600 rounded-full"></div>
          </div>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-700">Loading EduPort...</p>
      </div>
    </div>
  );
}