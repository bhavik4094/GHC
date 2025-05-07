import React from 'react';
import bigImg from '../../assets/img/about-img.webp';
import smallImg from '../../assets/img/hero-img1.webp';
import googleLogo from '../../assets/img/google-logo.webp';
import facebookLogo from '../../assets/img/facebook-logo.webp';
import nextdoorLogo from '../../assets/img/nextdoor.webp';
import transLogo from '../../assets/img/tranperent-icon.webp';

const AboutUsSection = () => {
    const about = {
        heading: 'ABOUT US',
        description:
            'Green Hammer Concrete provides top-quality concrete services to Palm Bay and the surrounding areas. With our team of experienced professionals, we guarantee superior results for all residential, commercial and industrial projects. Our commitment to excellence ensures satisfaction every time.',
        smallImage: smallImg,
        bigImage: bigImg,
    };

    const socialIcons = [
        { src: googleLogo, alt: 'Google Logo' },
        { src: facebookLogo, alt: 'Facebook Logo' },
        { src: nextdoorLogo, alt: 'Nextdoor Logo' },
        { src: transLogo, alt: 'Transparent Icon' },
    ];

    return (
        <section className="about-us-section">
            <div className="container-xxl py-5 px-3">
                <div className="row">
                    {/* === Left Column === */}
                    <div className="col-lg-5 col-md-4  mb-lg-0">
                        {/* Heading */}
                        <div className="d-flex about-heading-box align-items-center">
                            <h2 className="about-heading mb-0 responsive-nowrap">{about.heading}</h2>
                            <div
                                className="about-headerline flex-grow-1 d-block hide-md-only"
                                style={{ height: '1px', minWidth: '20px' }}
                            ></div>
                        </div>

                        {/* Description */}
                        <p className="about-text">{about.description}</p>

                        {/* Social Icons & Small Image */}
                        <div className=" mt-4  about-icon-box-div">
                            <div className="about-icon-box d-none d-md-flex">
                                {socialIcons.map((icon, index) => (
                                    <img
                                        key={index}
                                        src={icon.src}
                                        alt={icon.alt}
                                        className="footer-card-logo2"
                                        style={{ maxWidth: "50px", height: "100%", width: "100%" }}
                                    />
                                ))}
                            </div>
                            <img
                                src={about.smallImage}
                                alt="Concrete Driveway Project"
                                className="about-img1 d-none d-lg-block"
                            />
                        </div>
                    </div>

                    {/* === Mobile Image Column === */}




                    {/* === Right Column === */}
                    <div className="col-lg-7 col-md-8 col-12 about-img-section-div d-none d-md-block">
                        <img
                            src={about.bigImage}
                            alt="Green Hammer Concrete Team"
                            className="about-img-section"
                        />
                    </div>


                </div>

            </div>

            <div>
                {/* Images Side-by-Side */}
                <div className="d-flex mx-0 justify-content-between d-block d-md-none" style={{ height: "200px" }}>
                    <img
                        src={about.smallImage}
                        alt="Concrete Driveway"
                        className="img-fluid me-2 mt-auto"
                        style={{ width: '40%', objectFit: "contain", height: "auto" }}
                    />
                    <img
                        src={about.bigImage}
                        alt="Green Hammer Team"
                        className="img-fluid mb-auto"
                        style={{ width: '60%', objectFit: "contain", height: "auto" }}
                    />
                </div>

                {/* Social Icons */}
                <div className="d-flex justify-content-center gap-4 d-block d-md-none mt-4">
                    {socialIcons.slice(0, 3).map((icon, index) => (
                        <img
                            key={index}
                            src={icon.src}
                            alt={icon.alt}
                            style={{
                                width: '50px',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    ))}
                </div>
            </div>



        </section >
    );
};

export default AboutUsSection;
