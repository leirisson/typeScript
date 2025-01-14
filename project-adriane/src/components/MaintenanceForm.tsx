import React from 'react';
import { MaintenanceFormData } from '../types/maintenance';

interface MaintenanceFormProps {
  onSubmit: (data: MaintenanceFormData) => void;
}

export function MaintenanceForm({ onSubmit }: MaintenanceFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: MaintenanceFormData = {
      color: formData.get('color') as string,
      model: formData.get('model') as string,
      brand: formData.get('brand') as string,
      city: formData.get('city') as string,
      maintenanceType: formData.get('maintenanceType') as string,
      cost: Number(formData.get('cost')),
      licensePlate: formData.get('licensePlate') as string,
      maintenanceDate: formData.get('maintenanceDate') as string,
      vehicleType: formData.get('vehicleType') as string,
    };
    onSubmit(data);
    e.currentTarget.reset();
  };

  const vehicleTypes = [
    'Carro',
    'Moto',
    'Caminhão',
    'Van',
    'Ônibus',
    'Outro'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
            Tipo do Veículo
          </label>
          <select
            id="vehicleType"
            name="vehicleType"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Selecione um tipo</option>
            {vehicleTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700">
            Modelo
          </label>
          <input
            type="text"
            id="model"
            name="model"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
            Marca
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">
            Cor
          </label>
          <input
            type="text"
            id="color"
            name="color"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700">
            Placa
          </label>
          <input
            type="text"
            id="licensePlate"
            name="licensePlate"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            Cidade
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="maintenanceType" className="block text-sm font-medium text-gray-700">
            Tipo de Manutenção
          </label>
          <input
            type="text"
            id="maintenanceType"
            name="maintenanceType"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="cost" className="block text-sm font-medium text-gray-700">
            Valor
          </label>
          <input
            type="number"
            id="cost"
            name="cost"
            step="0.01"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="maintenanceDate" className="block text-sm font-medium text-gray-700">
            Data da Manutenção
          </label>
          <input
            type="date"
            id="maintenanceDate"
            name="maintenanceDate"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Registrar Manutenção
        </button>
      </div>
    </form>
  );
}