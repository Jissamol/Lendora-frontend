
import { useState } from "react";
import Navbar from "./Navbar.jsx";
import "./Home.css";

const resources = [
    {
        id: 1,
        name: "Programming Laptop",
        category: "Electronics",
        location: "Kottayam",
        condition: "Excellent",
        icon: "💻"
    },
    {
        id: 2,
        name: "Python Programming Book",
        category: "Books",
        location: "Thodupuzha",
        condition: "Good",
        icon: "📚"
    },
    {
        id: 3,
        name: "Gardening Tool Kit",
        category: "Tools",
        location: "Kochi",
        condition: "Excellent",
        icon: "🪴"
    }
];

const categories = [
    { name: "Books", icon: "📚" },
    { name: "Electronics", icon: "💻" },
    { name: "Sports", icon: "⚽" },
    { name: "Tools", icon: "🛠️" },
    { name: "Kitchen", icon: "🍳" },
    { name: "Gardening", icon: "🌱" }
];

function Home() {
    const [search, setSearch] = useState("");

    const filteredResources = resources.filter((item) =>
        `${item.name} ${item.category} ${item.location}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <>
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-content">
                        <span className="hero-badge">
                            🌿 Share More, Waste Less
                        </span>

                        <h1>
                            Why Buy When
                            <br />
                            You Can <span>Borrow?</span>
                        </h1>

                        <p>
                            Discover useful resources around you.
                            Share what you own, borrow what you need
                            and build a sustainable community together.
                        </p>

                        <div className="hero-buttons">
                            <a href="#resources" className="primary-btn">
                                Explore Resources →
                            </a>

                            <a href="/register" className="secondary-btn">
                                Start Sharing
                            </a>
                        </div>

                        <div className="hero-stats">
                            <div>
                                <h3>500+</h3>
                                <span>Resources</span>
                            </div>
                            <div>
                                <h3>300+</h3>
                                <span>Community Members</span>
                            </div>
                            <div>
                                <h3>100%</h3>
                                <span>Sharing Spirit</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-image-card">
                            <div className="hero-illustration">🌍</div>
                            <div className="floating-card floating-one">
                                <span>📦</span>
                                <div>
                                    <strong>Share Resources</strong>
                                    <small>Give unused items a purpose</small>
                                </div>
                            </div>

                            <div className="floating-card floating-two">
                                <span>🤝</span>
                                <div>
                                    <strong>Build Connections</strong>
                                    <small>Share with your community</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Search Section */}
                <section className="search-section">
                    <div>
                        <h2>What are you looking for?</h2>
                        <p>Find useful things available in your community.</p>
                    </div>

                    <div className="search-box">
                        <span>🔍</span>
                        <input
                            type="text"
                            placeholder="Search books, laptops, tools..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button onClick={() =>
                            document.getElementById("resources")
                                .scrollIntoView({ behavior: "smooth" })
                        }>
                            Search
                        </button>
                    </div>
                </section>

                {/* Categories */}
                <section className="categories-section" id="categories">
                    <div className="section-heading">
                        <div>
                            <span className="section-label">EXPLORE</span>
                            <h2>Browse Categories</h2>
                            <p>Find exactly what you need.</p>
                        </div>
                    </div>

                    <div className="category-grid">
                        {categories.map((category) => (
                            <div
                                className="category-card"
                                key={category.name}
                                onClick={() => setSearch(category.name)}
                            >
                                <div className="category-icon">
                                    {category.icon}
                                </div>
                                <h3>{category.name}</h3>
                                <span>Explore →</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Resources */}
                <section className="resources-section" id="resources">
                    <div className="section-heading resource-heading">
                        <div>
                            <span className="section-label">DISCOVER</span>
                            <h2>Featured Resources</h2>
                            <p>Useful things shared by your community.</p>
                        </div>
                        <a href="/resources" className="view-all">
                            View All →
                        </a>
                    </div>

                    <div className="resource-grid">
                        {filteredResources.length > 0 ? (
                            filteredResources.map((item) => (
                                <div className="resource-card" key={item.id}>
                                    <div className="resource-image">
                                        <span>{item.icon}</span>
                                        <span className="available-badge">
                                            Available
                                        </span>
                                    </div>

                                    <div className="resource-info">
                                        <span className="resource-category">
                                            {item.category}
                                        </span>
                                        <h3>{item.name}</h3>
                                        <p>📍 {item.location}</p>
                                        <div className="resource-footer">
                                            <span>
                                                ✓ {item.condition}
                                            </span>
                                            <a href="/login">View Details →</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="no-results">
                                No resources found. Try another search.
                            </p>
                        )}
                    </div>
                </section>

                {/* How It Works */}
                <section className="how-section" id="how-it-works">
                    <div className="section-heading centered">
                        <span className="section-label">SIMPLE PROCESS</span>
                        <h2>How Lendora Works</h2>
                        <p>Sharing resources has never been easier.</p>
                    </div>

                    <div className="steps-grid">
                        <div className="step-card">
                            <span className="step-number">01</span>
                            <div className="step-icon">🔍</div>
                            <h3>Discover</h3>
                            <p>
                                Find resources available near your location.
                            </p>
                        </div>

                        <div className="step-card">
                            <span className="step-number">02</span>
                            <div className="step-icon">📩</div>
                            <h3>Request</h3>
                            <p>
                                Choose your dates and send a borrowing request.
                            </p>
                        </div>

                        <div className="step-card">
                            <span className="step-number">03</span>
                            <div className="step-icon">🤝</div>
                            <h3>Collect</h3>
                            <p>
                                Get approval and collect your requested item.
                            </p>
                        </div>

                        <div className="step-card">
                            <span className="step-number">04</span>
                            <div className="step-icon">💚</div>
                            <h3>Return</h3>
                            <p>
                                Return the item and share your experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* About / CTA */}
                <section className="cta-section" id="about">
                    <div>
                        <span>🌱 A BETTER WAY TO SHARE</span>
                        <h2>
                            Your unused items can make
                            someone's day.
                        </h2>
                        <p>
                            Join Lendora and become part of a community
                            that believes in sharing, caring and sustainability.
                        </p>
                        <a href="/register" className="cta-button">
                            Join Our Community →
                        </a>
                    </div>
                    <div className="cta-emoji">🌍</div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <a href="/" className="logo footer-logo">
                    <span className="logo-icon">♻</span>
                    Lendora<span className="logo-dot">.</span>
                </a>

                <p>Share Locally. Live Sustainably.</p>

                <span>© 2026 Lendora. All rights reserved.</span>
            </footer>
        </>
    );
}

export default Home;
