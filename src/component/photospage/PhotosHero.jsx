import React, { useEffect, useState } from 'react';
import axios from 'axios';
import footerPageTear from "../../assets/img/footer-pagetear-img.webp"

function PhotosHero() {
    // const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [heroData, setHeroData] = useState({ heading: '', description: '' });

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/mediahero');
                if (response.data) {
                    setHeroData(response.data[0]);
                    console.log('Media Hero Data:', response.data);
                } else {
                    setError('No data found.');
                }
            } catch (err) {
                console.error('Failed to load media hero data:', err);
                setError('Failed to load Media Hero section.');
            } finally {
                setLoading(false);
            }
        };

        fetchHeroData();
    }, []);
    return (
        <>
            {loading ? (
                <p className="text-center fs-5 my-4">Loading reviews...</p>
            ) : error ? (
                <p className="text-center fs-6 my-3">
                    <span style={{ color: "red" }}>Error:</span> {error}
                </p>
            ) : (
                <section className="video-banner-section">
                    {/* Background Image */}
                    <img
                        src="https://products.codersh.com/greenhammerconcrete/wp-content/uploads/2025/05/hero-bg.webp"
                        alt="Concrete background"
                        className="hero-background-img"
                    />
                    {/* Content Overlay */}
                    <div className="video-hero-overlay text-center flex-column">
                        <div className="photos-hero-content">
                            <h2 className='text-uppercase mb-0'>{heroData.heading || 'Data Not Found'}</h2>
                            <p className=" mt-md-4 mt-3 mb-0">{heroData.description || 'Data Not Found'}</p>
                            <div className="cta-btns d-flex flex-column flex-md-row justify-content-center gap-3 photoshero-btncntnr">
                                <a href="https://ghc-zeta.vercel.app/contact" class="quote-button photos-hero-btns">GET A FREE QUOTE</a>
                                <a href="#" class="call-button photos-hero-btns">CALL US</a>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Overlay Vector Image */}
                    <img
                        src={footerPageTear}
                        alt="Decorative vector"
                        className="hero-bottom-vector"
                    />
                </section>
            )}
        </>
    )
}
export default PhotosHero


