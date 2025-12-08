import { Navigate, Outlet } from 'react-router-dom';
import { useSupabaseAuth } from '@/lib/supabase-auth-provider';

const ProtectedRoute = () => {
  const { session, loading } = useSupabaseAuth();

  // If the session is still loading, we can show a loading indicator.
  // This prevents a flicker of the login page before the user is authenticated.
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there is no session, redirect the user to the login page.
  if (!session) {
    return <Navigate to="/" replace />;
  }

  // If there is a session, render the child routes.
  // The <Outlet /> component from react-router-dom will render the nested routes.
  return <Outlet />;
};

export default ProtectedRoute;
