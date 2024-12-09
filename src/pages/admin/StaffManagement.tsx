import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Phone, Mail, Edit, Trash2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface StaffMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
  status: 'active' | 'inactive';
}

export function StaffManagement() {
  const { data: staff, isLoading } = useQuery({
    queryKey: ['staff'],
    queryFn: async () => {
      // Replace with actual API call
      return [];
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
        <Button className="flex items-center gap-2">
          Add New Staff
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff?.map((member: StaffMember) => (
          <div key={member.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{member.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>{member.phone}</span>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="secondary" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}