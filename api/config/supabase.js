import { createClient } from '@supabase/supabase-js';

// These variables are loaded from the .env file by 'dotenv/config' in api-server.js
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Server environment variables VITE_SUPABASE_URL and SUPABASE_SERVICE_KEY must be set.');
}

// IMPORTANT: This client is for server-side operations and uses the service_role key.
// Never expose this key on the client side.
export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});