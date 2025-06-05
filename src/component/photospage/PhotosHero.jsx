import React from 'react'
import footerPageTear from "../../assets/img/footer-pagetear-img.webp"

function PhotosHero() {
    return (
        <section className="video-banner-section">
            {/* Background Image */}
            <img
                src="https://products.codersh.com/greenhammerconcrete/wp-content/uploads/2025/05/hero-bg.webp"
                alt="Concrete background"
                className="hero-background-img"
            />

            {/* Content Overlay */}
            <div className="video-hero-overlay text-center flex-column">

                <div className="photos-hero-content">
                    <h2 className='text-uppercase mb-0'>Our Best Work</h2>
                    <p className=" mt-4 mb-0">See for yourself why our customers love us</p>
                    <div className="cta-btns d-flex flex-column flex-md-row justify-content-center gap-3 photoshero-btncntnr">
                        <a href="#" class="quote-button photos-hero-btns">GET A FREE QUOTE</a>
                        <a href="#" class="call-button photos-hero-btns">CALL US</a>
                    </div>
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

export default PhotosHero