import React, { useEffect, useState } from 'react';
import axios from 'axios';
import backgroundImage from '../../../assets/img/footer-1-img.webp';
import pagetear from '../../../assets/img/footer-pagetear-img.webp';

function FooterFirst() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/footercontent')
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, []);

    if (!data) return null; // Or a skeleton loader

    return (
        <section className="footer-wrapper">
            <div
                className="cta-section container-fluid text-white text-center position-relative overflow-hidden d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="cta-overlay position-absolute top-0 start-0 w-100 h-100"></div>

                <div className="cta-content d-flex flex-column justify-content-center align-items-center">
                    <div className="cta-content-heading">
                        <h2 className="mb-3">{data.headingLine1}</h2>
                        <h2 className="mb-0">{data.headingLine2}</h2>
                    </div>
                    <div className="cta-btns d-flex flex-column flex-md-row justify-content-center gap-3 pt-5">
                        {Array.isArray(data.buttons) && data.buttons.map((btn, idx) => (
                            btn.text && btn.link && (
                                <a key={idx} href={btn.link} className={btn.type === 'green' ? 'quote-button' : 'call-button'}>
                                    {btn.text}
                                </a>
                            )
                        ))}
                    </div>
                </div>

                <div className="page-tear position-absolute bottom-0 start-0 w-100">
                    <img src={pagetear} alt="Page tear" className="w-100 d-block" />
                </div>
            </div>
        </section>
    );
}

export default FooterFirst;
