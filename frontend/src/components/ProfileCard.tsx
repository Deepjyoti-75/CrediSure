import React from 'react';

interface ProfileCardProps {
  name: string;
  role: string;
  linkedinUrl: string;
  linkedinUsername: string;
  instagramUsername: string;
  email: string;
}

export function ProfileCard({ name, role, linkedinUrl, linkedinUsername, instagramUsername, email }: ProfileCardProps) {
  return (
    <div className="mt-12 h-full w-full max-w-md p-6 bg-black border border-gray-800 rounded-lg">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">{name}</h2>
      <p className="text-gray-400 mb-6 text-center">{role}</p>
      
      <div className="space-y-4">
        {/* LinkedIn */}
        <div className="flex items-center">
          <div className="h-10 w-10 flex items-center justify-center bg-[#F25F30] rounded-md mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F25F30] underline transition-colors">
            {linkedinUsername}
          </a>
        </div>
        
        {/* Instagram */}
        <div className="flex items-center">
          <div className="h-10 w-10 flex items-center justify-center bg-[#F25F30] rounded-md mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <a href={`https://instagram.com/${instagramUsername}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F25F30] underline transition-colors">
            {instagramUsername}
          </a>
        </div>
        
        {/* Email */}
        <div className="flex items-center">
          <div className="h-10 w-10 flex items-center justify-center bg-[#F25F30] rounded-md mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <a href={`mailto:${email}`} className="text-white hover:text-[#F25F30] underline transition-colors">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};
