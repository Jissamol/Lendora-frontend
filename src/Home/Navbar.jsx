
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo">
                    <span className="logo-mark" aria-hidden="true">L</span>
                    Lendora
                </Link>

                <div className="nav-actions">
                    <Link to="/login" className="login-btn">Login</Link>
                    <Link to="/login" className="signup-btn">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}
  
export default Navbar;
