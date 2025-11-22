import express from 'express';
import {
  createCart,
  addCartItem
} from '../controllers/cart.js';

const router = express.Router();

router.route('/')
  .post(createCart);

router.route('/:cartId/items')
  .post(addCartItem);

export default router;