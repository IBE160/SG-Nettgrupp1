import { useState } from 'react';
import { Link, Route, Routes, Outlet, Navigate } from 'react-router-dom'; // Kombinerer Link, Route, Routes, Outlet, Navigate
import { useSupabaseAuth } from './lib/supabase-auth-provider'; // Fra Incoming
import LoginPage from './pages/LoginPage'; // Fra Current
import LandingPage from './pages/LandingPage'; // Fra Incoming
import AdminDashboard from './pages/AdminDashboard'; // Fra Incoming
import ProductCatalog from './pages/ProductCatalog'; // Fra Current
import ProductPage from './pages/ProductPage'; // Begge har, behold én
import ProductDetailPage from './pages/ProductDetailpage'; // Fra Incoming
import Layout from './components/Layout'; // Fra Incoming
// viteLogo, reactLogo, og App.css er sannsynligvis ikke nødvendig hvis du bruker Layout, men kan inkluderes om de trengs.

// Legg til ProtectedRoute funksjonen (fra linje 12-17 i Incoming)
const ProtectedRoute = ({ children }) => {
  const { session } = useSupabaseAuth();
  if (!session) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

function App() {
  function App() {
    return (
      <Routes>
        {/* 1. Ruter inni Layout-komponenten (Incoming) */}
        <Route element={<Layout />}>
          {/* Ruter som skal ha Layout-header/footer osv. */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Route>

        {/* 2. Ruter uten Layout (f.eks. login/404) (Kombinerer fra Current) */}
        <Route path="/login" element={<LoginPage />} />
        {/* Current har også /settings, hvis den trengs */}
        {/* <Route path="/settings" element={<settingsLogin />} /> */}

        {/* 3. Protected Route (Incoming) */}
        <Route path="/protected" element={<ProtectedRoute />}>
          {/* Rute under beskyttelse */}
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
      // Fjern alle hardkodede lenker som er i Current-versjonen
    );
  }

  export default App;
}

export default App;


