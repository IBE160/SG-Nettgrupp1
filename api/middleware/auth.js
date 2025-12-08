import { createClient } from '@supabase/supabase-js';

export const protect = async (req, res, next) => {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const token = req.headers.authorization.split(' ')[1];

    // Create a new Supabase client for THIS request, authenticated with the user's token.
    const supabaseForUser = createClient(
        process.env.VITE_SUPABASE_URL,
        process.env.VITE_SUPABASE_ANON_KEY, // Use the anon key
        { global: { headers: { Authorization: `Bearer ${token}` } } }
    );

    // Now, get the user from THIS specific client instance
    const { data: { user }, error } = await supabaseForUser.auth.getUser();

    if (error || !user) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }

    // This is the crucial part: Attach a user-specific Supabase client to the request object.
    req.supabase = supabaseForUser;
    req.user = user;
    
    next();
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};
