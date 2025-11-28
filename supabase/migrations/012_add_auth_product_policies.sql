-- Migration: Add UPDATE and DELETE policies for authenticated users on the products table.
-- This allows any logged-in user (assumed to be an admin) to modify or delete products.

CREATE POLICY "Authenticated users can update products"
ON products FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products"
ON products FOR DELETE
TO authenticated
USING (true);
