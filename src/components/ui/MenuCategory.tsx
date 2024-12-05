import React from 'react';

interface MenuCategoryProps {
  name: string;
  children: React.ReactNode;
}

export function MenuCategory({ name, children }: MenuCategoryProps) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
      <div className="bg-gradient-to-r from-brand-red to-brand-red-light py-6">
        <h3 className="text-2xl font-bold text-center text-white">
          {name}
        </h3>
      </div>
      <div className="divide-y divide-gray-200">
        {children}
      </div>
    </div>
  );
}