import React from 'react';
// import pagetear from '../../assets/img/footer-pagetear-img.webp';


const StarIcon = ({ size = 24, color = "#FCD34D" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.4697 7.60081C14.6035 8.01284 14.9875 8.2918 15.4207 8.2918H20.335C21.3037 8.2918 21.7065 9.53141 20.9228 10.1008L16.947 12.9894C16.5966 13.244 16.4499 13.6954 16.5838 14.1074L18.1024 18.7812C18.4017 19.7025 17.3472 20.4686 16.5635 19.8992L12.5878 17.0106C12.2373 16.756 11.7627 16.756 11.4122 17.0106L7.43648 19.8992C6.65276 20.4686 5.59828 19.7025 5.89763 18.7812L7.41623 14.1074C7.55011 13.6954 7.40345 13.244 7.05296 12.9894L3.07722 10.1008C2.29351 9.53141 2.69628 8.2918 3.66501 8.2918H8.57929C9.01252 8.2918 9.39647 8.01284 9.53035 7.60081L11.0489 2.92705Z" />
    </svg>
);

const platformIcons = {
    Google: (
        <svg width="32" height="32" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4285f4" d="M533.5 278.4c0-18.1-1.6-35.5-4.6-52.3H272v99h146.9c-6.3 33.5-25.1 61.9-53.4 81l86.2 67.2c50.3-46.4 81.8-114.8 81.8-194.9z" />
            <path fill="#34a853" d="M272 544.3c72.9 0 134-24.1 178.6-65.5l-86.2-67.2c-23.9 16.1-54.5 25.6-92.4 25.6-71.1 0-131.3-48-152.7-112.8l-89.6 69.2c43.2 85.4 132.3 144.7 242.3 144.7z" />
            <path fill="#fbbc04" d="M119.3 324.4c-10.2-30.2-10.2-62.6 0-92.8l-89.6-69.2c-39.1 76.4-39.1 167.5 0 243.9l89.6-69.2z" />
            <path fill="#ea4335" d="M272 107.7c39.7-.6 77.9 13.7 107.5 40.3l80.4-80.4C417.5 23.3 346.6-.4 272 0 162 0 72.9 59.3 29.7 144.7l89.6 69.2c21.4-64.8 81.6-112.8 152.7-112.8z" />
        </svg>
    ),
    Facebook: (
        <svg width="32" height="32" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M54 27.0009C54 40.6376 43.8917 51.9114 30.7601 53.7408C29.5323 53.9111 28.2761 54 27.0009 54C25.5291 54 24.0837 53.8827 22.6761 53.6557C9.81887 51.586 0 40.439 0 27.0009C0 12.0891 12.0891 0 26.9991 0C41.909 0 54 12.0891 54 27.0009Z"
                fill="#1877F2"
            />
            <path
                d="M30.7603 21.6791V27.5609H38.0365L36.8844 35.4841H30.7603V53.7389C29.5325 53.9092 28.2763 53.9981 27.0012 53.9981C25.5293 53.9981 24.0839 53.8808 22.6763 53.6538V35.4841H15.9658V27.5609H22.6763V20.3642C22.6763 15.8994 26.2955 12.2783 30.7622 12.2783V12.2821C30.7755 12.2821 30.7868 12.2783 30.8001 12.2783H38.0384V19.1307H33.3087C31.903 19.1307 30.7622 20.2715 30.7622 21.6772L30.7603 21.6791Z"
                fill="white"
            />
        </svg>
    )
};

const platforms = [
    {
        name: 'Google',
        url: 'https://www.google.com/search?q=your+business+name&ludocid=1234567890#lrd=0x0:0x0,1,,,',
        className: 'google',
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/yourbusiness/reviews',
        className: 'facebook',
    }
];

const LeaveAReview = ({ stars = 5, platformsToShow = platforms }) => {
    return (
        <section className="bg-black text-light text-center leave-us-review-section" style={{}}>
            <div className="leave-us-review container-xxl mx-auto" style={{ position: "absolute", left: 0, right: 0, zIndex: "3" }}>
                <div className="review-box border border-light" >
                    <h3 className="mb-0 fw-bold">LEAVE US A REVIEW</h3>

                    <div className="stars-container d-flex justify-content-center gap-2 mt-2">
                        {Array.from({ length: stars }).map((_, i) => (
                            <StarIcon key={i} />
                        ))}
                    </div>

                    <div className="review-buttons d-flex justify-content-center gap-3">
                        {platformsToShow.map(platform => (
                            <a
                                key={platform.name}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`review-button d-flex align-items-center text-white  ${platform.className}`}
                                style={{

                                    textDecoration: 'none',
                                    // minWidth: '260px',
                                    justifyContent: 'center'
                                }}
                                aria-label={`Leave a review on ${platform.name}`}
                            >
                                <div className="icon-wrapper d-flex align-items-center justify-content-center bg-white me-auto" style={{ width: 54, height: 54, borderRadius: ".125rem" }}>
                                    {platformIcons[platform.name]}
                                </div>
                                <span className="text-start text-light">
                                    LEAVE US A REVIEW ON<br />
                                    <strong>{platform.name.toUpperCase()}</strong>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Page tear at the bottom */}
            {/* <div className="page-tear  bottom-0 start-0 w-100">
                <img
                    src={pagetear}
                    alt="Page tear"
                    className="w-100 d-block"
                    style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                />
            </div> */}
        </section>
    );
};

export default LeaveAReview;
