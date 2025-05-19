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
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          </span>
          {desktopPhotosOpen && (
            <ul className="dropdown-menu show">
              <li><Link className="dropdown-item" to="/photos/residential">Residential</Link></li>
              <li><Link className="dropdown-item" to="/photos/commercial">Commercial</Link></li>
            </ul>
          )}
        </li>

        <li className="nav-item"><Link className="nav-link" to="/reviews">REVIEWS</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/team">TEAM</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/blog">BLOG</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/videos">VIDEOS</Link></li>
      </ul>
      <div className="d-flex">
        <a href="#" class="quote-button">SEND US A TEXT</a>
        <a href="#" class="call-button">CALL NOW</a>
      </div>
    </>
  );
}

export default DesktopMenu;
