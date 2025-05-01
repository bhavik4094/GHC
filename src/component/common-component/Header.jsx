import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // ✅ Step 1: Import Link
import logo from "../../assets/img/logo.webp";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" height="50" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">HOME</Link></li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown">SERVICES</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/service1">Service 1</Link></li>
                  <li><Link className="dropdown-item" to="/service2">Service 2</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown">PHOTOS</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/gallery1">Gallery 1</Link></li>
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
      </nav>
    </header>
  );
}

export default Header;
