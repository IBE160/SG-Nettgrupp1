import express from 'express';
import 'dotenv/config'; // Load environment variables
import { supabase } from './api/config/supabase.js'; // Import supabase client


import productRoutes from './api/routes/products.js';

const app = express();
app.use(express.json());

// Mount the products router
app.use('/api/products', productRoutes);

app.listen(3001, () => {
  console.log('API server listening on port 3001');
});
