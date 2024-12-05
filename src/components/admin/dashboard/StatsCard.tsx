import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down';
}

export function StatsCard({ title, value, change, icon: Icon, trend }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="p-3 bg-brand-red/10 rounded-full">
          <Icon className="h-6 w-6 text-brand-red" />
        </div>
      </div>
      <div className="mt-4">
        <span
          className={cn(
            'text-sm font-medium',
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          )}
        >
          {change}
        </span>
        <span className="text-sm text-gray-600"> from last month</span>
      </div>
    </div>
  );
}