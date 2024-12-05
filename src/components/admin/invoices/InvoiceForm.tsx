import React from 'react';
import { useForm } from 'react-hook-form';
import { Plus } from 'lucide-react';

interface InvoiceFormData {
  customerName: string;
  email: string;
  eventDate: string;
  items: {
    description: string;
    quantity: number;
    price: number;
  }[];
}

export function InvoiceForm() {
  const { register, handleSubmit } = useForm<InvoiceFormData>();

  const onSubmit = (data: InvoiceFormData) => {
    console.log(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Create New Invoice</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Customer Name</label>
          <input
            type="text"
            {...register('customerName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Event Date</label>
          <input
            type="date"
            {...register('eventDate')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Items</label>
          <button
            type="button"
            className="mt-2 inline-flex items-center px-3 py-1 border border-brand-red text-sm text-brand-red rounded-md hover:bg-brand-red hover:text-white"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Item
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-brand-red text-white px-4 py-2 rounded-md hover:bg-brand-red-light"
        >
          Generate Invoice
        </button>
      </form>
    </div>
  );
}