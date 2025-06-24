import React, { useEffect, useState } from 'react';
import axios from 'axios';
import pageteartop from '../../assets/img/pagetear-2.webp';
import pagetear from '../../assets/img/footer-pagetear-img.webp';

// Replace with environment variable in production
const apiBaseUrl = 'http://localhost:5000/';

const ImageBox = ({ src, alt, className }) => (
    <span className={`border border-black ${className}`}>
        <img src={src} alt={alt || 'image'} className="w-100 h-100" />
    </span>
);

function GetStarted() {
    const [content, setContent] = useState(null);

    useEffect(() => {
        axios
            .get(`${apiBaseUrl}api/getstarted`)
            .then(res => setContent(res.data))
            .catch(err => {
                console.error('Failed to load GetStarted content:', err);
                setContent(null);
            });
    }, []);

    if (!content || typeof content !== 'object') return null;

    // Normalize background image URL
    const backgroundImage = content.backgroundImage
        ? `${apiBaseUrl}${content.backgroundImage}`
        : null;

    // Normalize side images if present
    const sideImages = Array.isArray(content.sideImages)
        ? content.sideImages.map(img => ({
            ...img,
            src: img?.src ? `${apiBaseUrl}${img.src}` : '',
        }))
        : [];

    return (
        <section className="get-started position-relative">
            {/* Top page tear */}
            <div className="page-tear position-absolute start-0 w-100" style={{ marginTop: '-2px' }}>
                <img
                    src={pageteartop}
                    alt="Decorative page tear"
                    className="w-100 d-block"
                    style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                />
            </div>

            {backgroundImage && (
                <img src={backgroundImage} alt="Background" className="h-100 w-100 object-fit-cover" />
            )}

            <div className="position-absolute top-0 w-100 h-100 background-color d-flex align-items-center">
                <div className="container-xxl">
                    <div className="row">
                        {/* Text + Buttons */}
                        <div className="col-xl-7 d-flex flex-column justify-content-center px-3">
                            {content.heading1 && (
                                <h2 className="get-started-text mb-3 text-light">{content.heading1}</h2>
                            )}

                            {content.heading2 && (
                                <h2 className="get-started-text text-light mb-4 getstarted-text2">
                                    {content.heading2}
                                </h2>
                            )}

                            <div className="d-flex gap-3 mt-4 flex-column flex-sm-row">
                                {content.quoteButton?.text && (
                                    <a href={content.quoteButton.link || '#'} className="quote-button">
                                        {content.quoteButton.text}
                                    </a>
                                )}
                                {content.callButton?.text && (
                                    <a href={content.callButton.link || '#'} className="call-button">
                                        {content.callButton.text}
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Side Images */}
                        {sideImages.length > 0 && (
                            <div className="col-xl-5 d-none d-xl-block position-relative hide-till-1025">
                                <div className="d-flex flex-column get-started-right">
                                    <span className="d-flex flex-column flex-lg-row align-items-end">
                                        {sideImages.slice(0, 2).map((img, i) =>
                                            img?.src ? (
                                                <ImageBox key={i} {...img} />
                                            ) : null
                                        )}
                                    </span>
                                    {sideImages[2]?.src && <ImageBox {...sideImages[2]} />}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom page tear */}
            <div className="page-tear position-absolute bottom-0 start-0 w-100">
                <img
                    src={pagetear}
                    alt="Page tear"
                    className="w-100 d-block"
                    style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                />
            </div>
        </section>
    );
}

export default GetStarted;
