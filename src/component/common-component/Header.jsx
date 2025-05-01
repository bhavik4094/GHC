import React, { useState, useEffect } from 'react'
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
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" height="50" />
          </a>
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
              <li className="nav-item"><a className="nav-link" href="/">HOME</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">SERVICES</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Service 1</a></li>
                  <li><a className="dropdown-item" href="/">Service 2</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">PHOTOS</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Gallery 1</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="/">REVIEWS</a></li>
              <li className="nav-item"><a className="nav-link" href="/">TEAM</a></li>
              <li className="nav-item"><a className="nav-link" href="/">BLOG</a></li>
              <li className="nav-item"><a className="nav-link" href="/">VIDEOS</a></li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-success me-2">SEND US A TEXT</button>
              <button className="btn btn-outline-success">CALL NOW</button>
            </div>
          </div>
        </div>
      </nav>
    </header>

  )
}

export default Header