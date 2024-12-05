import React from 'react';
import { Sparkles } from 'lucide-react';
import { MenuItem } from '../ui/MenuItem';
import { MenuCategory } from '../ui/MenuCategory';
import { menuCategories } from '../../data/menuData';

export function Menu() {
  return (
    <section id="menu" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-food-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-red/10">
            <Sparkles className="h-5 w-5 text-brand-red animate-pulse-slow" />
            <span className="ml-2 text-brand-red">Culinary Masterpieces</span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gradient">
            A Symphony of Flavors
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Each dish is crafted with passion and precision
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {menuCategories.map((category) => (
            <MenuCategory key={category.name} name={category.name}>
              {category.items.map((item) => (
                <MenuItem
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </MenuCategory>
          ))}
        </div>
      </div>
    </section>
  );
}