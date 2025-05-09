import React from 'react';
import getStartedBG from '../../assets/img/getstarted-bg.webp';
import GetStartedImg1 from '../../assets/img/getstarted-img2.webp';
import GetStartedImg2 from '../../assets/img/getstarted-img3.webp';
import GetStartedImg3 from '../../assets/img/getstarted-img4.webp';
import pageteartop from '../../assets/img/pagetear-2.webp';

// Optional: Button and Image item subcomponents
const CTAButton = ({ text, className }) => (
    <button className={`cta-content-btns ${className}`}>
        {text}
    </button>
);

const ImageBox = ({ src, alt, className }) => (
    <span className={`border border-black ${className}`}>
        <img src={src} alt={alt} className="w-100 h-100" />
    </span>
);

function GetStarted() {
    const ctaButtons = [
        { text: 'GET A FREE QUOTE', className: 'btn btn-green flex-grow-1 flex-md-grow-0' },
        { text: 'CALL US', className: 'btn btn-outline-green flex-grow-1 flex-md-grow-0' },
    ];

    const sideImages = [
        { src: GetStartedImg1, alt: 'Consultation image 1', className: 'image-1' },
        { src: GetStartedImg2, alt: 'Consultation image 2', className: 'image-2' },
        { src: GetStartedImg3, alt: 'Consultation image 3', className: 'image-3 mx-auto' },
    ];

    return (
        <div>
            <section className="get-started position-relative">
                {/* Page tear */}
                <div className="page-tear position-absolute start-0 w-100" style={{ marginTop: '-2px' }}>
                    <img
                        src={pageteartop}
                        alt="Decorative page tear"
                        className="w-100 d-block"
                        style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                    />
                </div>

                <img src={getStartedBG} alt="Background" className="h-100 w-100 object-fit-cover" />

                <div className="position-absolute top-0 w-100 h-100 background-color d-flex align-items-center">
                    <div className="container-xxl">
                        <div className="row">
                            {/* Text + CTA */}
                            <div className="col-xl-7 d-flex flex-column justify-content-center px-3">
                                <h2 className="get-started-text mb-3 text-light">Ready to get started?</h2>
                                <h2 className="get-started-text text-light mb-4 getstarted-text2">
                                    Book an appointment today.
                                </h2>
                                <div className="d-flex gap-3 mt-4 flex-column flex-sm-row">
                                    {ctaButtons.map((btn, i) => (
                                        <CTAButton key={i} text={btn.text} className={btn.className} />
                                    ))}
                                </div>
                            </div>

                            {/* Image column */}
                            <div className="col-xl-5 d-none d-xl-block position-relative hide-till-1025">
                                <div className="d-flex flex-column get-started-right">
                                    <span className="d-flex flex-column flex-lg-row align-items-end">
                                        {sideImages.slice(0, 2).map((img, i) => (
                                            <ImageBox key={i} {...img} />
                                        ))}
                                    </span>
                                    <ImageBox {...sideImages[2]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GetStarted;
