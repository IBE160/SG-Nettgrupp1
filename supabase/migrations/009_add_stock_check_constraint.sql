-- Migration: Add a CHECK constraint to ensure stock_quantity cannot be negative

ALTER TABLE public.products
ADD CONSTRAINT stock_quantity_non_negative
CHECK (stock_quantity >= 0);
