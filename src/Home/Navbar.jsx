
function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-container">
                <a href="/" className="logo"> Lendora </a>

                <nav className="nav-links">
                    <a href="/" className="active">Home</a>
                    <a href="#categories">Categories</a>
                    <a href="#how-it-works">How It Works</a>
                    <a href="#about">About</a>
                </nav>

                <div className="nav-actions">
                    <a href="/login" className="login-btn">Login</a>
                    <a href="/register" className="signup-btn">
                        Get Started
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
