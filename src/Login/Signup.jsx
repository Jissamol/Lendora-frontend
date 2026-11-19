import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("borrower");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(`${API_URL}/api/auth/signup/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, role, password, confirm_password: confirmPassword }),
            });
            const data = await response.json();

            if (!response.ok) {
                const firstError = Object.values(data)[0];
                throw new Error(Array.isArray(firstError) ? firstError[0] : "Unable to create your account.");
            }

            navigate("/login?registered=1");
        } catch (requestError) {
            setError(requestError instanceof Error ? requestError.message : "Unable to create your account. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="auth-page">
            <section className="auth-card" aria-labelledby="signup-title">
                <Link to="/" className="auth-logo">
                    <span className="logo-mark" aria-hidden="true">L</span>
                    Lendora
                </Link>
                <p className="auth-eyebrow">Join your community</p>
                <h1 id="signup-title">Create your account</h1>
                <p className="auth-description">Sign up to borrow, lend, and share nearby.</p>

                {error && <p className="auth-error" role="alert">{error}</p>}

                <form className="auth-form" onSubmit={handleSubmit}>
                    <label htmlFor="signup-name">Full name</label>
                    <input
                        id="signup-name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />

                    <label htmlFor="signup-email">Email address</label>
                    <input
                        id="signup-email"
                        type="email"
                        autoComplete="email"
                        maxLength={150}
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <label htmlFor="signup-role">I want to join as</label>
                    <select
                        id="signup-role"
                        required
                        value={role}
                        onChange={(event) => setRole(event.target.value)}
                    >
                        <option value="borrower">Borrower</option>
                        <option value="lender">Lender</option>
                    </select>

                    <label htmlFor="signup-password">Password</label>
                    <input
                        id="signup-password"
                        type="password"
                        autoComplete="new-password"
                        minLength={8}
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <label htmlFor="signup-confirm-password">Confirm password</label>
                    <input
                        id="signup-confirm-password"
                        type="password"
                        autoComplete="new-password"
                        minLength={8}
                        required
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />

                    <button className="auth-submit" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Creating account..." : "Create account"}
                    </button>
                </form>

                <p className="auth-switch">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </section>
        </main>
    );
}

export default Signup;