import React from 'react';
import logo from '../../assets/img/logo.webp'; // Replace with your actual logo path
// import { FaFacebookF } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
// import { ImNpm } from 'react-icons/im'; // Substitute with actual icon if needed

const FooterSecond = () => {
    return (
        <footer className="bg-black text-white pt-5 pb-3">
            <div className="container">
                <div className="row g-4">
                    {/* Left - Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <div className="bg-white text-black p-3">
                            <img src={logo} alt="Green Hammer Concrete Logo" className="img-fluid mb-2" />
                            <h6 className="fw-bold mb-1">GREEN HAMMER CONCRETE</h6>
                            <p className="mb-1">Palm Bay, FL, US</p>
                            <p className="mb-2">greenhammerconcrete@gmail.com</p>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <button className="btn btn-green w-50 me-2">CONTACT US</button>
                                <button className="btn btn-outline-green w-50">BOOK NOW</button>
                            </div>
                            <div className="d-flex justify-content-around mt-3">
                                {/* <FcGoogle size={24} />
                                <FaFacebookF color="#1877f2" size={24} />
                                <ImNpm color="green" size={24} /> */}
                            </div>
                        </div>
                    </div>

                    {/* Middle - Links */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-bold">COMPANY</h6>
                        <ul className="list-unstyled">
                            <li>Home</li>
                            <li>Reviews</li>
                            <li>Team</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-bold">SERVICES</h6>
                        <ul className="list-unstyled">
                            <li><a className="secondfooter-links" href="#">Driveway Repair & Replacements</a></li>
                            <li><a className="secondfooter-links" href="#">Patio Design & Construction</a></li>
                            <li><a className="secondfooter-links" href="#">Concrete Slab Installation</a></li>
                            <li><a className="secondfooter-links" href="#">Mitered Ends</a></li>
                            <li><a className="secondfooter-links" href="#">Fill-in Sunken Living Room</a></li>
                            <li><a className="secondfooter-links" href="#">Parking Lot Repairs and Curbing</a></li>
                            <li><a className="secondfooter-links" href="#">Bollards Installation</a></li>
                            <li><a className="secondfooter-links" href="#">Concrete Repairs</a></li>
                            <li><a className="secondfooter-links" href="#">Sidewalks and Walkway Construction</a></li>
                            <li><a className="secondfooter-links" href="#">Retaining Wall Construction</a></li>
                            <li><a className="secondfooter-links" href="#">Modern Decorative Floating ponds</a></li>
                            <li><a className="secondfooter-links" href="#">Plumbing Trench Concrete Pour Back</a></li>
                            <li><a className="secondfooter-links" href="#">Culvert Pipe Installation</a></li>
                        </ul>
                    </div>

                    {/* Right - Service Areas & Hours */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-bold">SERVICE AREAS</h6>
                        <ul className="list-unstyled">
                            <li>Palm Bay, Florida</li>
                            <li>Melbourne, FL</li>
                            <li>West Melbourne, FL</li>
                            <li>Brevard County, FL</li>
                            <li>Rockledge, FL</li>
                            <li>Cocoa, FL</li>
                            <li>Cocoa Beach, FL</li>
                            <li>Satellite Beach, FL</li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-bold">HOURS</h6>
                        <ul className="list-unstyled">
                            <li>Sun: Closed</li>
                            <li>Mon: 8:00am - 6:00pm</li>
                            <li>Tue: 8:00am - 6:00pm</li>
                            <li>Wed: 8:00am - 6:00pm</li>
                            <li>Thu: 8:00am - 6:00pm</li>
                            <li>Fri: 8:00am - 6:00pm</li>
                            <li>Sat: 8:00am - 6:00pm</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSecond;
