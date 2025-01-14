import React from 'react';

import { MaintenanceForm } from '../components/MaintenanceForm';

export default function Maintenance() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Maintenance Records</h1>
        <div className="mt-6">
          <MaintenanceForm />
        </div>
      </div>
    </div>
  );
}