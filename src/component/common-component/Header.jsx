import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.webp";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [photosOpen, setPhotosOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs to detect clicks outside
  const servicesRef = useRef(null);
  const photosRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle scroll behavior for header
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  // Toggle the "Services" dropdown
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setPhotosOpen(false); // Close "Photos" dropdown if it's open
  };

  // Toggle the "Photos" dropdown
  const togglePhotos = () => {
    setPhotosOpen(!photosOpen);
    setServicesOpen(false); // Close "Services" dropdown if it's open
  };

  // Handle click outside the dropdowns to close them
  const handleClickOutside = (e) => {
    if (
      servicesRef.current && !servicesRef.current.contains(e.target) &&
      photosRef.current && !photosRef.current.contains(e.target) &&
      mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)
    ) {
      setServicesOpen(false);
      setPhotosOpen(false);
      setMenuOpen(false); // Close the mobile menu when clicking outside
    }
  };

  // Add event listener for outside clicks when the component mounts
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Handle scrolling behavior
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-dark p-0">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-name px-3">Menu</span>
            ☰
          </button>

          {/* Mobile Menu Overlay */}
          {menuOpen && (
            <div className="mobile-menu-overlay open" ref={mobileMenuRef}>
              <div className="mobile-nav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
                  </li>

                  {/* Services Dropdown */}
                  <li className="nav-item dropdown" ref={servicesRef}>
                    <span
                      className="nav-link dropdown-toggle"
                      onClick={toggleServices} // Toggle the services menu open/close
                      style={{ cursor: 'pointer' }}
                    >
                      SERVICES
                    </span>
                    {servicesOpen && (
                      <div className="dropdown-menu show">
                        <Link className="dropdown-item" to="/services/driveway-repair">Driveway Repair & Replacements</Link>
                        <Link className="dropdown-item" to="/services/patio-design">Patio Design & Construction</Link>
                        <Link className="dropdown-item" to="/services/slab-installation">Concrete Slab Installation</Link>
                        <Link className="dropdown-item" to="/services/mitered-ends">Mitered Ends</Link>
                        <Link className="dropdown-item" to="/services/sunken-room">Fill-in Sunken Living Room</Link>
                        <Link className="dropdown-item" to="/services/parking-lot-repairs">Parking Lot Repairs and Curbing</Link>
                        <Link className="dropdown-item" to="/services/bollards">Bollards Installation</Link>
                      </div>
                    )}
                  </li>

                  {/* Photos Dropdown */}
                  <li className="nav-item dropdown" ref={photosRef}>
                    <span
                      className="nav-link dropdown-toggle"
                      onClick={togglePhotos} // Toggle the photos menu open/close
                      style={{ cursor: 'pointer' }}
                    >
                      PHOTOS
                    </span>
                    {photosOpen && (
                      <ul className="dropdown-menu show">
                        <li><Link className="dropdown-item" to="/photos/residential">Residential</Link></li>
                        <li><Link className="dropdown-item" to="/photos/commercial">Commercial</Link></li>
                      </ul>
                    )}
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/reviews" onClick={() => setMenuOpen(false)}>REVIEWS</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/team" onClick={() => setMenuOpen(false)}>TEAM</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog" onClick={() => setMenuOpen(false)}>BLOG</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/videos" onClick={() => setMenuOpen(false)}>VIDEOS</Link>
                  </li>
                </ul>

                <div className="mobile-buttons">
                  <button className="btn btn-success me-2">SEND US A TEXT</button>
                  <button className="btn btn-outline-success">CALL NOW</button>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown" ref={servicesRef}>
                <span
                  className="nav-link dropdown-toggle"
                  onClick={toggleServices} // Toggle the services menu open/close
                  style={{ cursor: 'pointer' }}
                >
                  SERVICES
                </span>
                {servicesOpen && (
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

              {/* Photos Dropdown */}
              <li className="nav-item dropdown" ref={photosRef}>
                <span
                  className="nav-link dropdown-toggle"
                  onClick={togglePhotos} // Toggle the photos menu open/close
                  style={{ cursor: 'pointer' }}
                >
                  PHOTOS
                </span>
                {photosOpen && (
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
              <button className="btn btn-success me-2">SEND US A TEXT</button>
              <button className="btn btn-outline-success">CALL NOW</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
