import { Route, Routes } from "react-router-dom";
import "./App.css";

// Component Imports
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";

// Page Imports
import LoginPage from "./LoginPage";
import ProductCatalog from "./ProductCatalog";
import ProductDetailPage from "./ProductDetailPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminOrderDetailPage from "./pages/AdminOrderDetailPage";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./CheckoutPage";
import OrderConfirmationPage from "./OrderConfirmationPage";
import LandingPage from "./pages/LandingPage";

function App() {
	return (
		<div className="min-h-screen flex flex-col bg-black text-white">
			<Header />
			<main className="flex-grow">
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/products" element={<ProductCatalog />} />
					<Route path="/products/:id" element={<ProductDetailPage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route path="/confirmation/:orderRef" element={<OrderConfirmationPage />} />
					
					{/* Protected Admin Routes */}
					<Route element={<ProtectedRoute />}>
						<Route path="/admin" element={<AdminDashboard />} />
						<Route path="/admin/orders/:orderId" element={<AdminOrderDetailPage />} />
					</Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
