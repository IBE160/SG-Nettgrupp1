import express from 'express';
import { protect } from '../middleware/auth.js';
<<<<<<< HEAD
import {
  getAllOrders,
  getOrderById,
} from '../controllers/orders.js';

const router = express.Router();

router.route('/').get(protect, getAllOrders);
router.route('/:id').get(protect, getOrderById);
=======
import { getOrderById, updateOrderStatus } from '../controllers/orders.js';

const router = express.Router();

router.route('/:id')
  .get(protect, getOrderById)
  .put(protect, updateOrderStatus);
>>>>>>> hajar

export default router;
