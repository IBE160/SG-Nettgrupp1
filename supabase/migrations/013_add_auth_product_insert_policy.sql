-- Migration: Add INSERT policy for authenticated users on the products table.
-- This allows any logged-in user (assumed to be an admin) to create products.

CREATE POLICY "Authenticated users can insert products"
ON products FOR INSERT
TO authenticated
WITH CHECK (true);
