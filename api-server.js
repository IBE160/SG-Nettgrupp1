import express from 'express';
import 'dotenv/config'; // Load environment variables
import { supabase } from './api/config/supabase.js'; // Import supabase client


import productRoutes from './api/routes/products.js';
import cartRoutes from './api/routes/cart.js';

const app = express();
app.use(express.json());

// Mount routers
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.listen(3001, () => {
  console.log('API server listening on port 3001');
});
