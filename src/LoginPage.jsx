import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "./lib/supabase-auth-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
	const navigate = useNavigate();
	const { session, signIn } = useSupabaseAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		// If a session exists, the user is logged in, so redirect to the admin dashboard.
		if (session) {
			navigate("/admin");
		}
	}, [session, navigate]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError("");

		try {
			const { error } = await signIn({ email, password });
			if (error) {
				throw error;
			}
			// Navigation is now handled by the useEffect hook
		} catch (err) {
			setError(err.message || "Login failed");
		}
	};

	return (
		<div className="flex justify-center items-start min-h-[80vh] pt-12 pb-20">
			<Card className="w-full max-w-md">
				<CardHeader className="text-center">
					<CardTitle className="text-2xl">Admin Login</CardTitle>
					<CardDescription>Enter your credentials to access the dashboard.</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
									className="bg-white text-black"
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
									className="bg-white text-black"
								/>
							</div>
							{error && <p className="text-sm text-destructive">{error}</p>}
						</div>
						<Button type="submit" className="w-full" data-testid="login-button">
							Login
						</Button>
					</form>
				</CardContent>
				<CardFooter className="flex flex-col gap-4" />
			</Card>
		</div>
	);
};

export default LoginPage;
