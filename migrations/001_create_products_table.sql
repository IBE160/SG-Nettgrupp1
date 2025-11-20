-- Migration: Create the products table
-- This table stores information about the cigars and accessories sold in the store.

CREATE TABLE products (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    name text NOT NULL,
    description text,
    price decimal NOT NULL CHECK (price >= 0),
    stock_quantity integer NOT NULL DEFAULT 0,
    land_of_origin text,
    vitola text,
    is_archived boolean NOT NULL DEFAULT false
);

-- Add comments to the columns
COMMENT ON TABLE products IS 'Stores product information for cigars and accessories.';
COMMENT ON COLUMN products.id IS 'Unique identifier for the product.';
COMMENT ON COLUMN products.created_at IS 'Timestamp of when the record was created.';
COMMENT ON COLUMN products.name IS 'The name of the product.';
COMMENT ON COLUMN products.description IS 'A detailed description of the product.';
COMMENT ON COLUMN products.price IS 'The price of the product.';
COMMENT ON COLUMN products.stock_quantity IS 'The current number of items in stock.';
COMMENT ON COLUMN products.land_of_origin IS 'The product''s country of origin.';
COMMENT ON COLUMN products.vitola IS 'The product''s vitola (shape and size).';
COMMENT ON COLUMN products.is_archived IS 'Flag to hide product from public view.';
