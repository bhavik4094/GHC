import React from "react";
import heroImg1 from "../../assets/img/hero-img2.webp"
import heroImg2 from "../../assets/img/hero-img1.webp"


const HeroSection = () => {
    return (
        <div>
            <section className="hero-section position-relative text-white">
                {/* Background Image */}
                <div className="hero-bg-overlay">
                    <div className="container-xl">
                        <div className="row hero-row ">
                            <div className=" col-xl-6 col-lg-8 col-md-10 col-sm-12 px-3 text-content">
                                <h1 className="hero-heading display-2 mb-0">GREEN HAMMER CONCRETE</h1>
                                <p className="lead mb-0">
                                    Reliable concrete company serving Palm Bay, FL and surrounding areas.
                                    Specializing in quality driveways, sidewalks, patios, slabs and more.
                                </p>
                                {/* <div className="d-flex gap-3 mt-5">
                                <button className="btn btn-success fw-bold px-4 py-2">GET A FREE QUOTE</button>
                                <button className="btn btn-outline-light fw-bold px-4 py-2">CALL US</button>
                            </div> */}
                                <div className="d-flex flex-column flex-md-row gap-3 mt-3 mt-md-5">
                                    <button
                                        className="btn btn-green hero-buttons w-100 w-md-auto"
                                        style={{ fontSize: "16px", lineHeight: "24px" }}
                                    >
                                        GET A FREE QUOTE
                                    </button>
                                    <button
                                        className="btn btn-outline-green hero-buttons w-100 w-md-auto"
                                        style={{ fontSize: "16px", lineHeight: "24px" }}
                                    >
                                        CALL US
                                    </button>
                                </div>

                            </div>

                            {/* Right-side Images */}
                            <div className="col-xl-4 d-none d-xl-block herosection-img-container">
                                <img
                                    src={heroImg1}
                                    alt="Concrete Project 1"
                                    className="img-fluid img-top shadow"
                                />
                                <img
                                    src={heroImg2}
                                    alt="Concrete Project 2"
                                    className="img-fluid img-bottom shadow"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HeroSection;
