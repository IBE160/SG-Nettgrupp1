import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  getAllOrders,
  getOrderById,
} from '../controllers/orders.js';

const router = express.Router();

router.route('/').get(protect, getAllOrders);
router.route('/:id').get(protect, getOrderById);

export default router;
