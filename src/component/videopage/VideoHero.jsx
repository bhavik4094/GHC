import React from 'react';

const VideoHero = ({ hero_title, hero_description }) => {
    return (
        <section className="video-banner-section">
            {/* Background Image */}
            <img
                src="https://products.codersh.com/greenhammerconcrete/wp-content/uploads/2025/05/hero-bg.webp"
                alt="Concrete background"
                className="hero-background-img"
            />

            {/* Content Overlay */}
            <div className="video-hero-overlay text-center">
                <div className="container">
                    <h2 className="text-uppercase">{hero_title}</h2>
                    <span className="hero-description">
                        {hero_description}
                    </span>
                </div>
            </div>

            {/* Bottom Overlay Vector Image */}
            <img
                src="https://products.codersh.com/greenhammerconcrete/wp-content/uploads/2025/05/vector-light2.svg"
                alt="Decorative vector"
                className="hero-bottom-vector"
            />
        </section>
    );
};

export default VideoHero;
