import React from 'react';
import backgroundImage from '../../assets/img/footer-1-img.webp';

function FooterFirst() {
    return (
        <div>
            <div className="py-1 bg-secondary"></div>
            <section
                className="cta-section d-flex align-items-center justify-content-center text-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="cta-overlay"></div>
                <div className="cta-content container position-relative text-white px-4">
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
            </section>
        </div >
    )
}

export default FooterFirst