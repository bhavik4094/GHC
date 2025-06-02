import React from "react";
import heroImg1 from "../../assets/img/hero-img2.webp";
import heroImg2 from "../../assets/img/hero-img1.webp";

// Content object for easier updates or future dynamic fetching
const heroContent = {
    heading: "GREEN HAMMER CONCRETE",
    description:
        "Reliable concrete company serving Palm Bay, FL and surrounding areas. Specializing in quality driveways, sidewalks, patios, slabs and more.",
    buttons: [
        { text: "GET A FREE QUOTE", variant: "green", action: "#" },
        { text: "CALL US", variant: "outline-green", action: "tel:3219170196" },
    ],
    images: [
        { src: heroImg1, alt: "Concrete Project 1", position: "top" },
        { src: heroImg2, alt: "Concrete Project 2", position: "bottom" },
    ],
};

const HeroSection = () => {
    return (
        <section className="hero-section position-relative text-white">
            <div className="hero-bg-overlay ">
                <div className="container-xxl">
                    <div className="row hero-row">
                        {/* Left Text Content */}
                        <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 px-3 text-content">
                            <h1 className="hero-heading display-2 mb-0">{heroContent.heading}</h1>
                            <p className="lead mb-0">{heroContent.description}</p>

                            <div className="d-flex flex-column flex-md-row gap-3 mt-3 mt-md-5">
                                <a href="#" class="quote-button">GET A FREE QUOTE</a>
                                <a href="#" class="call-button">CALL US</a>
                            </div>
                        </div>

                        {/* Right Image Column */}
                        <div className="col-xl-4 d-none d-xl-block herosection-img-container">
                            {heroContent.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className={`img-fluid img-${img.position} shadow`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
