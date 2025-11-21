import { supabase } from '../config/supabase.js'; // Re-use the existing Supabase client

export const protect = async (req, res, next) => {
    let token;

    // 1. Check for token in headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // 2. Verify token using Supabase
            // Assuming the 'supabase' client has access to the auth service
            const { data: { user }, error } = await supabase.auth.getUser(token);

            if (error || !user) {
                return res.status(401).json({ message: 'Not authorized, token failed' });
            }

            // Attach user to the request object for access in controllers
            req.user = user;
            next(); // Proceed to the next middleware/controller
        } catch (error) {
            console.error('Auth middleware error:', error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};