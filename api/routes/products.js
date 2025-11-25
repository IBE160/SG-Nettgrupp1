import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createProduct,
  getAllProducts,
  getProductById,
} from '../controllers/products.js';

const router = express.Router();

router.route('/')
  .get(getAllProducts)
  .post(protect, createProduct);

router.route('/:id')
  .get(getProductById);

export default router;
