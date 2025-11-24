import express from 'express';
import {
  createCart,
  addCartItem,
  getCartItems,
  updateCartItem,
  deleteCartItem
} from '../controllers/cart.js';

const router = express.Router();

router.route('/')
  .post(createCart);

router.route('/:cartId')
  .get(getCartItems);

router.route('/:cartId/items')
  .post(addCartItem);

router.route('/:cartId/items/:itemId')
  .put(updateCartItem)
  .delete(deleteCartItem);

export default router;