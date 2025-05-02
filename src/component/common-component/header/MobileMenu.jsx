import React from 'react';
import { Link } from 'react-router-dom';

function MobileMenu({
  logo,
  menuOpen,
  setMenuOpen,
  servicesOpen,
  setServicesOpen,
  photosOpen,
  setPhotosOpen
}) {
  return (
    <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
      <div>
        <div className="mobile-menu-header">
          <img src={logo} alt="Logo" className="mobile-logo" />
          <svg onClick={() => setMenuOpen(false)} xmlns="http://www.w3.org/2000/svg" className="close-btn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <ul className="mobile-nav">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>

          <li className="has-submenu" onClick={() => setServicesOpen(!servicesOpen)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>SERVICES</span>
            <span className="submenu-icon">{servicesOpen ? "-" : "+"}</span>
          </li>
          {servicesOpen && (
            <ul className="submenu">
              <li><Link to="/services/driveway-repair" onClick={() => setMenuOpen(false)}>Driveway Repair & Replacements</Link></li>
              <li><Link to="/services/patio-design" onClick={() => setMenuOpen(false)}>Patio Design & Construction</Link></li>
              <li><Link to="/services/slab-installation" onClick={() => setMenuOpen(false)}>Concrete Slab Installation</Link></li>
              <li><Link to="/services/mitered-ends" onClick={() => setMenuOpen(false)}>Mitered Ends</Link></li>
              <li><Link to="/services/sunken-room" onClick={() => setMenuOpen(false)}>Fill-in Sunken Living Room</Link></li>
              <li><Link to="/services/parking-lot-repairs" onClick={() => setMenuOpen(false)}>Parking Lot Repairs and Curbing</Link></li>
              <li><Link to="/services/bollards" onClick={() => setMenuOpen(false)}>Bollards Installation</Link></li>
              <li><Link to="/services/concrete-repairs" onClick={() => setMenuOpen(false)}>Concrete Repairs</Link></li>
              <li><Link to="/services/sidewalks" onClick={() => setMenuOpen(false)}>Sidewalks and Walkway Construction</Link></li>
              <li><Link to="/services/retaining-wall" onClick={() => setMenuOpen(false)}>Retaining Wall Construction</Link></li>
              <li><Link to="/services/floating-ponds" onClick={() => setMenuOpen(false)}>Modern Decorative Floating Ponds</Link></li>
              <li><Link to="/services/plumbing-trench" onClick={() => setMenuOpen(false)}>Plumbing Trench Concrete Pour Back</Link></li>
              <li><Link to="/services/culvert-pipe" onClick={() => setMenuOpen(false)}>Culvert Pipe Installation</Link></li>
            </ul>
          )}

          <li className="has-submenu" onClick={() => setPhotosOpen(!photosOpen)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>PHOTOS</span>
            <span className="submenu-icon">{photosOpen ? "-" : "+"}</span>
          </li>
          {photosOpen && (
            <ul className="submenu">
              <li><Link to="/photos/residential" onClick={() => setMenuOpen(false)}>Residential</Link></li>
              <li><Link to="/photos/commercial" onClick={() => setMenuOpen(false)}>Commercial</Link></li>
            </ul>
          )}

          <li><Link to="/reviews" onClick={() => setMenuOpen(false)}>REVIEWS</Link></li>
          <li><Link to="/team" onClick={() => setMenuOpen(false)}>TEAM</Link></li>
          <li><Link to="/blog" onClick={() => setMenuOpen(false)}>BLOG</Link></li>
          <li><Link to="/videos" onClick={() => setMenuOpen(false)}>VIDEOS</Link></li>
        </ul>
      </div>

      <div className="mobile-buttons">
        <button className="btn btn-success mb-2">SEND US A TEXT</button>
        <button className="btn btn-outline-success">CALL NOW</button>
      </div>
    </div>
  );
}

export default MobileMenu;
