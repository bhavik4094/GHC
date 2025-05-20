import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/img/logo.webp";
import DesktopMenu from './DesktopNavbar';
import MobileMenu from './MobileMenu';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
    photos: false
  });
  const [desktopDropdowns, setDesktopDropdowns] = useState({
    services: false,
    photos: false
  });

  const servicesRef = useRef(null);
  const photosRef = useRef(null);

  // Debounced scroll handler for performance
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 50);
  }, []);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        servicesRef.current?.contains(e.target) ||
        photosRef.current?.contains(e.target)
      ) return;

      setDesktopDropdowns({ services: false, photos: false });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''} d-flex align-item-center`}>
      <nav className="navbar navbar-expand-xl w-100 navbar-dark p-0">
        <div className="container-fluid d-flex justify-content-between align-items-center gap-4 navbar-container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <button
            className="menu-toggle d-block d-xl-none"
            onClick={() => setMenuOpen(true)}
          >
            <span className="menu-name pe-2">MENU</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={32} height={32}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse d-none d-xl-block navbar-for-header">
            <DesktopMenu
              servicesRef={servicesRef}
              photosRef={photosRef}
              desktopServicesOpen={desktopDropdowns.services}
              setDesktopServicesOpen={(value) => setDesktopDropdowns(prev => ({ ...prev, services: value }))}
              desktopPhotosOpen={desktopDropdowns.photos}
              setDesktopPhotosOpen={(value) => setDesktopDropdowns(prev => ({ ...prev, photos: value }))}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          logo={logo}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          servicesOpen={mobileDropdowns.services}
          setServicesOpen={(value) => setMobileDropdowns(prev => ({ ...prev, services: value }))}
          photosOpen={mobileDropdowns.photos}
          setPhotosOpen={(value) => setMobileDropdowns(prev => ({ ...prev, photos: value }))}
        />
      </nav>
    </header>
  );
}

export default Header;
