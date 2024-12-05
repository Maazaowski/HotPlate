import React from 'react';
import { InvoiceForm } from '../../components/admin/invoices/InvoiceForm';
import { InvoiceList } from '../../components/admin/invoices/InvoiceList';

export function InvoicePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Invoice Management</h1>
        <button className="bg-brand-red text-white px-4 py-2 rounded-md hover:bg-brand-red-light">
          Create Invoice
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <InvoiceList />
        </div>
        <div>
          <InvoiceForm />
        </div>
      </div>
    </div>
  );
}