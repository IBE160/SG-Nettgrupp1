import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

// Page Imports
import LoginPage from "./LoginPage";
import ProductCatalog from "./ProductCatalog";
import ProductDetailPage from "./ProductDetailPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminOrderDetailPage from "./pages/AdminOrderDetailPage";
import CartPage from "./pages/CartPage.jsx"; // Added for cart page
import { useCart } from "./context/CartContext";
import LandingPage from "./pages/LandingPage";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const { cartItems } = useCart();
	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<div>
			<nav>
				<Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/products">Products</Link> | <Link to="/admin">Admin</Link> | <Link to="/cart">Cart (<span data-testid="cart-item-count">{totalItems}</span>)</Link>
			</nav>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route
					path="/login"
					element={<LoginPage setLoggedIn={setLoggedIn} />}
				/>
				<Route path="/products" element={<ProductCatalog />} />
				<Route path="/products/:id" element={<ProductDetailPage />} />
				<Route path="/cart" element={<CartPage />} />
                {/* Admin Routes */}
				<Route path="/admin" element={<AdminDashboard />} />
				<Route path="/admin/orders/:orderId" element={<AdminOrderDetailPage />} />
			</Routes>
		</div>
	);
}

export default App;
