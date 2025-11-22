import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { useSupabaseAuth } from './lib/supabase-auth-provider';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/Products';
import ProductDetailPage from './pages/ProductDetailPage';
import Layout from './components/Layout'; // Import the Layout component

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
      <Route element={<Layout />}> {/* Wrap routes with Layout */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Admin Route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;


