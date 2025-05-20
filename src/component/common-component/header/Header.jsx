import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/img/logo.webp";
import DesktopMenu from './DesktopNavbar';
import MobileMenu from './MobileMenu';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [photosOpen, setPhotosOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopPhotosOpen, setDesktopPhotosOpen] = useState(false);

  const servicesRef = useRef(null);
  const photosRef = useRef(null);

  const handleScroll = () => setScrolled(window.scrollY > 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target) &&
        photosRef.current &&
        !photosRef.current.contains(e.target)
      ) {
        setDesktopServicesOpen(false);
        setDesktopPhotosOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''} d-flex align-item-center`}>
      <nav className="navbar navbar-expand-lg w-100 navbar-dark p-0">
        <div className="container-fluid d-flex justify-content-between align-items-center gap-4 navbar-container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <button
            className="menu-toggle d-block d-xl-none "
            onClick={() => setMenuOpen(true)}
          >
            <span className="menu-name pe-2">MENU</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={32} height={32}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>

          </button>

          <div className="collapse navbar-collapse d-none d-xl-block navbar-for-header">
            <DesktopMenu
              servicesRef={servicesRef}
              photosRef={photosRef}
              desktopServicesOpen={desktopServicesOpen}
              setDesktopServicesOpen={setDesktopServicesOpen}
              desktopPhotosOpen={desktopPhotosOpen}
              setDesktopPhotosOpen={setDesktopPhotosOpen}
            />
          </div>

        </div>

        <MobileMenu
          logo={logo}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          servicesOpen={servicesOpen}
          setServicesOpen={setServicesOpen}
          photosOpen={photosOpen}
          setPhotosOpen={setPhotosOpen}
        />
      </nav>
    </header>
  );
}

export default Header;
