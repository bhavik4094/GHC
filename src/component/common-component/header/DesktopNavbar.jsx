import React from 'react';
import { Link } from 'react-router-dom';

import { useServices } from '../../../context/ServicesContext';

function DesktopMenu({
  servicesRef,
  photosRef,
  desktopServicesOpen,
  setDesktopServicesOpen,
  desktopPhotosOpen,
  setDesktopPhotosOpen
}) {

  const { services, loading, error } = useServices();

  return (
    <div className="d-flex justify-content-between align-items-center w-100 ">
      <div className=''>
        <ul className="navbar-nav gap-3">
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
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height={20} width={20} >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>

            </span>
            {desktopServicesOpen && (
              <div className="dropdown-menu mega-menu show">
                {loading ? (
                  <div className="dropdown-item">Loading services...</div>
                ) : error ? (
                  <div className="dropdown-item"><span className='text-denger' style={{ color: "darkred" }}>Error:</span> Failed to load services</div>
                ) : services.length === 0 ? (
                  <div className="dropdown-item">No services available</div>
                ) : (
                  <>
                    <div className="mega-menu-column">
                      {services.slice(0, Math.ceil(services.length / 2)).map((service) => (
                        <Link
                          key={service._id}
                          className="dropdown-item"
                          to={`/services/${service.slug}`}
                          onClick={() => setDesktopServicesOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}

                    </div>
                    <div className="mega-menu-column">
                      {services.slice(Math.ceil(services.length / 2)).map((service) => (
                        <Link
                          key={service._id}
                          className="dropdown-item"
                          to={`/services/${service.slug}`}
                          onClick={() => setDesktopServicesOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}

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
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height={20} width={20} >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            {desktopPhotosOpen && (
              <ul className="dropdown-menu show dropdown-menu-second">
                {/* <li><Link className="dropdown-item" to="/photos/residential">Residential</Link></li>
                <li><Link className="dropdown-item" to="/photos/commercial">Commercial</Link></li> */}
                <li><Link className="dropdown-item desktop-dropdown-item" to="/photos/allphotos">ALL PHOTOS</Link></li>
              </ul>
            )}
          </li>

          <li className="nav-item"><Link className="nav-link" to="/reviews">REVIEWS</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/team">TEAM</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/blog">BLOG</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/videos">VIDEOS</Link></li>
        </ul>
      </div>
      <div className="d-flex header-buttons">
        <Link className="quote-button" to="/contact">
          SEND US A TEXT
        </Link>
        {/* <a href="/contac" className="quote-button">SEND US A TEXT</a> */}
        <a href="#" className="call-button">CALL NOW</a>
      </div>
    </div>
  );
}

export default DesktopMenu;
