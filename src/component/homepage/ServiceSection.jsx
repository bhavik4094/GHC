import React, { useState } from 'react';
// import './ServicesSection.css'; // optional: place styles here if needed
import ServiceCard from './ServiceCard';
import cardImg1 from '../../assets/img/service-img-1.webp';
import cardImg2 from '../../assets/img/service-img-2.webp';
import cardImg3 from '../../assets/img/service-img-3.webp';
import cardImg4 from '../../assets/img/service-img-4.webp';
import cardImg5 from '../../assets/img/service-img-5.webp';
import cardImg6 from '../../assets/img/service-img-6.webp';
import cardImg7 from '../../assets/img/service-img-7.webp';
import cardImg8 from '../../assets/img/service-img-8.webp';

const services = [
    {
        title: 'Driveway Repair & Replacements',
        image: cardImg1,
        description:
            'Our driveway repair and replacement service offers homeowners a reliable solution for fixing or upgrading their existing driveways, ensuring durability and enhancing the overall aesthetic appeal of their property.',
    },
    {
        title: 'Patio Design & Construction',
        image: cardImg2,
        description:
            'Our Patio Design & Construction service creates stunning and functional outdoor spaces that bring beauty and functionality to your home. Let us transform your front or backyard into a beautiful oasis.',
    },
    {
        title: 'Concrete Slab Installation',
        image: cardImg3,
        description:
            'We can install concrete slabs to create a durable and aesthetically pleasing surface for your outdoor space or future metal building. Our team of experienced professionals will ensure the job is done right!',
    },
    {
        title: 'Mitered Ends',
        image: cardImg4,
        description:
            'Our Mitered Ends service ensures clean and precise cuts at the corners of your concrete project, providing a polished and professional finish to enhance the overall aesthetics of your home or business.',
    },
    {
        title: 'Fill-in Sunken Living Room',
        image: cardImg5,
        description:
            'Transform your living space with our Fill-in Sunken Living Room service. We expertly raise and level your sunken living room, creating a seamless and functional area for you to enjoy.',
    },
    {
        title: 'Parking Lot Repairs and Curbing',
        image: cardImg6,
        description:
            'Our Parking Lot Repairs and Curbing service provides customers with professional concrete repairs for their parking lots, ensuring safety and enhancing the overall appearance of their property.',
    },
    {
        title: 'Bollards Installation',
        image: cardImg7,
        description:
            'We can install concrete or steel bollards to create a protected and aesthetically pleasing parking lot. Our team of experienced professionals will ensure the job is done right!',
    },
    {
        title: 'Concrete Repairs',
        image: cardImg8,
        description:
            'Our Concrete Repairs service offers homeowners reliable, efficient solutions for addressing and fixing any concrete structures or surfaces that may be damaged or deteriorating on their property.',
    },
];



const ServicesSection = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMore = () => {
        setVisibleCount(services.length);
    };
    return (
        <section className="services py-5">
            <div className="container-xxl">
                <div className="title-wrapper pb-3 pb-md-4">
                    <p className="light-text px-2 mb-2">What we are best at</p>
                    <h2 className="light-text d-flex align-items-center gap-4 mb-2 mb-xl-3 ">
                        OUR SERVICES
                        <span className="title-hr"></span>
                    </h2>
                </div>

                <div className="row list-unstyled mb-0" id="service-cards">
                    {services.slice(0, visibleCount).map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                {visibleCount < services.length && (
                    <div className="text-center mt-4">
                        <button
                            id="show-more-btn"
                            onClick={handleShowMore}
                            className="text-light text-uppercase fs-5 bg-transparent border-0"
                        >
                            See More Services
                            <span className="service-plus-icon ms-2 d-inline-flex">
                                <svg width={15} height={15} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 0C8.05228 0 8.5 0.447715 8.5 1V6H13.5C14.0523 6 14.5 6.44772 14.5 7C14.5 7.55228 14.0523 8 13.5 8H8.5V13C8.5 13.5523 8.05228 14 7.5 14C6.94772 14 6.5 13.5523 6.5 13V8H1.5C0.947715 8 0.5 7.55228 0.5 7C0.5 6.44771 0.947715 6 1.5 6L6.5 6V1C6.5 0.447715 6.94772 0 7.5 0Z" fill="currentColor" />
                                </svg>
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicesSection;
