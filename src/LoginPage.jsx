import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setLoggedIn }) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError("");

		try {
			const response = await fetch("/api/users/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				const data = await response.json();
				throw new Error(data.message || "Login failed");
			}

			const { token } = await response.json();
			localStorage.setItem("token", token);
			setLoggedIn(true);
			navigate("/");
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div>
			<h1>Login</h1>
			{error && <p style={{ color: "red" }}>{error}</p>}
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						data-testid="email-input"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						data-testid="password-input"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit" data-testid="login-button">
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
