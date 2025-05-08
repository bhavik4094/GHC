import React from 'react';
import logo from '../../../assets/img/logo.webp';
import bottomLogo from '../../../assets/img/footer-3-logo.webp';
import googleLogo from '../../../assets/img/google-logo.webp';
import facebookLogo from '../../../assets/img/facebook-logo.webp';
import nextdoorLogo from '../../../assets/img/nextdoor.webp';

const FooterSecond = () => {
  const links = {
    company: ['Home', 'Reviews', 'Team', 'Sitemap'],
    services: [
      'Driveway Repair & Replacements',
      'Patio Design & Construction',
      'Concrete Slab Installation',
      'Mitered Ends',
      'Fill-in Sunken Living Room',
      'Parking Lot Repairs and Curbing',
      'Bollards Installation',
      'Concrete Repairs',
      'Sidewalks and Walkway Construction',
      'Retaining Wall Construction',
      'Modern Decorative Floating ponds',
      'Plumbing Trench Concrete Pour Back',
      'Culvert Pipe Installation',
    ],
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
            <a className="secondfooter-links" href="#">{item}</a>
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
          {links.services.map((item, i) => (
            <li key={i} className="mt-3">
              <a className="secondfooter-links" href="#">{item}</a>
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
              <a className="secondfooter-links" href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <footer className="bg-black text-white">
      <div className="container-xl second-footer-continer">
        <div className="row g-4">
          <div className="col-xl-4 col-12">
            <div className="bg-white text-black py-4 px-3 m-0">
              <div className="row">
                <div className="col-5 d-flex justify-content-end align-items-center footer-card-img-div">
                  <img src={logo} alt="Green Hammer Concrete Logo" className="footer-card-img" />
                </div>
                <div className="col-7 footer-contact-card-content">
                  <p className="mb-1" style={{ fontWeight: "900" }}>GREEN HAMMER CONCRETE</p>
                  <p className="mb-1">Palm Bay, FL, US</p>
                  <p className="mb-2">greenhammerconcrete@gmail.com</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3 footer-contact-card-btns p-3">
                <div className="w-50 me-2 footer-contact-card-btn1">CONTACT US</div>
                <button className="btn btn-outline-green w-50 footer-contact-card-btn2 py-2">BOOK NOW</button>
              </div>
              <div className="d-flex">
                {[googleLogo, facebookLogo, nextdoorLogo].map((src, i) => (
                  <img key={i} src={src} alt="footer-logo" className="footer-card-logo" />
                ))}
              </div>
            </div>
          </div>

          {renderList('COMPANY', links.company)}
          {renderList('SERVICES', links.services)}
          {renderList('SERVICE AREAS', links.serviceAreas)}
          {renderList('HOURS', links.hours)}

          {renderMobileList()}
        </div>

        <div className="footer-third-container d-flex flex-column justify-content-start align-items-start flex-md-row  justify-content-md-between">
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