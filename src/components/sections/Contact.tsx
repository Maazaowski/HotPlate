import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            Let's discuss your next event
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">+92 300 2025719</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">contact@hotplate.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Location</h3>
                  <p className="mt-1 text-gray-600">Shop 296, Soldier Bazaar No.1, Karachi</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}