import React from "react";
import logo from "../../../assets/img/logo.webp";
// import { FaFacebookF } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
// import { ImNpm } from 'react-icons/im'; // Substitute with actual icon if needed
import bottomLogo from "../../../assets/img/footer-3-logo.webp";
import googleLogo from "../../../assets/img/google-logo.webp";
import facebookLogo from "../../../assets/img/facebook-logo.webp";
import nextdoorLogo from "../../../assets/img/nextdoor.webp";

const FooterSecond = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-lg second-footer-continer">
        <div className="row g-4">
          {/* Left - Contact Info */}
          <div className="col-lg-4 col-md-12">
            <div className="bg-white text-black py-4 px-3 m-0">
              <div className=" d-flex  justify-content-center align-items-center">
                {/* resposnsive image */}
                <picture className="d-flex pe-4">
                  <source srcSet={logo} media="(min-width: 160px)" />
                  <img
                    src={logo}
                    alt="Responsive example"
                    className="img-fluid "
                  />
                </picture>

                {/* Regular Image */}
                {/* <div className='d-flex justify-content-center align-items-center'>
                                    <img src={logo} alt="Green Hammer Concrete Logo" className="footer-card-img m" />
                                </div> */}

                <div
                  className="footer-contact-card-content"
                  style={{
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  <h6 className="fw-bold mb-1">GREEN HAMMER CONCRETE</h6>
                  <p className="mb-1">Palm Bay, FL, US</p>
                  <p className="mb-2">greenhammerconcrete@gmail.com</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3 footer-contact-card-btns p-3">
                <div className="w-50 me-2 footer-contact-card-btn1">
                  CONTACT US
                </div>
                <button className="btn btn-outline-green w-50 footer-contact-card-btn2 py-2">
                  BOOK NOW
                </button>
              </div>
              <div className="d-flex">
                {/* <FcGoogle size={24} />
                                <FaFacebookF color="#1877f2" size={24} />
                                <ImNpm color="green" size={24} /> */}
                <img
                  src={googleLogo}
                  alt="google-logo"
                  className="footer-card-logo"
                />
                <img
                  src={facebookLogo}
                  alt="facebook-logo"
                  className="footer-card-logo"
                />
                <img
                  src={nextdoorLogo}
                  alt="nextdoor-logo"
                  className="footer-card-logo"
                />
              </div>
            </div>
          </div>

          {/* Middle - Links */}
          <div className="col-lg-2 col-md-3 col-sm-6 d-none d-md-block">
            <h6 className="fw-bold">COMPANY</h6>
            <ul className="list-unstyled mt-3">
              <li>Home</li>
              <li className="mt-3">Reviews</li>
              <li className="mt-3">Team</li>
              <li className="mt-3">Sitemap</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 col-sm-6 d-none d-md-block">
            <h6 className="fw-bold">SERVICES</h6>
            <ul className="list-unstyled mt-3">
              <li>
                <a className="secondfooter-links" href="#">
                  Driveway Repair & <br /> Replacements
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Patio Design & <br /> Construction
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Concrete Slab <br /> Installation
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Mitered Ends
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Fill-in Sunken Living <br /> Room
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Parking Lot Repairs <br /> and Curbing
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Bollards Installation
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Concrete Repairs
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Sidewalks and <br /> Walkway Construction
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Retaining Wall <br /> Construction
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Modern Decorative <br /> Floating ponds
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Plumbing Trench <br /> Concrete Pour Back
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Culvert Pipe <br /> Installation
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Service Areas & Hours */}
          <div className="col-lg-2 col-md-3 col-sm-6 d-none d-md-block">
            <h6 className="fw-bold">SERVICE AREAS</h6>
            <ul className="list-unstyled mt-3">
              <li>
                <a className="secondfooter-links" href="#">
                  Palm Bay, Florida
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Melbourne, FL
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  West Melbourne, FL
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Brevard County, FL
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Rockledge, FL
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Cocoa, FL
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Cocoa Beach, FL
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Satellite Beach, FL
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 col-sm-6 d-none d-md-block">
            <h6 className="fw-bold">HOURS</h6>
            <ul className="list-unstyled mt-3">
              <li>
                <a className="secondfooter-links" href="#">
                  Sun: Closed
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Mon: 8:00am - 6:00pm
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Tue: 8:00am - 6:00pm
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Wed: 8:00am - 6:00pm
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Thu: 8:00am - 6:00pm
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Fri: 8:00am - 6:00pm
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Sat: 8:00am - 6:00pm
                </a>
              </li>
            </ul>
          </div>

          {/* Middle - Links */}
          <div className="col-6 d-block d-md-none">
            <h6 className="fw-bold">COMPANY</h6>
            <ul className="list-unstyled mt-3">
              <li>Home</li>
              <li className="mt-3">Reviews</li>
              <li className="mt-3">Team</li>
              <li className="mt-3">Sitemap</li>
            </ul>
            <br />
            <h6 className="fw-bold mt-2">SERVICES</h6>
            <ul className="list-unstyled mt-3">
              <li>
                <a className="secondfooter-links" href="#">
                  Driveway Repair & <br /> Replacements
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Patio Design & <br /> Construction
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Concrete Slab <br /> Installation
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Mitered Ends
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Fill-in Sunken Living <br /> Room
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Parking Lot Repairs <br /> and Curbing
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Bollards Installation
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Concrete Repairs
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Sidewalks and <br /> Walkway Construction
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Retaining Wall <br /> Construction
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Modern Decorative <br /> Floating ponds
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Plumbing Trench <br /> Concrete Pour Back
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Culvert Pipe <br /> Installation
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 d-block d-md-none">
            <h6 className="fw-bold">SERVICE AREAS</h6>
            <ul className="list-unstyled mt-3">
              <li>
                <a className="secondfooter-links" href="#">
                  Palm Bay, Florida
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Melbourne, FL
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  West Melbourne, FL
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Brevard County, FL
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Rockledge, FL
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Cocoa, FL
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Cocoa Beach, FL
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Satellite Beach, FL
                </a>
              </li>
            </ul>
            <br />
            <h6 className="fw-bold mt-2">HOURS</h6>
            <ul className="list-unstyled mt-3">
              <li>
                <a className="secondfooter-links" href="#">
                  Sun: Closed
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Mon: 8:00am - 6:00pm
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Tue: 8:00am - 6:00pm
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Wed: 8:00am - 6:00pm
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Thu: 8:00am - 6:00pm
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Fri: 8:00am - 6:00pm
                </a>
              </li>
              <li className="mt-3">
                <a className="secondfooter-links" href="#">
                  Sat: 8:00am - 6:00pm
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Service Areas & Hours */}
          {/* <div className="col-6 d-block d-md-none">
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

                    </div> */}

          {/* <div className="col-6 d-block d-md-none">
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
                    </div> */}
        </div>

        <div className="footer-third-container d-flex flex-column flex-md-row justify-content-start justify-content-md-between align-items-start gap-3">
          <div className="d-flex flex-column">
            <span>Powered by</span>
            <img
              src={bottomLogo}
              alt="Topline Pro Logo"
              className="footer-logo"
            />
          </div>
          <div className="text-md-end text-center">© All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSecond;
