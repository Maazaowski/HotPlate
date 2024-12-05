import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <span className="text-3xl font-black tracking-tighter">
          <span className="text-brand-yellow drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">HOT</span>
          <span className="text-brand-yellow drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">PLATE</span>
        </span>
        <div className="absolute -bottom-4 left-0 right-0 text-center">
          <span className="text-white text-sm font-medium tracking-wider">
            Takeaway and Caterers
          </span>
        </div>
      </div>
    </div>
  );
}