import React from 'react';
import { ImageUploader } from '../../components/admin/gallery/ImageUploader';
import { GalleryGrid } from '../../components/admin/gallery/GalleryGrid';

export function GalleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
        <ImageUploader />
      </div>
      
      <GalleryGrid />
    </div>
  );
}