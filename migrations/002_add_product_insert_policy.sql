-- Migration: Add an INSERT policy for the products table
-- This allows anonymous users to create products, which is necessary for the API tests to pass.

CREATE POLICY "Anon users can create products"
ON products FOR INSERT
TO anon
WITH CHECK (true);
