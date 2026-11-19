
import Navbar from "./Navbar.jsx";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">
            <Navbar />

            <main>
                <section className="hero">
                    <div className="hero-content">
                        <span className="hero-badge">
                            Share more, waste less
                        </span>

                        <h1>
                            Why buy when
                            <br />
                            you can <span>borrow?</span>
                        </h1>

                        <p>
                            Find what you need from people nearby. Share more,
                            spend less, and build a stronger community.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/login" className="primary-btn">
                                Explore resources <span aria-hidden="true">→</span>
                            </Link>
                            <Link to="/login" className="secondary-btn">
                                Start sharing
                            </Link>
                        </div>

                        <div className="hero-stats">
                            <div>
                                <strong>500+</strong>
                                <span>Resources</span>
                            </div>
                            <div>
                                <strong>300+</strong>
                                <span>Community members</span>
                            </div>
                            <div>
                                <strong>100%</strong>
                                <span>Sharing spirit</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-media">
                        <video
                            className="hero-video"
                            autoPlay
                            muted
                            loop
                            playsInline
                            aria-label="Neighbors sharing items in their community"
                        >
                            <source src="/videos/homepage.mp4" type="video/mp4" />
                        </video>
                        <div className="media-label">
                            <span className="media-label-icon" aria-hidden="true">↗</span>
                            <span>
                                <strong>Good things grow together</strong>
                                <small>Share locally. Live sustainably.</small>
                            </span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
