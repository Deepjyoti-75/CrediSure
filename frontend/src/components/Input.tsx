"use client";

import { InputHTMLAttributes, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  showPasswordToggle?: boolean;
}

export default function Input({
  label,
  type = 'text',
  showPasswordToggle = false,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4 transform transition-transform duration-300 hover:scale-[1.02] focus-within:scale-[1.02]">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F25F30] focus:border-[#F25F30] text-white"
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}