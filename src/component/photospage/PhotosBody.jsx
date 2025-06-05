// import React, { useEffect } from 'react';

// const mediaItems = [
//     { type: 'image', src: '/images/work/work-1.webp' },
//     { type: 'image', src: '/images/work/work-2.webp' },
//     { type: 'image', src: '/images/work/work-3.webp' },
//     { type: 'image', src: '/images/work/work-4.webp' },
//     { type: 'image', src: '/images/work/work-5.webp' },
//     { type: 'image', src: '/images/work/work-6.webp' },
//     { type: 'image', src: '/images/work/work-7.webp' },
//     { type: 'image', src: '/images/work/work-8.webp' },
//     { type: 'image', src: '/images/work/work-9.webp' },
//     { type: 'image', src: '/images/work/work-10.webp' },
//     { type: 'image', src: '/images/work/work-11.webp' },
//     { type: 'image', src: '/images/work/work-12.webp' },
//     { type: 'image', src: '/images/work/work-13.webp' },
//     { type: 'image', src: '/images/work/work-14.webp' },
//     { type: 'image', src: '/images/work/work-15.webp' },
//     { type: 'image', src: '/images/work/work-16.webp' },
//     { type: 'image', src: '/images/work/work-17.webp' },
//     { type: 'image', src: '/images/work/work-18.webp' },
//     { type: 'image', src: '/images/work/work-19.webp' },
//     { type: 'image', src: '/images/work/work-20.webp' },
//     // { type: 'video', src: '/media/video1.mp4' },

//     // Add more items as needed
// ];
import Masonry from 'react-masonry-css';



const images = Array.from({ length: 20 }, (_, i) =>
    `/images/work/work-${i + 1}.webp`
);

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
};



function PhotosBody() {

    // useEffect(() => {
    //     const Masonry = window.Masonry;
    //     new Masonry('.media-grid', {
    //         itemSelector: '.grid-item',
    //         columnWidth: '.grid-sizer',
    //         gutter: 24,
    //         percentPosition: true,
    //     });
    // }, []);


    // const images = [
    //     // Sample image URLs (you can replace these with your own)
    //     '/images/work/work-1.webp',
    //     '/images/work/work-2.webp',
    //     '/images/work/work-3.webp',
    //     '/images/work/work-4.webp',
    //     '/images/work/work-5.webp',
    //     '/images/work/work-6.webp',
    //     '/images/work/work-7.webp',
    //     '/images/work/work-8.webp',
    //     '/images/work/work-9.webp',
    //     '/images/work/work-10.webp',
    //     '/images/work/work-11.webp',

    // ];



    return (
        <section className='photos-body-section'>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-column"
            >
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`img-${index}`} className="masonry-item" />
                ))}
            </Masonry>
        </section>
    )
}

export default PhotosBody