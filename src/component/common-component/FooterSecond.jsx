import React from 'react';
import logo from '../../assets/img/logo.webp'; // Replace with your actual logo path
// import { FaFacebookF } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
// import { ImNpm } from 'react-icons/im'; // Substitute with actual icon if needed

const FooterSecond = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container second-footer-continer">
                <div className="row g-4">
                    {/* Left - Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <div className="bg-white text-black py-4 px-3">
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
                        <ul className="list-unstyled mt-3">
                            <li>Home</li>
                            <li className="mt-3">Reviews</li>
                            <li className="mt-3">Team</li>
                            <li className="mt-3">Sitemap</li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-bold">SERVICES</h6>
                        <ul className="list-unstyled mt-3">
                            <li><a className="secondfooter-links" href="#">Driveway Repair & <br /> Replacements</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Patio Design &  <br /> Construction</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Concrete Slab  <br /> Installation</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Mitered Ends</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Fill-in Sunken Living <br />  Room</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Parking Lot Repairs <br />  and Curbing</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Bollards Installation</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Concrete Repairs</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Sidewalks and <br />  Walkway Construction</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Retaining Wall <br />  Construction</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Modern Decorative <br />  Floating ponds</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Plumbing Trench  <br /> Concrete Pour Back</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Culvert Pipe <br />  Installation</a></li>
                        </ul>
                    </div>

                    {/* Right - Service Areas & Hours */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-bold">SERVICE AREAS</h6>
                        <ul className="list-unstyled mt-3">
                            <li ><a className="secondfooter-links" href="#">Palm Bay, Florida</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Melbourne, FL</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">West Melbourne, FL</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Brevard County, FL</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Rockledge, FL</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Cocoa, FL</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Cocoa Beach, FL</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Satellite Beach, FL</a></li>
                        </ul>

                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-bold">HOURS</h6>
                        <ul className="list-unstyled mt-3">
                            <li ><a className="secondfooter-links" href="#">Sun: Closed</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Mon: 8:00am - 6:00pm</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Tue: 8:00am - 6:00pm</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Wed: 8:00am - 6:00pm</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Thu: 8:00am - 6:00pm</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Fri: 8:00am - 6:00pm</a></li>
                            <li className="mt-3"><a className="secondfooter-links" href="#">Sat: 8:00am - 6:00pm</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSecond;
