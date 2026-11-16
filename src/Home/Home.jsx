
import Navbar from "./Navbar.jsx";
import "./Home.css";

function Home() {
    return (
        <>
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="hero">
                    <video
                        className="hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-hidden="true"
                    >
                        <source src="/videos/homepage.mp4" type="video/mp4" />
                    </video>
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

                </section>
            </main>
        </>
    );
}

export default Home;
