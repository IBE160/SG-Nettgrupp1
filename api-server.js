import express from 'express';
import productsRouter from './api/routes/products.js'; // justér sti om nødvendig

const app = express();

// Må komme FØR routerne, ellers er req.body = undefined
app.use(express.json());

// Alle produkt-endepunkter under /api/products
app.use('/api/products', productsRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
