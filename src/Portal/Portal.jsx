import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authFetch, logout } from "../auth/auth.js";
import "./Portal.css";

const PORTAL_CONTENT = {
    lender: {
        title: "Lender portal",
        description: "Your space to share items and manage lending activity.",
    },
    borrower: {
        title: "Borrower portal",
        description: "Your space to discover shared items and manage borrowing activity.",
    },
};

function Portal({ role }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        authFetch("/api/auth/me/")
            .then((response) => {
                if (!response.ok) throw new Error("Session expired");
                return response.json();
            })
            .then(setUser)
            .catch(() => {
                navigate("/login");
            });
    }, [navigate]);

    if (!localStorage.getItem("accessToken") || localStorage.getItem("userRole") !== role) {
        return <Navigate to="/login" replace />;
    }

    const content = PORTAL_CONTENT[role];

    async function handleLogout() {
        await logout();
        navigate("/login");
    }

    return (
        <main className="portal-page">
            <header className="portal-header">
                <Link to="/" className="auth-logo">
                    <span className="logo-mark" aria-hidden="true">L</span>
                    Lendora
                </Link>
                <button className="portal-logout" type="button" onClick={handleLogout}>
                    Log out
                </button>
            </header>
            <section className="portal-content">
                <p className="auth-eyebrow">Welcome to Lendora</p>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
                {user && <p>Signed in as {user.email}</p>}
            </section>
        </main>
    );
}

export default Portal;
