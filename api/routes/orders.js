import express from 'express';
import { protect } from '../middleware/auth.js';
import { getOrderById, updateOrderStatus } from '../controllers/orders.js';

const router = express.Router();

router.route('/:id')
  .get(protect, getOrderById)
  .put(protect, updateOrderStatus);

export default router;
