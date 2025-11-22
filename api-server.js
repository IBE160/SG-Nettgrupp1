import express from 'express';
import 'dotenv/config'; // Load environment variables
import { supabase } from './api/config/supabase.js'; // Import supabase client


import productRoutes from './api/routes/products.js';

const app = express();

// Må komme FØR routerne, ellers er req.body = undefined
app.use(express.json());

// Mount the products router
app.use('/api/products', productRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
