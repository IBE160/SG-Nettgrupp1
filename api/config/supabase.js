import { createClient } from '@supabase/supabase-js';

// These variables are loaded from the .env file by 'dotenv/config' in api-server.js
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Server environment variables VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);