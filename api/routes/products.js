import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
} from '../controllers/products.js';

const router = express.Router();

router.route('/')
  .get(getAllProducts)
  .post(createProduct);

router.route('/:id')
  .get(getProductById);

export default router;
