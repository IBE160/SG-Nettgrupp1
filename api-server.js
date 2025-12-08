import express from 'express';
import 'dotenv/config'; // Load environment variables
import { supabase } from './api/config/supabase.js'; // Import supabase client


import productRoutes from './api/routes/products.js';
import cartRoutes from './api/routes/cart.js';
import orderRoutes from './api/routes/orders.js';
import adminRoutes from './api/routes/admin.js';
import testRoutes from './api/routes/test.js';

const app = express();

// Må komme FØR routerne, ellers er req.body = undefined
app.use(express.json());

// Mount routers
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/test', testRoutes);

// Global error handler - must be the last piece of middleware
app.use((err, req, res, next) => {
  console.error('Global Unhandled Error:', err.stack || err);
  res.status(500).json({ message: err.message || 'An unexpected server error occurred.' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
