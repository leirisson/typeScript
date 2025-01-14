import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import type { Database } from '../lib/database.types';

type Vehicle = Database['public']['Tables']['vehicles']['Row'];

export default function Vehicles() {
  const { user } = useAuth();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: String(new Date().getFullYear()),
    plate: '',
    color: '',
    city: '',
    description: ''
  });

  useEffect(() => {
    fetchVehicles();
  }, [user]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredVehicles(vehicles);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = vehicles.filter(
        vehicle =>
          vehicle.brand.toLowerCase().includes(query) ||
          vehicle.model.toLowerCase().includes(query) ||
          vehicle.plate.toLowerCase().includes(query) ||
          vehicle.city.toLowerCase().includes(query)
      );
      setFilteredVehicles(filtered);
    }
  }, [searchQuery, vehicles]);

  async function fetchVehicles() {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('vehicles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVehicles(data || []);
      setFilteredVehicles(data || []);
    } catch (err) {
      console.error('Error fetching vehicles:', err);
    }
  }

  function handleEdit(vehicle: Vehicle) {
    setEditingVehicle(vehicle);
    setFormData({
      brand: vehicle.brand,
      model: vehicle.model,
      year: String(vehicle.year),
      plate: vehicle.plate,
      color: vehicle.color,
      city: vehicle.city,
      description: vehicle.description || ''
    });
    setIsModalOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;

    try {
      setError('');
      setLoading(true);

      if (editingVehicle) {
        // Update existing vehicle
        const { error } = await supabase
          .from('vehicles')
          .update({
            ...formData,
            year: parseInt(formData.year, 10),
          })
          .eq('id', editingVehicle.id);

        if (error) throw error;
      } else {
        // First, ensure profile exists
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('id')
          .eq('id', user.id)
          .single();

        if (profileError) {
          // If profile doesn't exist, create it
          const { error: insertError } = await supabase
            .from('profiles')
            .insert([{ id: user.id, name: user.email?.split('@')[0] || 'User' }]);

          if (insertError) throw insertError;
        }

        // Add new vehicle
        const { error } = await supabase
          .from('vehicles')
          .insert([
            {
              ...formData,
              year: parseInt(formData.year, 10),
              user_id: user.id
            }
          ]);

        if (error) throw error;
      }

      setIsModalOpen(false);
      setEditingVehicle(null);
      setFormData({
        brand: '',
        model: '',
        year: String(new Date().getFullYear()),
        plate: '',
        color: '',
        city: '',
        description: ''
      });
      fetchVehicles();
    } catch (err) {
      console.error('Error saving vehicle:', err);
      setError('Failed to save vehicle');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this vehicle?')) return;

    try {
      const { error } = await supabase
        .from('vehicles')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchVehicles();
    } catch (err) {
      console.error('Error deleting vehicle:', err);
    }
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Vehicles</h1>
          <button
            onClick={() => {
              setEditingVehicle(null);
              setFormData({
                brand: '',
                model: '',
                year: String(new Date().getFullYear()),
                plate: '',
                color: '',
                city: '',
                description: ''
              });
              setIsModalOpen(true);
            }}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Vehicle
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search vehicles by brand, model, plate, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Vehicle List */}
        <div className="mt-6 bg-white shadow overflow-hidden rounded-md">
          {filteredVehicles.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              {searchQuery ? 'No vehicles found matching your search.' : 'No vehicles added yet. Add your first vehicle!'}
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredVehicles.map((vehicle) => (
                <li key={vehicle.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {vehicle.brand} {vehicle.model}
                      </h3>
                      <div className="mt-1 text-sm text-gray-500">
                        <p>Year: {vehicle.year}</p>
                        <p>Plate: {vehicle.plate}</p>
                        <p>Color: {vehicle.color}</p>
                        <p>City: {vehicle.city}</p>
                        {vehicle.description && (
                          <p>Description: {vehicle.description}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(vehicle)}
                        className="p-2 text-indigo-600 hover:text-indigo-900"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(vehicle.id)}
                        className="p-2 text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h2 className="text-xl font-semibold mb-4">
                {editingVehicle ? 'Edit Vehicle' : 'Add New Vehicle'}
              </h2>
              {error && (
                <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Brand
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.brand}
                    onChange={(e) =>
                      setFormData({ ...formData, brand: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Model
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.model}
                    onChange={(e) =>
                      setFormData({ ...formData, model: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Year
                  </label>
                  <input
                    type="number"
                    required
                    min="1900"
                    max={new Date().getFullYear() + 1}
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        year: e.target.value
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Plate
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.plate}
                    onChange={(e) =>
                      setFormData({ ...formData, plate: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Color
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.color}
                    onChange={(e) =>
                      setFormData({ ...formData, color: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description (optional)
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setEditingVehicle(null);
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                  >
                    {loading ? (editingVehicle ? 'Saving...' : 'Adding...') : (editingVehicle ? 'Save Changes' : 'Add Vehicle')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}