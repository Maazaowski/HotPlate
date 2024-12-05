import React from 'react';
import { StaffList } from '../../components/admin/staff/StaffList';
import { StaffForm } from '../../components/admin/staff/StaffForm';

export function StaffPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
        <button className="bg-brand-red text-white px-4 py-2 rounded-md hover:bg-brand-red-light">
          Add Staff Member
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StaffList />
        </div>
        <div>
          <StaffForm />
        </div>
      </div>
    </div>
  );
}