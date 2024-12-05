import React from 'react';
import { ArrowRight } from 'lucide-react';

const recentOrders = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    date: '2024-03-15',
    amount: 1250.00,
    status: 'Confirmed',
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    date: '2024-03-14',
    amount: 850.00,
    status: 'Pending',
  },
  {
    id: 'ORD-003',
    customer: 'Bob Johnson',
    date: '2024-03-13',
    amount: 2100.00,
    status: 'Completed',
  },
];

export function RecentOrders() {
  return (
    <div className="space-y-4">
      {recentOrders.map((order) => (
        <div
          key={order.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
        >
          <div>
            <p className="font-medium text-gray-900">{order.customer}</p>
            <p className="text-sm text-gray-500">{order.date}</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-gray-900">${order.amount.toFixed(2)}</p>
            <p className="text-sm text-gray-500">{order.status}</p>
          </div>
        </div>
      ))}
      <button className="flex items-center text-brand-red hover:text-brand-red-light text-sm font-medium">
        View all orders
        <ArrowRight className="ml-1 h-4 w-4" />
      </button>
    </div>
  );
}