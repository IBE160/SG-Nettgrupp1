import express from 'express';
import { createTestOrder, deleteTestOrder } from '../controllers/test.js';

const router = express.Router();

router.route('/orders')
  .post(createTestOrder);

router.route('/orders/:id')
  .delete(deleteTestOrder);

export default router;