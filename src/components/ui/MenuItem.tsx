import React from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <div className="menu-item hover-trigger">
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-baseline">
          <h4 className="text-xl font-semibold text-brand-red">
            {name}
          </h4>
          <span className="text-brand-red font-bold">{price}</span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}