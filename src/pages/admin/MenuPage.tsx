import React from 'react';
import { MenuItemForm } from '../../components/admin/menu/MenuItemForm';
import { MenuItemList } from '../../components/admin/menu/MenuItemList';

export function MenuPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Menu Management</h1>
        <button className="bg-brand-red text-white px-4 py-2 rounded-md hover:bg-brand-red-light">
          Add New Item
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MenuItemList />
        </div>
        <div>
          <MenuItemForm />
        </div>
      </div>
    </div>
  );
}