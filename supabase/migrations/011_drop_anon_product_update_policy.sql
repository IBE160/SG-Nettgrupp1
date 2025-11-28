-- Migration: Drop the incorrect anonymous update policy for the products table.
-- This policy was granting update rights to the anon role, which was not intended
-- for authenticated admin users.

DROP POLICY "Anon users can update products" ON products;
