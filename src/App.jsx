import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LoginPage from "./LoginPage";
import ProductCatalog from "./ProductCatalog";

import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<LandingPage />} />

	return (
		<div>
			<nav>
				<Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/products">Products</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home loggedIn={loggedIn} />} />
				<Route
					path="/login"
					element={<LoginPage setLoggedIn={setLoggedIn} />}
				/>
				<Route path="/products" element={<ProductCatalog />} />
			</Routes>
		</div>
	);
}

export default App;
