-- Migration: Add an UPDATE policy for the products table
-- This allows the anonymous service role used by the API to update products.

CREATE POLICY "Anon users can update products"
ON products FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);
