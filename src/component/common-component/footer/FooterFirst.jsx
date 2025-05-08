import React from 'react';
import backgroundImage from '../../../assets/img/footer-1-img.webp';
import pagetear from '../../../assets/img/footer-pagetear-img.webp';

function FooterFirst() {
    return (
        <section className="footer-wrapper">
            {/* <div className="bg-secondary"></div> */}
            <div
                className="cta-section  contianer container-fluid text-white text-center position-relative overflow-hidden d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // minHeight: '60vh', // adjust height as needed
                }}
            >

                <div className="cta-overlay position-absolute top-0 start-0 w-100 h-100"></div>

                <div className="cta-content d-flex flex-column justifcontent-center align-items-center">
                    <div className="cta-content-heading">
                        <h2 className="mb-3">READY TO GET STARTED?</h2>
                        <h2 className="mb-0">BOOK AN APPOINTMENT TODAY.</h2>
                    </div>
                    <div className="cta-btns d-flex flex-column flex-md-row justify-content-center gap-3 pt-5">
                        <button className="btn btn-green flex-grow-1 flex-md-grow-0 cta-content-btns">
                            GET A FREE QUOTE
                        </button>
                        <button className="btn btn-outline-green flex-grow-1 flex-md-grow-0 cta-content-btns">
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
            </div>
        </section>
    );
}

export default FooterFirst;
