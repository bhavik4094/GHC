import React from 'react';
import bigImg from '../../assets/img/about-img.webp';
import smallImg from '../../assets/img/hero-img1.webp';
import googleLogo from '../../assets/img/google-logo.webp';
import facebookLogo from '../../assets/img/facebook-logo.webp';
import nextdoorLogo from '../../assets/img/nextdoor.webp';

const AboutUsSection = () => {
    const about = {
        heading: 'ABOUT US',
        description:
            'Green Hammer Concrete provides top-quality concrete services to Palm Bay and the surrounding areas. With our team of experienced professionals, we guarantee superior results for all residential, commercial and industrial projects. Our commitment to excellence ensures satisfaction every time.',
        google_maps_url: 'https://maps.google.com',
        facebook_url: 'https://facebook.com',
        nextdoor_url: 'https://nextdoor.com',
        small_image: smallImg,
        big_image: bigImg,
    };

    return (
        <section className="about-us-section">
            <div className="container py-5">
                <div className="row align-items-center justify-content-center">
                    {/* === Left Column === */}
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <div className='d-flex gap-2 align-items-center justify-content-between'>
                            <h2 className="about-heading">{about.heading}</h2>
                            <div className="bg-secondary d-none d-lg-block my-3" style={{ height: '1px' }}></div>
                        </div>
                        <p className="about-text">{about.description}</p>

                        {/* Social Icons and Small Image */}
                        <div className="row mt-4">
                            {/* Social Icons */}
                            <div className="col-md-6 col-12 mb-3 mb-md-0">
                                <div className="social-icons d-flex gap-3">
                                    {about.google_maps_url && (
                                        <a href={about.google_maps_url} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={googleLogo}
                                                alt="Google"
                                                className="hover-raise"
                                            />
                                        </a>
                                    )}
                                    {about.facebook_url && (
                                        <a href={about.facebook_url} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={facebookLogo}
                                                alt="Facebook"
                                                className="hover-raise"
                                            />
                                        </a>
                                    )}
                                    {about.nextdoor_url && (
                                        <a href={about.nextdoor_url} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={nextdoorLogo}
                                                alt="Nextdoor"
                                                className="hover-raise"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Desktop-only small image */}
                            <div className="col-md-6 d-none d-lg-block">
                                <img
                                    src={about.small_image}
                                    alt="Driveway Project"
                                    className="img-fluid mb-3"
                                />
                            </div>
                        </div>
                    </div>

                    {/* === Right Column === */}
                    <div className="col-lg-6 text-center position-relative">
                        {/* Mobile image (small) overlayed or stacked */}
                        <div className="d-block d-lg-none mb-3">
                            <img
                                src={about.small_image}
                                alt="Driveway Project Mobile"
                                className="img-fluid"
                            />
                        </div>

                        {/* Main Image */}
                        <img
                            src={about.big_image}
                            alt="Team Photo"
                            className="img-fluid rounded img-section"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
