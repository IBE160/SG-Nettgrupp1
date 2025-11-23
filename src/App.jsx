import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LoginPage from "./LoginPage";
import ProductCatalog from "./ProductCatalog";
import AdminDashboard from "./pages/AdminDashboard";
import AdminOrderDetailPage from "./pages/AdminOrderDetailPage";

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

	return (
		<div>
			<nav>
				<Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/products">Products</Link> | <Link to="/admin">Admin</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home loggedIn={loggedIn} />} />
				<Route
					path="/login"
					element={<LoginPage setLoggedIn={setLoggedIn} />}
				/>
				<Route path="/products" element={<ProductCatalog />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/order/:id" element={<AdminOrderDetailPage />} />
			</Routes>
		</div>
	);
}

export default App;
