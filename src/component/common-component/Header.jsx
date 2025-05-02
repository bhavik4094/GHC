import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.webp";
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
