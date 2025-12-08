import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/config/supabase';

const AuthContext = createContext();

export const SupabaseAuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false);
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const value = {
    session,
    loading,
    signIn: (options) => supabase.auth.signInWithPassword(options),
    signOut: () => supabase.auth.signOut(),
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useSupabaseAuth = () => {
  return useContext(AuthContext);
};
