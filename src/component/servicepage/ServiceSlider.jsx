// components/ImageSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imageUrls = [
    '/images/service/service-slider-img-1.webp',
    '/images/service/service-slider-img-1.webp',
    '/images/service/service-slider-img-1.webp',
    '/images/service/service-slider-img-1.webp',
    '/images/service/service-slider-img-1.webp',
    '/images/service/service-slider-img-1.webp',
    '/images/service/service-slider-img-1.webp',
    '/images/service/service-slider-img-1.webp',

];

// You can replace these image paths with actual URLs or imports

const ImageSlider = () => {
    return (
        <div className="">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="mySwiper"
            >
                {imageUrls.map((url, idx) => (
                    <SwiperSlide key={idx}>
                        <img
                            src={url}
                            alt={`Driveway ${idx + 1}`}
                            className=" h-auto object-cover rounded-md shadow-md service-slider-images"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;
