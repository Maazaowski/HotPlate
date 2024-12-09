import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center shrink-0">
      <span className="text-3xl font-black tracking-tighter">
        <span className="text-brand-yellow drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">HOT</span>
        <span className="text-brand-yellow drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">PLATE</span>
      </span>
      <span className="ml-4 text-white text-sm font-medium tracking-wider">
        Takeaway and Caterers
      </span>
    </div>
  );
}