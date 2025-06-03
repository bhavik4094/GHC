import React from 'react'
import footerPageTear from "../../assets/img/footer-pagetear-img.webp"

function BlogHero({ hero_title }) {
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
                    <h2 className="text-uppercase mb-0" style={{ maxWidth: "576px", fontWeight: "800" }}>{hero_title}</h2>
                    <br />
                    <br />
                </div>
            </div>

            {/* Bottom Overlay Vector Image */}
            <img
                src={footerPageTear}
                alt="Decorative vector"
                className="hero-bottom-vector"
            />
        </section>
    )
}

export default BlogHero