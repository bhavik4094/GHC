import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mobileMenuItems } from './mobileMenuData'; // Adjust path as needed
import { useServices } from '../../../context/ServicesContext'; // Adjust path

function MobileMenu({
  logo,
  menuOpen,
  setMenuOpen,
  servicesOpen,
  setServicesOpen,
  photosOpen,
  setPhotosOpen
}) {
  const submenuState = {
    services: { open: servicesOpen, toggle: () => setServicesOpen(!servicesOpen) },
    photos: { open: photosOpen, toggle: () => setPhotosOpen(!photosOpen) },
  };

  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, [setMenuOpen]);

  const location = useLocation();
  const { services } = useServices();

  return (
    <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
      <div>
        <div className="mobile-menu-header">
          <img src={logo} alt="Logo" className="mobile-logo" />
          {/* <svg onClick={handleLinkClick} xmlns="http://www.w3.org/2000/svg" className="close-btn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg> */}
          <div className='me-3' style={{ padding: "12px" }}>
            <svg onClick={handleLinkClick} className="close-btn" width={16} height={16} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
              <path d="M2 18L18 2M2 2L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <ul className="mobile-nav mobile-nav-fonts mb-0">

          {/* Hard Coded Home button */}
          <li
            className="has-submenu"
            style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <Link to="/"><span className='text-uppercase'>Home</span></Link>
          </li>

          {/* Dynamic SERVICES Menu */}
          <li
            className="has-submenu"
            onClick={submenuState.services.toggle}
            style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <span>SERVICES</span>
            <span className="submenu-icon">
              <svg
                className={`icon transition-transform duration-300 ease-in-out ${submenuState.services.open ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15 10H5"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                className={`icon absolute transition-transform duration-300 ease-in-out ${submenuState.services.open ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </li>

          {servicesOpen && (
            <ul className="submenu">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={`/services/${service.slug}`}
                    onClick={handleLinkClick}
                    className={location.pathname === `/services/${service.slug}` ? 'active-link' : ''}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {mobileMenuItems.map((item, idx) => (
            <React.Fragment key={idx}>
              {item.children ? (
                <li
                  className="has-submenu"
                  onClick={submenuState[item.submenuKey].toggle}
                  style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span>{item.label}</span>
                  <span className="submenu-icon">
                    <svg
                      className={`icon transition-transform duration-300 ease-in-out ${submenuState[item.submenuKey].open ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                        }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M15 10H5"
                        stroke="#111827"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <svg
                      className={`icon absolute transition-transform duration-300 ease-in-out ${submenuState[item.submenuKey].open ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                        }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                </li>
              ) : (
                <li>
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    className={location.pathname === item.path ? 'active-link' : ''}
                  >
                    {item.label}
                  </Link>
                </li>
              )}

              {item.children && submenuState[item.submenuKey].open && (
                <ul className="submenu">
                  {item.children.map((child, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={child.path}
                        onClick={handleLinkClick}
                        className={location.pathname === child.path ? 'active-link' : ''}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>

      <div className="mobile-buttons">
        <a href="#" class="quote-button">SEND US A TEXT</a>
        <a href="#" class="call-button">CALL NOW</a>
      </div>
    </div>
  );
}

export default MobileMenu;
