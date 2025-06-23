import React from 'react';
import bottomLogo from '../../../assets/img/footer-3-logo.webp';

//dynamic imports
import { useServices } from '../../../context/ServicesContext';
import { useFooterNavigation } from '../../../context/FooterNavigationContext';
import { Link } from 'react-router-dom';

const FooterSecond = () => {
  const footernavigation = useFooterNavigation();
  const { services, loading, error } = useServices();

  // Add base URL for images
  const BASE_URL = 'http://localhost:5000';

  if (!footernavigation) return <div className='text-center'>Failed to Load footer ! </div>;

  const renderList = (title, items, isLink = false) => (
    <div className="col-xl-2 col-md-3 col-sm-6 d-none d-md-block mt-md-5 mt-lg-4">
      <h6 className="fw-bold footer-links-heading">{title}</h6>
      <ul className="list-unstyled mt-3">
        {items.map((item, i) => (
          <li key={i} className={i > 0 ? 'mt-3' : ''}>
            {title === 'HOURS' ? (
              <span className="secondfooter-links-text">{item}</span>
            ) : isLink ? (
              <a href={item.url} className="secondfooter-links">{item.label}</a>
            ) : (
              <span className="secondfooter-links">{item}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderMobileList = () => (
    <>
      <div className="col-6 d-block d-md-none">
        <h6 className="fw-bold mt-4 footer-links-heading">COMPANY</h6>
        <ul className="list-unstyled mt-3">
          {footernavigation.companyLinks?.map((item, i) => (
            <li key={i} className={i > 0 ? 'mt-3' : ''}>
              <a className="secondfooter-links" href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
        <h6 className="fw-bold mt-5 footer-links-heading">SERVICES</h6>
        <ul className="list-unstyled mt-3">
          {loading ? (
            <li className="mt-3">Loading services...</li>
          ) : error ? (
            <li className="mt-3 text-danger">Error loading services</li>
          ) : services?.map((service) => (
            <li key={service._id} className="mt-3">
              <Link className="secondfooter-links" to={`/services/${service.slug}`}>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6 d-block d-md-none">
        <h6 className="fw-bold mt-4 footer-links-heading">SERVICE AREAS</h6>
        <ul className="list-unstyled mt-3">
          {footernavigation.serviceAreas?.map((area, i) => (
            <li key={i} className={i > 0 ? 'mt-3' : ''}>
              <span className="secondfooter-links">{area}</span>
            </li>
          ))}
        </ul>
        <h6 className="fw-bold mt-5 footer-links-heading">HOURS</h6>
        <ul className="list-unstyled mt-3">
          {footernavigation.hours?.map((item, i) => (
            <li key={i} className={i > 0 ? 'mt-3' : ''}>
              <span className="secondfooter-links-text">{item.day}: {item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  // Convert dynamic services into JSX <Link> elements - FIXED
  const serviceLinks = loading ? (
    [<span key="loading">Loading...</span>]
  ) : error ? (
    [<span key="error" className="text-danger">Failed to load services</span>]
  ) : services?.map(service => (
    <Link key={service._id} to={`/services/${service.slug}`} className="secondfooter-links">
      {service.title}
    </Link>
  )) || [];

  return (
    <footer className="bg-black text-white">
      <div className="container-xxl second-footer-continer">
        <div className="row g-4">
          <div className="col-xl-4 col-12">
            <div className="bg-white text-black py-4 px-3 m-0">
              <div className="row">
                <div className="col-5 d-flex justify-content-end align-items-center footer-card-img-div">
                  {/* FIXED: Add base URL to image paths */}
                  <img
                    src={`${BASE_URL}/${footernavigation.logo}`}
                    alt="Green Hammer Concrete Logo"
                    className="footer-card-img"
                    onError={(e) => {
                      console.error('Logo failed to load:', e.target.src);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="col-7 footer-contact-card-content">
                  <p className="mb-1 fw-bold">{footernavigation.companyName}</p>
                  <p className="mb-1">{footernavigation.location}</p>
                  <p className="mb-2">{footernavigation.email}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3 footer-contact-card-btns p-3">
                <div className="w-50 me-2 footer-contact-card-btn1">{footernavigation.contactText}</div>
                <a href={footernavigation.bookNowLink} className="book-button">{footernavigation.bookNowText}</a>
              </div>
              <div className="d-flex">
                {footernavigation.socialIcons?.map((icon, i) => (
                  <a key={i} href={icon.url} target="_blank" rel="noopener noreferrer">
                    {/* FIXED: Add base URL to social icon images */}
                    <img
                      src={`${BASE_URL}/${icon.image}`}
                      alt={icon.name}
                      className="footer-card-logo"
                      onError={(e) => {
                        console.error('Social icon failed to load:', e.target.src);
                        e.target.style.display = 'none';
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Columns - FIXED: Added null checks */}
          {renderList('COMPANY', footernavigation.companyLinks || [], true)}
          {renderList('SERVICES', serviceLinks, false)}
          {renderList('SERVICE AREAS', footernavigation.serviceAreas || [])}
          {renderList('HOURS', footernavigation.hours?.map(h => `${h.day}: ${h.time}`) || [])}

          {/* Mobile version */}
          {renderMobileList()}
        </div>

        <div className="footer-third-container d-flex flex-column justify-content-start align-items-start flex-md-row justify-content-md-between">
          <div className="d-flex flex-column">
            <span>Powered by</span>
            <img src={bottomLogo} alt="Topline Pro Logo" className="footer-logo" />
          </div>
          <div className="text-md-end text-center">
            © All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSecond;