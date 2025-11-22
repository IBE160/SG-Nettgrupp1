import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Products page */}
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </main>
  );
}

export default App;
