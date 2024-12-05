import React from 'react';
import { cn } from '../../../utils/cn';

interface InvoiceStatusProps {
  status: 'paid' | 'pending' | 'overdue';
}

export function InvoiceStatus({ status }: InvoiceStatusProps) {
  return (
    <span
      className={cn(
        'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
        {
          'bg-green-100 text-green-800': status === 'paid',
          'bg-yellow-100 text-yellow-800': status === 'pending',
          'bg-red-100 text-red-800': status === 'overdue',
        }
      )}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}