import React from 'react'

function ServiceHero() {
    return (
        <section className="video-banner-section">
            {/* Background Image */}
            <img
                src="https://landing-page-app-hero-images.s3.amazonaws.com/media/15cfc0ed-f1a7-408a-98f3-0551fa3f9426.png"
                alt="Concrete background"
                className="hero-background-img"
            />

            {/* Content Overlay */}
            <div className="video-hero-overlay text-center flex-column">
                <div className="service-hero-container w-100 d-flex justify-content-center align-items-center flex-column">
                    <div className="container text-center service-hero-container-inner" style={{ maxWidth: "1280px", width: "100%" }}>
                        <div className="service-hero-first d-grid">
                            <div className="service-hero-heading  text-uppercase d-grid">
                                <span className='text-center'> services</span>
                                <h2 className='mb-0'>Driveway Repair & Replacements</h2>
                            </div>
                            <div className="service-hero-subheading ">
                                <p className='mb-0 '>Our driveway repair and replacement service offers homeowners a reliable solution for fixing or upgrading their existing driveways, ensuring durability and enhancing the overall aesthetic appeal of their property.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cta-btns d-flex flex-column flex-md-row justify-content-center gap-3 service-hero-buttons-container">
                        <a href="#" class="quote-button service-hero-buttons">GET A FREE QUOTE</a>
                        <a href="#" class="call-button service-hero-buttons">CALL US</a>
                    </div>
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

export default ServiceHero




