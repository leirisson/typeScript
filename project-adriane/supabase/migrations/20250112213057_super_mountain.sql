/*
  # Add profile insert policy
  
  1. Changes
    - Add policy to allow inserting profiles during registration
    
  2. Security
    - Only allows inserting a profile if the user_id matches the authenticated user's ID
*/

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);