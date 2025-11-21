import { protect } from '../middleware/auth.js';
import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct // Add this line
} from '../controllers/products.js';

const router = express.Router();

router.route('/')
  .get(getAllProducts)
  .post(protectcreateProduct);

router.route('/:id')
  .get(getProductById)
  .put(protect, updateProduct); // Add this line, protected by middleware

export default router;
