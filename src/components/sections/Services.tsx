import React from 'react';
import { Users2, Utensils, GlassWater, PartyPopper } from 'lucide-react';

const services = [
  {
    icon: Users2,
    title: 'Corporate Events',
    description: 'Professional catering solutions for business meetings, conferences, and corporate gatherings.',
  },
  {
    icon: PartyPopper,
    title: 'Private Parties',
    description: 'Personalized menus and service for birthdays, anniversaries, and special celebrations.',
  },
  {
    icon: Utensils,
    title: 'Wedding Catering',
    description: 'Elegant dining experiences for your perfect wedding day, from cocktail hour to reception.',
  },
  {
    icon: GlassWater,
    title: 'Full-Service Events',
    description: 'Complete event planning including staffing, rentals, and beverage service.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive catering solutions for every occasion
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}