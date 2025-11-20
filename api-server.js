import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import 'dotenv/config'; // Load environment variables
import { supabase } from './api/config/supabase.js'; // Import supabase client


import productRoutes from './api/routes/products.js';

const app = express();
app.use(express.json());

// Mount the products router
app.use('/api/products', productRoutes);


const JWT_SECRET = 'your-super-secret-key'; // In a real app, this should be in an environment variable

const users = [];
let nextId = 1;

app.post('/api/users/register', async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User with this email already exists.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: nextId++,
    email,
    name,
    password: hashedPassword,
  };

  users.push(user);

  res.status(201).json({
    id: user.id,
    email: user.email,
    name: user.name,
  });
});

app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password.' });
  }

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

app.listen(3001, () => {
  console.log('API server listening on port 3001');
});
