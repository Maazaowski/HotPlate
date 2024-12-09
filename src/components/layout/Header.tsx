import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { NavLink } from '../ui/NavLink';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="bg-brand-red shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Logo />
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#menu">Menu</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+923002025719" className="flex items-center text-white hover:text-brand-yellow transition-colors">
              <Phone className="h-5 w-5 mr-1" />
              <span>+92 300 2025719</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}