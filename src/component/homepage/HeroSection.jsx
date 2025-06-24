import React, { useEffect, useState } from 'react';
import axios from 'axios';

// static data
// import heroImg1 from "../../assets/img/hero-img2.webp";
// import heroImg2 from "../../assets/img/hero-img1.webp";
// Content object for easier updates or future dynamic fetching
// const heroContent = {
//     heading: "GREEN HAMMER CONCRETE",
//     description:
//         "Reliable concrete company serving Palm Bay, FL and surrounding areas. Specializing in quality driveways, sidewalks, patios, slabs and more.",
//     buttons: [
//         { text: "GET A FREE QUOTE", variant: "green", action: "#" },
//         { text: "CALL US", variant: "outline-green", action: "tel:3219170196" },
//     ],
//     images: [
//         { src: heroImg1, alt: "Concrete Project 1", position: "top" },
//         { src: heroImg2, alt: "Concrete Project 2", position: "bottom" },
//     ],
// };


// Replace with environment variable in production
const apiBaseUrl = 'http://localhost:5000/';

const HeroSection = () => {

    const [hero, setHero] = useState(null);

    useEffect(() => {
        axios.get(`${apiBaseUrl}api/hero`)
            .then(res => setHero(res.data))
            .catch(err => {
                console.error('Error fetching hero content:', err);
                setHero(null);
            });
    }, []);

    if (!hero || typeof hero !== 'object') return null;

    const images = Array.isArray(hero.images)
        ? hero.images.map(img => ({
            ...img,
            src: img?.src ? `${apiBaseUrl}${img.src}` : '',
        }))
        : [];

    return (
        <section className="hero-section position-relative text-white">
            <div className="hero-bg-overlay ">
                <div className="container-xxl">
                    <div className="row hero-row">
                        {/* Left Text Content */}
                        <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 px-3 text-content">
                            {hero.heading && (
                                <h1 className="hero-heading display-2 mb-0">{hero.heading}</h1>
                            )}
                            {hero.description && (
                                <p className="lead mb-0">{hero.description}</p>
                            )}
                            <div className="d-flex flex-column flex-md-row gap-3 mt-3 mt-md-5">
                                {hero.buttons?.map((btn, i) =>
                                    btn?.text ? (
                                        <a
                                            key={i}
                                            href={btn.action || '#'}
                                            className={btn.variant === 'outline-green' ? 'call-button' : 'quote-button'}
                                        >
                                            {btn.text}
                                        </a>
                                    ) : null
                                )}
                            </div>
                        </div>

                        {/* Right Image Column */}
                        {images.length > 0 && (
                            <div className="col-xl-4 d-none d-xl-block herosection-img-container">
                                {images.map((img, i) =>
                                    img.src ? (
                                        <img
                                            key={i}
                                            src={img.src}
                                            alt={img.alt || 'hero image'}
                                            loading="lazy"
                                            className={`img-fluid img-${img.position} shadow`}
                                        />
                                    ) : null
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
