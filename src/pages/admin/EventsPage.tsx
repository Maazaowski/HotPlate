import React from 'react';
import { EventCalendar } from '../../components/admin/events/EventCalendar';
import { EventList } from '../../components/admin/events/EventList';

export function EventsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Event Management</h1>
        <button className="bg-brand-red text-white px-4 py-2 rounded-md hover:bg-brand-red-light">
          Schedule Event
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EventCalendar />
        </div>
        <div>
          <EventList />
        </div>
      </div>
    </div>
  );
}