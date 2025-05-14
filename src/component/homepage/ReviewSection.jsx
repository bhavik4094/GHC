import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import '.swiper/css';
// import 'swiper/css/navigation';
// import './ReviewSlider.css'; // Custom styles (optional)

const reviews = [
    {
        id: 1,
        name: "DAWN JOHNSON",
        category: "DRIVEWAY REPAIR & REPLACEMENTS",
        text: "reliable and easy to work with",
    },
    {
        id: 2,
        name: "BA CARDINAL",
        category: "DRIVEWAY REPAIR & REPLACEMENTS",
        text: "I am so happy with the driveway job Green Hammer did for me. The crew was so professional yet they took the time to answer any questions I had. Even with the dodging the rain they were able to complete the job and get full compliance from the city highly...",
    },
    {
        id: 3,
        name: "RICHARD BERRY",
        category: "PATIO DESIGN & CONSTRUCTION",
        text: "I highly recommend this contractor. The whole team at Green Hammer was professional and the work exceptional. Ashley was always available for questions and updates and was knowledgeable and experienced in navigating the permitting process.",
    },
];



function ReviewSection() {
    return (
        <section className="review-slider-section position-relative">
            <img
                src="https://products.codersh.com/greenhammerconcrete/wp-content/uploads/2025/05/vector1.svg"
                alt=""
                className="overlay-image1 position-absolute top-0 z-3 start-0"
            />
            <div className="container testimonial-section">
                <div className="title-wrapper">
                    <p className="text-light heading-upper-text review-subheading-text mb-0">
                        <span>TAKE A LOOK FOR YOURSELF ON WHAT YOUR NEIGHBORS ARE SAYING ABOUT US.</span>

                    </p>
                    <h2 className="text-light d-flex align-items-center gap-4  review-setion-heading">
                        REVIEWS
                        <span className="title-hr"></span>
                        <a href="#" className="review-btn d-none d-md-inline-flex text-decoration-none">
                            SEE ALL REVIEWS
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                                <path d="M10.6667 1.1665L16.5 6.99984L10.6667 12.8332L16.5 6.99984L1.5 6.99984" stroke="#000" strokeWidth="1.5" />
                            </svg>
                        </a>
                    </h2>
                </div>

                <div className="position-relative">
                    {/* Left arrow */}
                    <button
                        className="btn position-absolute top-50 start-0 translate-middle-y z-3 button-previous"
                        aria-label="Previous review"
                        style={{
                            borderRadius: ".125rem",
                            height: "48px",
                            width: "48px",
                            marginLeft: "16px"
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0769 28.0235C19.6039 28.5263 18.8128 28.5504 18.31 28.0774L11.9398 22.0842C11.0198 21.2187 11.0199 19.782 11.9398 18.9165L18.31 12.9232C18.8128 12.4502 19.6039 12.4743 20.0769 12.9771C20.55 13.4799 20.5258 14.271 20.023 14.7441L13.9047 20.5003L20.023 26.2566C20.5258 26.7296 20.55 27.5207 20.0769 28.0235Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9165 20.5C27.9165 21.1904 27.3569 21.75 26.6665 21.75L14.1665 21.75C13.4761 21.75 12.9165 21.1904 12.9165 20.5C12.9165 19.8096 13.4761 19.25 14.1665 19.25L26.6665 19.25C27.3569 19.25 27.9165 19.8096 27.9165 20.5Z" fill="white" />
                        </svg>
                    </button>

                    <div
                        className="d-flex overflow-auto gap-3 px-5 justify-content-center"
                        style={{ scrollSnapType: "x mandatory" }}
                    >
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className=" review-card bg-white text-dark flex-shrink-0"

                            >
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div className="text-warning fs-5 d-flex">
                                        {[...Array(5)].map((_, i) => (
                                            <span className="me-1" key={i}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="40"
                                                    height="40"
                                                    viewBox="0 0 40 40"
                                                    fill="none"
                                                >
                                                    <g clipPath="url(#clip0_5535_27332)">
                                                        <path
                                                            d="M19.0489 2.92705C19.3483 2.00574 20.6517 2.00574 20.9511 2.92705L24.2658 13.1287C24.3996 13.5407 24.7836 13.8197 25.2168 13.8197H35.9434C36.9122 13.8197 37.3149 15.0593 36.5312 15.6287L27.8532 21.9336C27.5027 22.1883 27.3561 22.6396 27.4899 23.0517L30.8046 33.2533C31.104 34.1746 30.0495 34.9407 29.2658 34.3713L20.5878 28.0664C20.2373 27.8117 19.7627 27.8117 19.4122 28.0664L10.7342 34.3713C9.95048 34.9407 8.896 34.1746 9.19535 33.2533L12.5101 23.0517C12.6439 22.6396 12.4973 22.1883 12.1468 21.9336L3.46877 15.6287C2.68505 15.0593 3.08783 13.8197 4.05655 13.8197H14.7832C15.2164 13.8197 15.6004 13.5407 15.7342 13.1287L19.0489 2.92705Z"
                                                            fill="#FCD34D"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_5535_27332">
                                                            <rect width="40" height="40" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                        ))}
                                    </div>

                                    <i className="fas fa-quote-right fs-1 fw-bold"></i>
                                </div>
                                <div className='d-flex flex-column justify-content-between' style={{ height: "331px" }}>
                                    <p className="text-muted review-msg mb-0 pt-2">{review.text}</p>
                                    <div>
                                        <p className="text-uppercase review-name mb-0">{review.name}</p>
                                        <span className="badge review-category">{review.category}</span>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button
                        className="btn position-absolute top-50 end-0 translate-middle-y z-3 button-next"
                        aria-label="Next review"
                        style={{
                            borderRadius: ".125rem",
                            height: "48px",
                            width: "48px",
                            marginRight: "16px"
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9226 12.9765C20.3957 12.4737 21.1867 12.4496 21.6895 12.9226L28.0597 18.9158C28.9797 19.7813 28.9797 21.218 28.0597 22.0835L21.6895 28.0768C21.1867 28.5498 20.3957 28.5257 19.9226 28.0229C19.4496 27.5201 19.4737 26.729 19.9765 26.2559L26.0948 20.4997L19.9765 14.7434C19.4737 14.2704 19.4496 13.4793 19.9226 12.9765Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.083 20.5C12.083 19.8096 12.6427 19.25 13.333 19.25H25.833C26.5234 19.25 27.083 19.8096 27.083 20.5C27.083 21.1904 26.5234 21.75 25.833 21.75H13.333C12.6427 21.75 12.083 21.1904 12.083 20.5Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ReviewSection

