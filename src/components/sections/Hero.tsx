import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red-dark/90 via-brand-red/70 to-transparent" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-yellow/20 backdrop-blur-sm border border-brand-yellow/30">
              <Sparkles className="h-5 w-5 text-brand-yellow animate-pulse-slow" />
              <span className="ml-2 text-brand-yellow">Experience Culinary Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-white">Elevate Your</span>
              <br />
              <span className="text-brand-yellow">Culinary Journey</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Immerse yourself in a world where every dish tells a story, and every bite is an adventure. Our innovative approach to catering transforms your events into unforgettable gastronomic experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="glass-card hover:bg-white/90"
              >
                Explore Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}