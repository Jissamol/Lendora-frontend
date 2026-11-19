import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            const response = await fetch(`${API_URL}/api/auth/login/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: email.trim().toLowerCase(), password }),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || "Unable to log in with those details.");
            }

            localStorage.setItem("accessToken", data.access);
            localStorage.setItem("refreshToken", data.refresh);
            localStorage.setItem("userRole", data.role);
            navigate(data.role === "lender" ? "/lender-portal" : "/borrower-portal");
        } catch (requestError) {
            setError(requestError instanceof Error ? requestError.message : "Unable to log in. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="auth-page">
            <section className="auth-card" aria-labelledby="login-title">
                <Link to="/" className="auth-logo">
                    <span className="logo-mark" aria-hidden="true">L</span>
                    Lendora
                </Link>
                <p className="auth-eyebrow">Welcome back</p>
                <h1 id="login-title">Log in to your account</h1>
                <p className="auth-description">Sign in to find and share resources in your community.</p>

                {new URLSearchParams(location.search).has("registered") && (
                    <p className="auth-success" role="status">Your account is ready. Please log in.</p>
                )}
                {error && <p className="auth-error" role="alert">{error}</p>}

                <form className="auth-form" onSubmit={handleSubmit}>
                    <label htmlFor="login-email">Email address</label>
                    <input
                        id="login-email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <label htmlFor="login-password">Password</label>
                    <input
                        id="login-password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <button className="auth-submit" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Logging in..." : "Log in"}
                    </button>
                </form>

                <p className="auth-switch">
                    Don&apos;t have an account? <Link to="/signup">Create an account</Link>
                </p>
                <p className="auth-admin-link">
                    Administrator? <a href={`${API_URL}/admin/`}>Sign in to the admin portal</a>
                </p>
            </section>
        </main>
    );
}

export default Login;