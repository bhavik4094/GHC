import React, { useState, useRef } from 'react';
import Masonry from 'react-masonry-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const videos = [
    { url: "https://landing-page-app-hero-images.s3.amazonaws.com/media/116c2d0d-713d-4296-8825-7cd56a05f3fe.mp4" },
    { url: "https://landing-page-app-hero-images.s3.amazonaws.com/media/562d737b-c149-4101-9eab-f6dde231b5e1.mp4" },
    { url: "https://landing-page-app-hero-images.s3.amazonaws.com/media/8c5a19dd-6915-4ed1-bb09-bb8f3e9e0904.mp4" },
    { url: "https://landing-page-app-hero-images.s3.amazonaws.com/media/b724573a-b17e-446f-aca8-ed525fc5a41f.mp4" },
    { url: "https://landing-page-app-hero-images.s3.amazonaws.com/media/6f812149-153c-42e1-89e4-0211bed14493.mp4" },
    { url: "https://landing-page-app-hero-images.s3.amazonaws.com/media/fc214d01-ff14-47ca-9956-cd11c067afce.mp4" },
    { url: "https://landing-page-app-hero-images.s3.amazonaws.com/media/e05d9ee8-d779-4711-b8c2-0100e379e363.mp4" },
    { url: "https://landing-page-app-hero-images.s3.amazonaws.com/media/ea91bb4c-1645-492a-b6b0-e6f684ed534d.mp4" },
    { url: "https://landing-page-app-hero-images.s3.amazonaws.com/media/7f8c4169-1dff-4a91-b470-8ea81e953f85.mp4" }
];

const VideoGalleryMasonry = () => {
    const [modalSrc, setModalSrc] = useState('');
    const modalRef = useRef(null);

    const openModal = (src) => {
        setModalSrc(`${src}#t=0.5`);
        const modal = new window.bootstrap.Modal(modalRef.current);
        modal.show();
    };

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <section className="videos-section bg-danger-subtle py-5">
            <div className="container">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {videos.map((video, i) => (
                        <div key={i} className="mb-4">
                            <video
                                className="w-100 rounded shadow"
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                preload="none"
                                onClick={() => openModal(video.url)}
                            >
                                <source src={`${video.url}#t=0.5`} />
                            </video>
                        </div>
                    ))}
                </Masonry>
            </div>

            {/* Modal */}
            <div className="modal fade" id="videoModal" tabIndex="-1" aria-hidden="true" ref={modalRef}>
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
                        <div className="modal-body p-0">
                            <video
                                className="w-100 rounded-bottom"
                                src={modalSrc}
                                controls
                                autoPlay
                                muted
                                loop
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoGalleryMasonry;
