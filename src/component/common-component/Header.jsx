import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.webp";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [photosOpen, setPhotosOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-dark p-0">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <button className="menu-toggle d-lg-none" onClick={() => setMenuOpen(true)}>
            <span className='menu-name px-3'>Menu</span>
            ☰
          </button>

          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">HOME</Link></li>

              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle">SERVICES</span>
                <div className="dropdown-menu mega-menu">
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
              </li>


              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle">PHOTOS</span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/photos/residential">Residential</Link></li>
                  <li><Link className="dropdown-item" to="/photos/commercial">Commercial</Link></li>
                </ul>
              </li>

              <li className="nav-item"><Link className="nav-link" to="/reviews">REVIEWS</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/team">TEAM</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/blog">BLOG</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/videos">VIDEOS</Link></li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-success me-2">SEND US A TEXT</button>
              <button className="btn btn-outline-success">CALL NOW</button>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
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
                  <li><Link to="/services/driveways" onClick={() => setMenuOpen(false)}>Driveway Repair & Replacements</Link></li>
                  <li><Link to="/services/patios" onClick={() => setMenuOpen(false)}>Sidewalks and Walkway Construction</Link></li>
                  <li><Link to="/services/driveways" onClick={() => setMenuOpen(false)}>Concrete Slab Installation</Link></li>
                  <li><Link to="/services/patios" onClick={() => setMenuOpen(false)}>Mitered Ends</Link></li>
                  <li><Link to="/services/driveways" onClick={() => setMenuOpen(false)}>Fill-in Sunken Living Room</Link></li>
                  <li><Link to="/services/patios" onClick={() => setMenuOpen(false)}>Parking Lot Repairs and Curbing</Link></li>  <li><Link to="/services/driveways" onClick={() => setMenuOpen(false)}>Driveways</Link></li>
                  <li><Link to="/services/patios" onClick={() => setMenuOpen(false)}>Bollards Installation</Link></li>
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
      </nav>
    </header>
  );
}

export default Header;
