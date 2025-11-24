import express from 'express';
import { protect } from '../middleware/auth.js';
<<<<<<< HEAD
import {
  getAllOrders,
  getOrderById,
  updateOrder,
} from '../controllers/orders.js';

const router = express.Router();

router.route('/').get(protect, getAllOrders);
<<<<<<< HEAD
router.route('/:id').get(protect, getOrderById);
=======
import { getOrderById, updateOrderStatus } from '../controllers/orders.js';

const router = express.Router();

router.route('/:id')
  .get(protect, getOrderById)
  .put(protect, updateOrderStatus);
>>>>>>> hajar
=======
router.route('/:id').get(protect, getOrderById).put(protect, updateOrder);
>>>>>>> cam3_

export default router;
