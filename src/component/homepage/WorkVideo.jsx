import React from 'react';
import { useNavigate } from 'react-router-dom';
import workImg1 from "../../assets/img/work-img1.webp";
import workImg2 from "../../assets/img/work-img-2.webp";
// import './VideoGallery.css'; // Import the new CSS

const videos = [
    [
        { url: workImg1, style: { aspectRatio: '288 / 185' } },
        { url: workImg2, style: { aspectRatio: '288 / 185' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/016621bd-95aa-4da4-85a8-1bbb3fcf34e8.mp4', style: { aspectRatio: '288 / 185' } }
    ],
    [
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/116c2d0d-713d-4296-8825-7cd56a05f3fe.mp4', className: 'mt-md-5', style: { aspectRatio: '288 / 185' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/562d737b-c149-4101-9eab-f6dde231b5e1.mp4', style: { aspectRatio: '288 / 415' } }
    ],
    [
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/8c5a19dd-6915-4ed1-bb09-bb8f3e9e0904.mp4', style: { aspectRatio: '288 / 415' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/b724573a-b17e-446f-aca8-ed525fc5a41f.mp4', style: { aspectRatio: '288 / 320' } }
    ],
    [
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/6f812149-153c-42e1-89e4-0211bed14493.mp4', className: 'mt-md-5', style: { aspectRatio: '288 / 320' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/6f812149-153c-42e1-89e4-0211bed14493.mp4', style: { aspectRatio: '288 / 320' } }
    ]
];


const videosmobile = [
    [
        { url: workImg1, style: { aspectRatio: '180.5 / 118' } },
        { url: workImg2, style: { aspectRatio: '180.5 / 118' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/016621bd-95aa-4da4-85a8-1bbb3fcf34e8.mp4', style: { aspectRatio: '180.5 / 208' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/116c2d0d-713d-4296-8825-7cd56a05f3fe.mp4', className: 'mt-md-5', style: { aspectRatio: '288 / 118' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/562d737b-c149-4101-9eab-f6dde231b5e1.mp4', style: { aspectRatio: '180.5 / 208' } },
    ],
    [
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/8c5a19dd-6915-4ed1-bb09-bb8f3e9e0904.mp4', style: { aspectRatio: '196.5 / 208' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/b724573a-b17e-446f-aca8-ed525fc5a41f.mp4', style: { aspectRatio: '196.5 / 172' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/6f812149-153c-42e1-89e4-0211bed14493.mp4', className: 'mt-md-5', style: { aspectRatio: '196.5 / 172' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/6f812149-153c-42e1-89e4-0211bed14493.mp4', style: { aspectRatio: '196.5 / 118' } }


    ]
];

const getAspectClass = (style) => {
    const ratio = style?.aspectRatio || '';
    if (ratio.includes('185')) return 'aspect-185';
    if (ratio.includes('320')) return 'aspect-320';
    if (ratio.includes('415')) return 'aspect-415';
    if (ratio.includes('118')) return 'aspect-118';
    if (ratio.includes('208')) return 'aspect-208';
    if (ratio.includes('172')) return 'aspect-172';
    return '';
};

const VideoGallery = () => {
    const navigate = useNavigate();

    const goToGallery = () => {
        navigate('/gallery');
    };

    const handleVideoClick = (src, isVideo) => {
        const modal = new window.bootstrap.Modal(document.getElementById('videoModal'));
        const modalVideo = document.getElementById('modalVideo');
        const modalImage = document.getElementById('modalImage');

        if (isVideo) {
            modalImage.style.display = 'none';
            modalVideo.src = src;
            modalVideo.style.display = 'block';
            modalVideo.load();
        } else {
            modalVideo.style.display = 'none';
            modalImage.src = src;
            modalImage.style.display = 'block';
        }

        modal.show();
    };

    return (
        <section className="videos-section">
            <div className="container-xxl video-contianer">
                <div className="title-wrapper pb-3 pb-md-4">
                    <p className="light-text px-2 mb-2 heading-upper-text">See why our customers love us</p>
                    <h2 className="light-text d-flex align-items-center gap-4 mb-2 mb-xl-3 ">
                        OUR BEST WORK
                        <span className="title-hr"></span>
                    </h2>
                </div>
                <div className="row justify-content-center gy-5">
                    {videos.map((column, colIndex) => (
                        <div key={colIndex} className="col-6 col-md-3 d-none d-md-flex video-column">
                            {column.map((video, vidIndex) => {
                                const url = typeof video === 'string' ? video : video.url;
                                const className = typeof video === 'string' ? '' : video.className || '';
                                const style = typeof video === 'string' ? {} : video.style || {};
                                const isVideo = url.endsWith('.mp4');
                                const aspectClass = getAspectClass(style);

                                return isVideo ? (
                                    <video
                                        key={vidIndex}
                                        className={`video-thumb ${aspectClass} ${className}`}
                                        src={`${url}#t=0.5`}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        controls
                                        preload="none"
                                        onClick={() => handleVideoClick(url, true)}
                                    />
                                ) : (
                                    <img
                                        key={vidIndex}
                                        className={`video-thumb ${aspectClass} ${className}`}
                                        src={url}
                                        alt="Work Preview"
                                        onClick={() => handleVideoClick(url, false)}
                                    />
                                );
                            })}
                        </div>
                    ))}



                    {videosmobile.map((column, colIndex) => (
                        <div key={colIndex} className="col-6 d-flex pt-5 d-md-none video-column">
                            {column.map((video, vidIndex) => {
                                const url = typeof video === 'string' ? video : video.url;
                                const className = typeof video === 'string' ? '' : video.className || '';
                                const style = typeof video === 'string' ? {} : video.style || {};
                                const isVideo = url.endsWith('.mp4');
                                const aspectClass = getAspectClass(style);

                                return isVideo ? (
                                    <video
                                        key={vidIndex}
                                        className={`video-thumb ${aspectClass} ${className}`}
                                        src={`${url}#t=0.5`}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        controls
                                        preload="none"
                                        onClick={() => handleVideoClick(url, true)}
                                    />
                                ) : (
                                    <img
                                        key={vidIndex}
                                        className={`video-thumb ${aspectClass} ${className}`}
                                        src={url}
                                        alt="Work Preview"
                                        onClick={() => handleVideoClick(url, false)}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
                <div className="text-center mt-4 d-block d-md-none">
                    <button
                        id="show-more-btn2"
                        onClick={goToGallery}
                        className="text-light text-uppercase fs-5 bg-transparent border-0"
                    >
                        See More Photos
                        <span className="service-plus-icon ms-2 d-inline-flex">
                            <svg
                                width="17"
                                height="15"
                                viewBox="0 0 17 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.1667 1.1665L16 6.99984M16 6.99984L10.1667 12.8332M16 6.99984L1 6.99984"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="videoModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content bg-black">
                        <div className="modal-header border-0">
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body p-0 text-center">
                            <video
                                id="modalVideo"
                                className="w-100 rounded-bottom"
                                controls
                                autoPlay
                                muted
                                loop
                                style={{ display: 'none' }}
                            />
                            <img
                                id="modalImage"
                                className="w-100 rounded-bottom"
                                alt="Preview"
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoGallery;
