import React from 'react';
import { useForm } from 'react-hook-form';
import { Plus, Minus, FileText } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

interface InvoiceForm {
  customerName: string;
  customerEmail: string;
  items: InvoiceItem[];
  notes: string;
}

export function InvoiceGeneration() {
  const { register, handleSubmit, watch } = useForm<InvoiceForm>({
    defaultValues: {
      items: [{ description: '', quantity: 1, price: 0 }],
    },
  });

  const onSubmit = (data: InvoiceForm) => {
    // Handle invoice generation
    console.log(data);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Generate Invoice</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              {...register('customerName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Customer Email
            </label>
            <input
              type="email"
              {...register('customerEmail')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Invoice Items</h3>
          {/* Invoice items will be rendered here */}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Notes
          </label>
          <textarea
            {...register('notes')}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red"
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button type="submit" className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Generate Invoice
          </Button>
        </div>
      </form>
    </div>
  );
}