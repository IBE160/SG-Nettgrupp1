import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from '../controllers/orders.js';

const router = express.Router();

router.route('/')
  .get(protect, getAllOrders)
  .post(createOrder);

router.route('/:id')
  .get(protect, getOrderById)
  .put(protect, updateOrder)
  .delete(protect, deleteOrder);

export default router;
