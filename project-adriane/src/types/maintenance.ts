export interface MaintenanceRecord {
  id: string;
  color: string;
  model: string;
  brand: string;
  city: string;
  maintenanceType: string;
  cost: number;
  licensePlate: string;
  maintenanceDate: string;
  vehicleType: string;
}

export type MaintenanceFormData = Omit<MaintenanceRecord, 'id'>;

export interface MaintenanceStats {
  totalCost: number;
  averageCost: number;
  maintenanceCount: number;
  costByVehicleType: Record<string, number>;
  costByMaintenanceType: Record<string, number>;
}