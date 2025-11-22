import { supabase } from '../../api/config/supabase.js';

export async function getAuthToken() {
  const email = process.env.SUPABASE_TEST_EMAIL;
  const password = process.env.SUPABASE_TEST_PASSWORD;

  if (!email || !password) {
    throw new Error('Test credentials SUPABASE_TEST_EMAIL and SUPABASE_TEST_PASSWORD must be set in your .env file');
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(`Supabase login failed: ${error.message}`);
  }

  return data.session.access_token;
}
