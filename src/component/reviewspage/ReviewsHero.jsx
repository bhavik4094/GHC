import React, { useEffect, useState } from 'react';
import axios from 'axios';
import footerPageTear from "../../assets/img/footer-pagetear-img.webp"
import ReviewModal from './ReviewModal';
import "../../assets/css/Modal.css"

function ReviewsHero() {
    const [showModal, setShowModal] = useState(false);

    // dynamic data 
    const [heroData, setHeroData] = useState({ heading: '', description: '', buttontext: '' });

    useEffect(() => {
        axios.get('http://localhost:5000/api/reviewhero')
            .then(res => {
                if (res.data) {
                    setHeroData(res.data);
                }
            })
            .catch(err => {
                console.error('Failed to load review hero data:', err);
            });
    }, []);

    const starSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" class="reviews-hero-stars" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_5552_28268)">
                <path d="M11.5245 1.46353C11.6741 1.00287 12.3259 1.00287 12.4755 1.46353L14.5819 7.9463C14.6488 8.15232 14.8408 8.2918 15.0574 8.2918H21.8738C22.3582 8.2918 22.5596 8.9116 22.1677 9.1963L16.6531 13.2029C16.4779 13.3302 16.4046 13.5559 16.4715 13.7619L18.5779 20.2447C18.7276 20.7053 18.2003 21.0884 17.8085 20.8037L12.2939 16.7971C12.1186 16.6698 11.8814 16.6698 11.7061 16.7971L6.19153 20.8037C5.79967 21.0884 5.27243 20.7053 5.42211 20.2447L7.52849 13.7619C7.59543 13.5559 7.5221 13.3302 7.34685 13.2029L1.83227 9.1963C1.44041 8.9116 1.6418 8.2918 2.12616 8.2918H8.94256C9.15917 8.2918 9.35115 8.15232 9.41809 7.9463L11.5245 1.46353Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_5552_28268">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );

    return (
        <section className="video-banner-section">
            {/* Background Image */}
            <img
                src="https://products.codersh.com/greenhammerconcrete/wp-content/uploads/2025/05/hero-bg.webp"
                alt="Concrete background"
                className="hero-background-img"
            />

            {/* Content Overlay */}
            <div className="video-hero-overlay text-center flex-column">
                <div className="reviews-hero-container container d-flex justify-content-center flex-column align-items-center" style={{ maxWidth: "576px" }}>
                    <div className="fivestar gap-2 d-flex justify-content-center align-items-center" style={{ width: "fit-content" }}>
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>{starSvg}</span>
                        ))}
                    </div>
                    <h2 className='text-uppercase mb-0'>{heroData.heading || 'Data Not Found'}</h2>
                    <p className=" mb-0 mt-3 mt-md-4 ">{heroData.description || 'Data Not Found'}</p>

                    {/* Bootstrap-controlled button */}
                    <a
                        href="#"
                        className="quote-button reviews-hero-btn"

                        onClick={() => setShowModal(true)}
                    >
                        {heroData.buttontext || 'Data Not Found'}
                    </a>

                    {/* Bootstrap-controlled modal */}
                    <ReviewModal show={showModal} handleClose={() => setShowModal(false)} />
                </div>
            </div>

            {/* Bottom Overlay Vector Image */}
            <img
                src={footerPageTear}
                alt="Decorative vector"
                className="hero-bottom-vector"
            />
        </section>
    )
}

export default ReviewsHero
