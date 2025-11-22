import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { useSupabaseAuth } from './lib/supabase-auth-provider';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import LandingPage from './pages/LandingPage'; // Import the new LandingPage

// A component to protect routes that require authentication
const ProtectedRoute = () => {
  const { session } = useSupabaseAuth();
  if (!session) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protected Admin Route */}
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;


