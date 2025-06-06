import React from 'react';
import { Link } from 'react-router-dom';

function DesktopMenu({
  servicesRef,
  photosRef,
  desktopServicesOpen,
  setDesktopServicesOpen,
  desktopPhotosOpen,
  setDesktopPhotosOpen
}) {
  return (
    <div className="d-flex justify-content-between align-items-center w-100 ">
      <div className=''>
        <ul className="navbar-nav gap-3">
          <li className="nav-item"><Link className="nav-link" to="/">HOME</Link></li>

          {/* SERVICES */}
          <li className="nav-item dropdown" ref={servicesRef}>
            <span
              className="nav-link dropdown-toggle"
              onClick={() => {
                setDesktopServicesOpen(!desktopServicesOpen);
                setDesktopPhotosOpen(false);
              }}
              style={{ cursor: 'pointer' }}
            >
              SERVICES
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height={20} width={20} >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>

            </span>
            {desktopServicesOpen && (
              <div className="dropdown-menu mega-menu show">
                <div className="mega-menu-column">
                  <Link className="dropdown-item" to="/services/driveway-repair">Driveway Repair & Replacements</Link>
                  <Link className="dropdown-item" to="/services/patio-design">Patio Design & Construction</Link>
                  <Link className="dropdown-item" to="/services/slab-installation">Concrete Slab Installation</Link>
                  <Link className="dropdown-item" to="/services/mitered-ends">Mitered Ends</Link>
                  <Link className="dropdown-item" to="/services/sunken-room">Fill-in Sunken Living Room</Link>
                  <Link className="dropdown-item" to="/services/parking-lot-repairs">Parking Lot Repairs and Curbing</Link>
                  <Link className="dropdown-item" to="/services/bollards">Bollards Installation</Link>
                </div>
                <div className="mega-menu-column">
                  <Link className="dropdown-item" to="/services/concrete-repairs">Concrete Repairs</Link>
                  <Link className="dropdown-item" to="/services/sidewalks">Sidewalks and Walkway Construction</Link>
                  <Link className="dropdown-item" to="/services/retaining-wall">Retaining Wall Construction</Link>
                  <Link className="dropdown-item" to="/services/floating-ponds">Modern Decorative Floating Ponds</Link>
                  <Link className="dropdown-item" to="/services/plumbing-trench">Plumbing Trench Concrete Pour Back</Link>
                  <Link className="dropdown-item" to="/services/culvert-pipe">Culvert Pipe Installation</Link>
                </div>
              </div>
            )}
          </li>

          {/* PHOTOS */}
          <li className="nav-item dropdown" ref={photosRef}>
            <span
              className="nav-link dropdown-toggle"
              onClick={() => {
                setDesktopPhotosOpen(!desktopPhotosOpen);
                setDesktopServicesOpen(false);
              }}
              style={{ cursor: 'pointer' }}
            >
              PHOTOS
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height={20} width={20} >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            {desktopPhotosOpen && (
              <ul className="dropdown-menu show dropdown-menu-second">
                {/* <li><Link className="dropdown-item" to="/photos/residential">Residential</Link></li>
                <li><Link className="dropdown-item" to="/photos/commercial">Commercial</Link></li> */}
                <li><Link className="dropdown-item desktop-dropdown-item" to="/photos/allphotos">ALL PHOTOS</Link></li>
              </ul>
            )}
          </li>

          <li className="nav-item"><Link className="nav-link" to="/reviews">REVIEWS</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/team">TEAM</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/blog">BLOG</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/videos">VIDEOS</Link></li>
        </ul>
      </div>
      <div className="d-flex header-buttons">
        <Link className="quote-button" to="/contact">
          SEND US A TEXT
        </Link>
        {/* <a href="/contac" className="quote-button">SEND US A TEXT</a> */}
        <a href="#" className="call-button">CALL NOW</a>
      </div>
    </div>
  );
}

export default DesktopMenu;
