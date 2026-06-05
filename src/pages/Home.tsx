import { Link } from 'react-router-dom';

export default function Home(){

    return(
            <>
                <div className="padding"></div>
                <main className="home-page">
                    <section className="home-hero">
                        <div className="home-hero-copy">
                            <p className="home-eyebrow">Red Lead Learning Hub</p>
                            <h1>Build math confidence one lesson at a time.</h1>
                            <p className="home-lead">
                                Clear lessons, steady practice, and a simple path from review to mastery.
                                Start with the basics, move at your pace, and keep your progress in view.
                            </p>
                            <div className="home-actions">
                                <Link className="home-primary-button" to="/lessons">Start Learning</Link>
                            </div>
                        </div>

                        <div className="home-hero-panel">
                            <p className="home-panel-label">What you get</p>
                            <div className="home-stat-grid">
                                <div className="home-stat-card">
                                    <span className="home-stat-value">7</span>
                                    <span className="home-stat-text">core lesson paths</span>
                                </div>
                                <div className="home-stat-card">
                                    <span className="home-stat-value">1</span>
                                    <span className="home-stat-text">focused place to begin</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="home-section">
                        <div className="home-section-heading">
                            <p className="home-eyebrow">How it works</p>
                            <h2>Follow a simple flow from topic selection to practice.</h2>
                        </div>

                        <div className="home-steps">
                            <article className="home-step-card">
                                <span className="home-step-number">01</span>
                                <h3>Pick a lesson</h3>
                                <p>Choose a topic from the lesson list that matches your current level or review goal.</p>
                            </article>
                            <article className="home-step-card">
                                <span className="home-step-number">02</span>
                                <h3>Work through the material</h3>
                                <p>Move through concepts in a clear order so each step builds on the one before it.</p>
                            </article>
                            <article className="home-step-card">
                                <span className="home-step-number">03</span>
                                <h3>Keep going</h3>
                                <p>Return to the lessons whenever you need a refresher or want to strengthen a weak spot.</p>
                            </article>
                        </div>
                    </section>

                    <section className="home-mission">
                        <div>
                            <p className="home-eyebrow">Mission</p>
                            <h2>Make math feel approachable, consistent, and worth returning to.</h2>
                        </div>
                        <p>
                            The goal is to keep the learning path simple and calm: fewer distractions, clearer structure,
                            and a style that feels steady while you work through the material.
                        </p>
                    </section>
                </main>
            </>
        
        );
}