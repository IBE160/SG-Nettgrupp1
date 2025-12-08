import express from 'express';
import { protect } from '../middleware/auth.js';
import { getAllAdminProducts } from '../controllers/admin.js';

const router = express.Router();

// All routes in this file are automatically prefixed with /api/admin
router.route('/products').get(protect, getAllAdminProducts);

export default router;
