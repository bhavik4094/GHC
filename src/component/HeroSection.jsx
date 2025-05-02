import React from "react";
import heroImg1 from "../assets/img/hero-img2.webp"
import heroImg2 from "../assets/img/hero-img1.webp"

const HeroSection = () => {
    return (
        <section className="hero-section position-relative text-white">
            {/* Background Image */}
            <div className="hero-bg-overlay d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-content">
                            <h1 className="hero-heading display-2 mb-0">GREEN HAMMER CONCRETE</h1>
                            <p className="lead mb-0">
                                Reliable concrete company serving Palm Bay, FL and surrounding areas.
                                Specializing in quality driveways, sidewalks, patios, slabs and more.
                            </p>
                            {/* <div className="d-flex gap-3 mt-5">
                                <button className="btn btn-success fw-bold px-4 py-2">GET A FREE QUOTE</button>
                                <button className="btn btn-outline-light fw-bold px-4 py-2">CALL US</button>
                            </div> */}
                            <div className="d-flex gap-3 mt-5">
                                <button className="btn btn-green flex-grow-1 flex-md-grow-0">
                                    GET A FREE QUOTE
                                </button>
                                <button className="btn btn-outline-green flex-grow-1 flex-md-grow-0">
                                    CALL US
                                </button>
                            </div>
                        </div>

                        {/* Right-side Images */}
                        <div className="col-md-6 d-none d-md-block herosection-img-container">
                            <img
                                src={heroImg1}
                                alt="Concrete Project 1"
                                className="img-fluid img-top shadow"
                            />
                            <img
                                src={heroImg2}
                                alt="Concrete Project 2"
                                className="img-fluid img-bottom shadow mt-5"
                            />
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default HeroSection;
