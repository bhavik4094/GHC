import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

import useInView from '../hooks/useInView'; // adjust path if needed
// import '../styles/sliderAnimations.css'; // or wherever you put the CSS

const imageUrls = [
    '/images/service/service-slider-img-1.webp',
    '/images/service/service-slider-img-2.webp',
    '/images/service/service-slider-img-3.webp',
    '/images/service/service-slider-img-4.webp',
    '/images/service/service-slider-img-5.webp',
    '/images/service/service-slider-img-6.webp',
    '/images/service/service-slider-img-7.webp',
    '/images/service/service-slider-img-8.webp',
    '/images/service/service-slider-img-9.webp',
    '/images/service/service-slider-img-10.webp',
    '/images/service/service-slider-img-11.webp',
    '/images/service/service-slider-img-12.webp',
    '/images/service/service-slider-img-13.webp',
    '/images/service/service-slider-img-14.webp',
];

const ImageSlider = () => {
    const [sliderRef, inView] = useInView(0.3); // 30% visibility threshold

    return (
        <div
            ref={sliderRef}
            className={`service-slider-container slider-fade ${inView ? 'slider-visible' : ''}`}
            style={{ zIndex: 10 }}
        >
            <Swiper
                className='service-slider-swiper'
                modules={[Pagination, Autoplay]}
                pagination={{
                    clickable: true,
                    el: '.custom-swiper-pagination',
                }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                    1200: { slidesPerView: 4 },
                }}
            >
                {imageUrls.map((url, idx) => (
                    <SwiperSlide key={idx} className="d-flex justify-content-center service-swiper-slider">
                        <img
                            src={url}
                            alt={`Driveway ${idx + 1}`}
                            className="img-fluid border service-slider-images"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="custom-swiper-pagination mt-3 d-flex justify-content-center"></div>
        </div>
    );
};

export default ImageSlider;
