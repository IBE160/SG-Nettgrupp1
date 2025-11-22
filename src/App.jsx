import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LoginPage from "./LoginPage";
import ProductCatalog from "./ProductCatalog";
import ProductDetailPage from "./ProductDetailPage";
import ShoppingCart from "./ShoppingCart";
import CheckoutPage from "./CheckoutPage";

function Home({ loggedIn }) {
	const [count, setCount] = useState(0);

	return (
		<>
			{loggedIn && <div data-testid="user-menu">User Menu</div>}
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noopener">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noopener">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [cart, setCart] = useState([]);

	const addToCart = (product, quantity) => {
		setCart(prevCart => {
			const itemInCart = prevCart.find(item => item.id === product.id);
			if (itemInCart) {
				return prevCart.map(item =>
					item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
				);
			} else {
				return [...prevCart, { ...product, quantity }];
			}
		});
	};

	const updateQuantity = (productId, newQuantity) => {
		if (newQuantity <= 0) {
			removeFromCart(productId);
		} else {
			setCart(prevCart =>
				prevCart.map(item =>
					item.id === productId ? { ...item, quantity: newQuantity } : item
				)
			);
		}
	};

	const removeFromCart = (productId) => {
		setCart(prevCart => prevCart.filter(item => item.id !== productId));
	};

	const getCartItemCount = () => {
		return cart.reduce((total, item) => total + item.quantity, 0);
	};

	return (
		<div>
			<nav>
				<Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/products">Products</Link> | <Link to="/cart">Cart ({getCartItemCount()})</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home loggedIn={loggedIn} />} />
				<Route
					path="/login"
					element={<LoginPage setLoggedIn={setLoggedIn} />}
				/>
				<Route path="/products" element={<ProductCatalog />} />
				<Route path="/products/:id" element={<ProductDetailPage addToCart={addToCart} />} />
				<Route path="/cart" element={<ShoppingCart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
				<Route path="/checkout" element={<CheckoutPage cart={cart} />} />
			</Routes>
		</div>
	);
}

export default App;

