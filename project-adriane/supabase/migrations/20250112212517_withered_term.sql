/*
  # Initial Schema for Vehicle Maintenance Application

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `name` (text)
      - `updated_at` (timestamp)
    
    - `vehicles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `brand` (text)
      - `model` (text)
      - `year` (integer)
      - `plate` (text)
      - `color` (text)
      - `city` (text)
      - `description` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `maintenance_records`
      - `id` (uuid, primary key)
      - `vehicle_id` (uuid, references vehicles)
      - `city` (text)
      - `amount` (decimal)
      - `description` (text)
      - `maintenance_type` (enum: preventive, corrective, other)
      - `vehicle_type` (enum: car, motorcycle, truck, other)
      - `maintenance_date` (timestamp)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Create custom types
CREATE TYPE maintenance_type AS ENUM ('preventive', 'corrective', 'other');
CREATE TYPE vehicle_type AS ENUM ('car', 'motorcycle', 'truck', 'other');

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  name text NOT NULL,
  updated_at timestamptz DEFAULT now()
);

-- Create vehicles table
CREATE TABLE vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE NOT NULL,
  brand text NOT NULL,
  model text NOT NULL,
  year integer NOT NULL,
  plate text NOT NULL UNIQUE,
  color text NOT NULL,
  city text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create maintenance_records table
CREATE TABLE maintenance_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_id uuid REFERENCES vehicles ON DELETE CASCADE NOT NULL,
  city text NOT NULL,
  amount decimal(10,2) NOT NULL CHECK (amount >= 0),
  description text NOT NULL,
  maintenance_type maintenance_type NOT NULL,
  vehicle_type vehicle_type NOT NULL,
  maintenance_date timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE maintenance_records ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can view own vehicles"
  ON vehicles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own vehicles"
  ON vehicles FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own vehicles"
  ON vehicles FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can delete own vehicles"
  ON vehicles FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can view own maintenance records"
  ON maintenance_records FOR SELECT
  TO authenticated
  USING (
    vehicle_id IN (
      SELECT id FROM vehicles WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert own maintenance records"
  ON maintenance_records FOR INSERT
  TO authenticated
  WITH CHECK (
    vehicle_id IN (
      SELECT id FROM vehicles WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own maintenance records"
  ON maintenance_records FOR UPDATE
  TO authenticated
  USING (
    vehicle_id IN (
      SELECT id FROM vehicles WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete own maintenance records"
  ON maintenance_records FOR DELETE
  TO authenticated
  USING (
    vehicle_id IN (
      SELECT id FROM vehicles WHERE user_id = auth.uid()
    )
  );

-- Create functions
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON vehicles
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON maintenance_records
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();