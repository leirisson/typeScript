export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          id: string
          name: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          updated_at?: string
        }
      }
      vehicles: {
        Row: {
          id: string
          user_id: string
          brand: string
          model: string
          year: number
          plate: string
          color: string
          city: string
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          brand: string
          model: string
          year: number
          plate: string
          color: string
          city: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          brand?: string
          model?: string
          year?: number
          plate?: string
          color?: string
          city?: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      maintenance_records: {
        Row: {
          id: string
          vehicle_id: string
          city: string
          amount: number
          description: string
          maintenance_type: 'preventive' | 'corrective' | 'other'
          vehicle_type: 'car' | 'motorcycle' | 'truck' | 'other'
          maintenance_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          vehicle_id: string
          city: string
          amount: number
          description: string
          maintenance_type: 'preventive' | 'corrective' | 'other'
          vehicle_type: 'car' | 'motorcycle' | 'truck' | 'other'
          maintenance_date: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          vehicle_id?: string
          city?: string
          amount?: number
          description?: string
          maintenance_type?: 'preventive' | 'corrective' | 'other'
          vehicle_type?: 'car' | 'motorcycle' | 'truck' | 'other'
          maintenance_date?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Enums: {
      maintenance_type: 'preventive' | 'corrective' | 'other'
      vehicle_type: 'car' | 'motorcycle' | 'truck' | 'other'
    }
  }
}