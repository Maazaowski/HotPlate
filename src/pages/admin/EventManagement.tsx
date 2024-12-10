import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export function EventManagement() {
  const { data: events, isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      // Replace with actual API call
      return [];
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Event Management</h1>
        <Button className="flex items-center gap-2">
          Create New Event
        </Button>
      </div>

      <div className="grid gap-6">
        {events?.map((event: Event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div>
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                Edit
              </Button>
              <Button variant="secondary" size="sm">
                Cancel
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}