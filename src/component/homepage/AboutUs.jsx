import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutUsSection = () => {
    const [aboutus, setAboutUs] = useState({
        heading: '',
        description: '',
        smallImage: '',
        bigImage: ''
    });

    const [socialIcons, setSocialIcons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    // Create base URL for static files (without /api)
    const STATIC_BASE_URL = import.meta.env.VITE_API_URL ?
        import.meta.env.VITE_API_URL.replace('/api', '') :
        'http://localhost:5000';

    // Helper function to construct image URLs
    const getImageUrl = (imagePath) => {
        if (!imagePath) return '';

        // If already a complete URL, return as is
        if (imagePath.startsWith('http')) {
            return imagePath;
        }

        // If path starts with /uploads, use it directly
        if (imagePath.startsWith('/uploads')) {
            return `${STATIC_BASE_URL}${imagePath}`;
        }

        // If path doesn't start with /, add /uploads/
        if (imagePath.startsWith('uploads')) {
            return `${STATIC_BASE_URL}/${imagePath}`;
        }

        // Default case - assume it needs /uploads/ prefix
        return `${STATIC_BASE_URL}/uploads/${imagePath}`;
    };

    useEffect(() => {
        const fetchAboutUsData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/about`);
                const data = response.data;

                console.log('Fetched data:', data); // Debug log

                setAboutUs({
                    heading: data.heading,
                    description: data.description,
                    smallImage: getImageUrl(data.smallImage),
                    bigImage: getImageUrl(data.bigImage)
                });

                // Process social icons
                const processedIcons = (data.socialIcons || []).map(icon => ({
                    ...icon,
                    src: getImageUrl(icon.src)
                }));

                setSocialIcons(processedIcons);

                // Debug logs
                console.log('Processed images:', {
                    smallImage: getImageUrl(data.smallImage),
                    bigImage: getImageUrl(data.bigImage),
                    socialIcons: processedIcons
                });

            } catch (err) {
                console.error('Error fetching About data:', err);
                setError('Failed to load About Us content.');
            } finally {
                setLoading(false);
            }
        };

        fetchAboutUsData();
    }, [API_BASE_URL, STATIC_BASE_URL]);

    if (loading) {
        return <div className="text-center py-5">Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger text-center">{error}</div>;
    }

    // Enhanced image error handler with more debugging
    const handleImageError = (e, imageName) => {
        console.error(`Failed to load ${imageName}:`, e.target.src);
        console.error('Image error event:', e);
        e.target.style.display = 'none'; // Hide broken image
    };

    return (
        <section className="about-us-section">
            <div className="container-xxl pt-4 pb-0 px-2 py-md-5 px-md-3">
                <div className="row">
                    {/* === Left Column === */}
                    <div className="col-lg-5 col-md-4 mb-lg-0">
                        {/* Heading */}
                        <div className="d-flex about-heading-box align-items-center">
                            <h2 className="about-heading mb-0 responsive-nowrap">{aboutus.heading}</h2>
                            <div
                                className="about-headerline flex-grow-1 d-block hide-md-only"
                                style={{ height: '1px', minWidth: '20px' }}
                            ></div>
                        </div>

                        {/* Description */}
                        <p className="about-text">{aboutus.description}</p>

                        {/* Social Icons & Small Image */}
                        <div className="mt-4 about-icon-box-div">
                            <div className="about-icon-box d-none d-md-flex">
                                {socialIcons.map((icon, index) => (
                                    <img
                                        key={index}
                                        src={icon.src}
                                        alt={icon.alt}
                                        className="footer-card-logo2"
                                        style={{ maxWidth: "50px", height: "100%", width: "100%" }}
                                        onError={(e) => handleImageError(e, `social icon ${index}`)}
                                        onLoad={() => console.log(`Social icon ${index} loaded successfully`)}
                                    />
                                ))}
                            </div>
                            {aboutus.smallImage && (
                                <img
                                    src={aboutus.smallImage}
                                    alt="Concrete Driveway Project"
                                    className="about-img1 d-none d-lg-block"
                                    onError={(e) => handleImageError(e, 'small image')}
                                    onLoad={() => console.log('Small image loaded successfully')}
                                />
                            )}
                        </div>
                    </div>

                    {/* === Right Column === */}
                    <div className="col-lg-7 col-md-8 col-12 about-img-section-div d-none d-md-block">
                        {aboutus.bigImage && (
                            <img
                                src={aboutus.bigImage}
                                alt="Green Hammer Concrete Team"
                                className="about-img-section"
                                onError={(e) => handleImageError(e, 'big image')}
                                onLoad={() => console.log('Big image loaded successfully')}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className='pb-4 pb-md-0'>
                {/* Images Side-by-Side */}
                <div className="d-flex mx-0 justify-content-between d-block d-md-none" style={{ height: "200px" }}>
                    {aboutus.smallImage && (
                        <img
                            src={aboutus.smallImage}
                            alt="Concrete Driveway"
                            className="img-fluid me-2 mt-auto"
                            style={{ width: '40%', objectFit: "contain", height: "auto" }}
                            onError={(e) => handleImageError(e, 'mobile small image')}
                        />
                    )}
                    {aboutus.bigImage && (
                        <img
                            src={aboutus.bigImage}
                            alt="Green Hammer Team"
                            className="img-fluid mb-auto"
                            style={{ width: '60%', objectFit: "contain", height: "auto" }}
                            onError={(e) => handleImageError(e, 'mobile big image')}
                        />
                    )}
                </div>

                {/* Social Icons */}
                <div className="d-flex justify-content-center gap-4 d-block d-md-none mt-4 pb-2">
                    {socialIcons.slice(0, 3).map((icon, index) => (
                        <img
                            key={index}
                            src={icon.src}
                            alt={icon.alt}
                            style={{
                                width: '50px',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                            onError={(e) => handleImageError(e, `mobile social icon ${index}`)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;