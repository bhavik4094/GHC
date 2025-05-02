import React from 'react';
import backgroundImage from '../../../assets/img/footer-1-img.webp';
import pagetear from '../../../assets/img/footer-pagetear-img.webp';

function FooterFirst() {
    return (
        <div className="footer-wrapper">
            {/* <div className="bg-secondary"></div> */}
            <section
                className="cta-section text-white text-center position-relative overflow-hidden d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '60vh', // adjust height as needed
                }}
            >

                <div className="cta-overlay position-absolute top-0 start-0 w-100 h-100"></div>

                <div className="cta-content container position-relative px-4 py-5 ">
                    <h2 className="fw-bold display-5 mb-3">READY TO GET STARTED?</h2>
                    <h2 className="fw-bold display-5 mb-5">BOOK AN APPOINTMENT TODAY.</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-3">
                        <button className="btn btn-green flex-grow-1 flex-md-grow-0">
                            GET A FREE QUOTE
                        </button>
                        <button className="btn btn-outline-green flex-grow-1 flex-md-grow-0">
                            CALL US
                        </button>
                    </div>
                </div>

                {/* Page tear at the bottom */}
                <div className="page-tear position-absolute bottom-0 start-0 w-100">
                    <img
                        src={pagetear}
                        alt="Page tear"
                        className="w-100 d-block"
                        style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                    />
                </div>
            </section>
        </div>
    );
}

export default FooterFirst;
