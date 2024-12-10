import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Image as ImageIcon, Upload, X } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function GalleryManagement() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
      </div>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragActive ? 'border-brand-red bg-brand-red/5' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <Upload className="h-12 w-12 text-gray-400" />
          <p className="text-lg font-medium">
            {isDragActive
              ? 'Drop the files here...'
              : 'Drag & drop images here, or click to select'}
          </p>
          <p className="text-sm text-gray-500">
            Supported formats: JPEG, PNG
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {/* Image grid will go here */}
      </div>
    </div>
  );
}