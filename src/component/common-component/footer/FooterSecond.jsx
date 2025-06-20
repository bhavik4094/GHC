import React from 'react';
import logo from '../../../assets/img/logo.webp';
import bottomLogo from '../../../assets/img/footer-3-logo.webp';
import googleLogo from '../../../assets/img/google-logo.webp';
import facebookLogo from '../../../assets/img/facebook-logo.webp';
import nextdoorLogo from '../../../assets/img/nextdoor.webp';
import { useServices } from '../../../context/ServicesContext';
import { Link } from 'react-router-dom';

const FooterSecond = () => {
  const { services, loading, error } = useServices();

  const links = {
    company: ['Home', 'Reviews', 'Team', 'Sitemap'],
    serviceAreas: [
      'Palm Bay, Florida',
      'Melbourne, FL',
      'West Melbourne, FL',
      'Brevard County, FL',
      'Rockledge, FL',
      'Cocoa, FL',
      'Cocoa Beach, FL',
      'Satellite Beach, FL',
    ],
    hours: [
      'Sun: Closed',
      'Mon: 8:00am - 6:00pm',
      'Tue: 8:00am - 6:00pm',
      'Wed: 8:00am - 6:00pm',
      'Thu: 8:00am - 6:00pm',
      'Fri: 8:00am - 6:00pm',
      'Sat: 8:00am - 6:00pm',
    ]
  };

  const renderList = (title, items) => (
    <div className="col-xl-2 col-md-3 col-sm-6 d-none d-md-block mt-md-5 mt-lg-4">
      <h6 className="fw-bold footer-links-heading">{title}</h6>
      <ul className="list-unstyled mt-3">
        {items.map((item, i) => (
          <li key={i} className={i > 0 ? 'mt-3' : ''}>
            {title === 'HOURS' ? (
              <span className="secondfooter-links-text">{item}</span>
            ) : (
              item
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
          {links.company.map((item, i) => (
            <li key={i} className={i > 0 ? 'mt-3' : ''}>{item}</li>
          ))}
        </ul>
        <h6 className="fw-bold mt-5 footer-links-heading">SERVICES</h6>
        <ul className="list-unstyled mt-3">
          {loading ? (
            <li className="mt-3">Loading...</li>
          ) : error ? (
            <li className="mt-3 text-danger">Error loading services</li>
          ) : services.map((service, i) => (
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
          {links.serviceAreas.map((item, i) => (
            <li key={i} className={i > 0 ? 'mt-3' : ''}>
              <a className="secondfooter-links" href="#">{item}</a>
            </li>
          ))}
        </ul>
        <h6 className="fw-bold mt-5 footer-links-heading">HOURS</h6>
        <ul className="list-unstyled mt-3">
          {links.hours.map((item, i) => (
            <li key={i} className={i > 0 ? 'mt-3' : ''}>
              <span className="secondfooter-links-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  // Convert dynamic services into JSX <Link> elements
  const serviceLinks = loading ? [
    <span key="loading">Loading...</span>
  ] : error ? [
    <span key="error" className="text-danger">Failed to load services</span>
  ] : services.map(service => (
    <Link key={service._id} to={`/services/${service.slug}`} className="secondfooter-links">
      {service.title}
    </Link>
  ));

  return (
    <footer className="bg-black text-white">
      <div className="container-xxl second-footer-continer">
        <div className="row g-4">
          <div className="col-xl-4 col-12">
            <div className="bg-white text-black py-4 px-3 m-0">
              <div className="row">
                <div className="col-5 d-flex justify-content-end align-items-center footer-card-img-div">
                  <img src={logo} alt="Green Hammer Concrete Logo" className="footer-card-img" />
                </div>
                <div className="col-7 footer-contact-card-content">
                  <p className="mb-1 fw-bold">GREEN HAMMER CONCRETE</p>
                  <p className="mb-1">Palm Bay, FL, US</p>
                  <p className="mb-2">greenhammerconcrete@gmail.com</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3 footer-contact-card-btns p-3">
                <div className="w-50 me-2 footer-contact-card-btn1">CONTACT US</div>
                <a href="#" className="book-button">BOOK NOW</a>
              </div>
              <div className="d-flex">
                {[googleLogo, facebookLogo, nextdoorLogo].map((src, i) => (
                  <img key={i} src={src} alt="footer-logo" className="footer-card-logo" />
                ))}
              </div>
            </div>
          </div>

          {renderList('COMPANY', links.company.map(text => (
            <a key={text} className="secondfooter-links" href="#">{text}</a>
          )))}

          {renderList('SERVICES', serviceLinks)}

          {renderList('SERVICE AREAS', links.serviceAreas.map(text => (
            <a key={text} className="secondfooter-links" href="#">{text}</a>
          )))}

          {renderList('HOURS', links.hours)}

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
