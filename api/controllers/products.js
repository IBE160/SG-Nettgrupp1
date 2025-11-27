import { supabase } from '../config/supabase.js';

const ALLOWED_PRODUCT_FIELDS = ['name', 'description', 'price', 'stock_quantity', 'is_archived', 'land_of_origin', 'vitola'];

// Helper to build a data object with only allowed fields that are present in the body
const buildDataFromRequest = (body) => {
  const data = {};
  for (const field of ALLOWED_PRODUCT_FIELDS) {
    if (body[field] !== undefined) {
      data[field] = body[field];
    }
  }
  return data;
};

// @desc    Create a new product
// @route   POST /api/products
export const createProduct = async (req, res) => {
  try {
    const productData = buildDataFromRequest(req.body);

    if (Object.keys(productData).length === 0) {
      return res.status(400).json({ message: 'No valid fields provided for creation' });
    }

    const { data, error } = await supabase
      .from('products')
      .insert([productData])
      .select()
      .single();

    if (error) {
      throw error;
    }

    res.status(201).json(data);
  } catch (error) {
    console.error('Supabase Error in createProduct:', error);
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all products
// @route   GET /api/products
export const getAllProducts = async (req, res) => {
  try {
    const { includeArchived } = req.query;
    let query = supabase
      .from('products')
      .select('*');

    if (includeArchived !== 'true') {
      query = query.eq('is_archived', false);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    res.status(200).json({ data });
  } catch (error) {
    console.error('Supabase Error in getAllProducts:', error);
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get a single product by ID
// @route   GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Supabase Error in getProductById:', error);
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = buildDataFromRequest(req.body);

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: 'No valid fields provided for update' });
    }

    const { data, error } = await supabase
      .from('products')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      // Check for a not-found error specifically
      if (error.code === 'PGRST116') {
        return res.status(404).json({ message: 'Product not found' });
      }
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Supabase Error in updateProduct:', error);
    res.status(400).json({ message: error.message });
  }
};

