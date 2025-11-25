import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "./lib/supabase-auth-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
	const navigate = useNavigate();
	const { signIn } = useSupabaseAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError("");

		try {
			const { error } = await signIn({ email, password });
			if (error) {
				throw error;
			}
			navigate("/admin"); // Redirect to admin dashboard on successful login
		} catch (err) {
			setError(err.message || "Login failed");
		}
	};

	return (
		<div className="flex justify-center items-center pb-20" style={{ paddingTop: '20px' }}>
			<Card className="w-full" style={{ maxWidth: '600px' }}>
				<CardHeader className="text-center">
					<CardTitle className="text-2xl">Admin Login</CardTitle>
					<CardDescription>Enter your credentials to access the dashboard.</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="email">Email</Label>
								<Input
									type="email"
									id="email"
									data-testid="email-input"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="your@email.com"
									style={{ boxSizing: 'border-box', width: '100%' }}
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="password">Password</Label>
								<Input
									type="password"
									id="password"
									data-testid="password-input"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									style={{ boxSizing: 'border-box', width: '100%' }}
								/>
							</div>
							{error && <p className="text-sm text-destructive">{error}</p>}
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex flex-col gap-4">
					<Button onClick={handleSubmit} className="w-full" data-testid="login-button">
						Login
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default LoginPage;
