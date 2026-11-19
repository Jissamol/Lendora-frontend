import { Link, Navigate, useNavigate } from "react-router-dom";
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

    if (!localStorage.getItem("accessToken") || localStorage.getItem("userRole") !== role) {
        return <Navigate to="/login" replace />;
    }

    const content = PORTAL_CONTENT[role];

    function handleLogout() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userRole");
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
            </section>
        </main>
    );
}

export default Portal;
