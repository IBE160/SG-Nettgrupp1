import { supabase } from '../../../api/config/supabase.js';

export async function createUser(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    // If the user already exists, we can ignore the error for testing purposes.
    if (error.message.includes('User already registered')) {
      console.warn(`User with email ${email} already exists. Skipping creation.`);
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) {
        throw new Error(`Failed to sign in as existing user: ${signInError.message}`);
      }
      return signInData.user;
    }
    throw new Error(`Error creating user: ${error.message}`);
  }

  return data.user;
}

export async function deleteUser(user) {
    const { error } = await supabase.auth.admin.deleteUser(user.id);
    if (error) {
        throw new Error(`Error deleting user: ${error.message}`);
    }
}
