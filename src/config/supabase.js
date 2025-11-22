import { createClient } from '@supabase/supabase-js';

// These variables are exposed to the client-side code by Vite.
// They must be prefixed with VITE_ in your .env file.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Vite environment variables VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are not set.' +
    'Please create a .env file in the root of the project and add them.'
  );
  throw new Error('Supabase client failed to initialize. Check the console for details.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);