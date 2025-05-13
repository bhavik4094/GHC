import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import '.swiper/css';
// import 'swiper/css/navigation';
// import './ReviewSlider.css'; // Custom styles (optional)

const reviews = [
    {
        name: '',
        job: 'Driveway Repair & Replacements',
        text: `I cannot recommend Green Hammer Concrete enough for any concrete project you may have. From the moment I reached out...`,
    },
    {
        name: 'Kenneth Keaton',
        job: 'Driveway Repair & Replacements',
        text: 'They did a wonderful job in a timely manner and help my mom out with a brand new driveway. They are awesome.',
    },
    {
        name: 'Richard Berry',
        job: 'Patio Design & Construction',
        text: `I highly recommend this contractor. The whole team at Green Hammer was professional and the work exceptional...`,
    },
    {
        name: 'BA Cardinal',
        job: 'Driveway Repair & Replacements',
        text: `I am so happy with the driveway job Green Hammer did for me. The crew was so professional...`,
    },
    {
        name: 'Alex',
        job: 'Fill-in Sunken Living Room',
        text: `Couldn’t have asked for a better experience than what I got from this team.`,
    },
    {
        name: '',
        job: 'Driveway Repair & Replacements',
        text: `Adam and crew did an amazing job, exactly what we wanted...`,
    },
];

const ReviewCard = ({ name, job, text }) => (
    <div>
        <div className="star-wrap d-flex justify-content-between">
            <div className="stars">★★★★★</div>
            <span className="quote-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 38" fill="none">
                    {/* SVG paths go here (shortened for clarity) */}
                    <path d="..." fill="#000" />
                </svg>
            </span>
        </div>
        <p className="review-text">{text}</p>
        <span className="see-more">SEE MORE</span>
        <div className="review-footer">
            <p className="mb-1">{name}</p>
            <p className="bottom-text fw-bold">{job}</p>
        </div>
    </div>
);


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
                    <p className="text-light px-2 mb-2 heading-upper-text">
                        TAKE A LOOK FOR YOURSELF ON WHAT YOUR NEIGHBORS ARE SAYING ABOUT US.
                    </p>
                    <h2 className="text-light d-flex align-items-center mt-1 gap-4">
                        REVIEWS
                        <span className="title-hr"></span>
                        <a href="#" className="review-btn d-none d-md-inline-flex bg-light text-decoration-none">
                            SEE ALL REVIEWS
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                                <path d="M10.6667 1.1665L16.5 6.99984L10.6667 12.8332L16.5 6.99984L1.5 6.99984" stroke="#000" strokeWidth="1.5" />
                            </svg>
                        </a>
                    </h2>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <ReviewCard {...review} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Swiper Navigation */}
                <div className="swiper-custom-arrows">
                    <div className="swiper-button-prev">
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
                            <path d="..." fill="white" />
                        </svg>
                    </div>
                    <div className="swiper-button-next">
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
                            <path d="..." fill="white" />
                        </svg>
                    </div>
                </div>

                <div className="see-all-button d-md-none d-flex justify-content-center mt-lg-5">
                    <a href="#" className="see-all-btn-bottom text-white text-decoration-none">
                        SEE ALL REVIEWS
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                            <path d="M10.6667 1.1665L16.5 6.99984L10.6667 12.8332L16.5 6.99984L1.5 6.99984" stroke="#fff" strokeWidth="1.5" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ReviewSection

