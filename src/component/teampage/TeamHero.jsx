import React from 'react'

function TeamHero({ heading, description, }) {
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
                <div className="container d-flex justify-content-center align-items-center flex-column">
                    <h2 className="text-uppercase mb-0" style={{ maxWidth: "576px" }}>{heading}</h2>
                    <span className="hero-description2" style={{ maxWidth: "576px" }}>
                        {description}
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
    )
}

export default TeamHero