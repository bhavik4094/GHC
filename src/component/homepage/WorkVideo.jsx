import React from 'react';
import workImg1 from "../../assets/img/work-img1.webp";
import workImg2 from "../../assets/img/work-img-2.webp";

const videos = [
    // Column 1
    [
        { url: workImg1, style: { aspectRatio: '288 / 185' } },
        { url: workImg2, style: { aspectRatio: '288 / 185' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/8c5a19dd-6915-4ed1-bb09-bb8f3e9e0904.mp4', style: { aspectRatio: '288 / 185' } }
    ],
    // Column 2
    [
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/b724573a-b17e-446f-aca8-ed525fc5a41f.mp4', className: 'mt-lg-5', style: { aspectRatio: '288 / 185' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/6f812149-153c-42e1-89e4-0211bed14493.mp4', style: { aspectRatio: '288 / 415' } }
    ],
    // Column 3
    [
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/fc214d01-ff14-47ca-9956-cd11c067afce.mp4', style: { aspectRatio: '288 / 415' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/e05d9ee8-d779-4711-b8c2-0100e379e363.mp4', style: { aspectRatio: '288 / 320' } }
    ],
    // Column 4
    [
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/ea91bb4c-1645-492a-b6b0-e6f684ed534d.mp4', className: 'mt-lg-5', style: { aspectRatio: '288 / 320' } },
        { url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/7f8c4169-1dff-4a91-b470-8ea81e953f85.mp4', style: { aspectRatio: '288 / 320' } }
    ]
];

const VideoGallery = () => {
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
                    <p className="light-text px-2 mb-2">See why our customers love us</p>
                    <h2 className="light-text d-flex align-items-center gap-4 mb-2 mb-xl-3 ">
                        OUR BEST WORK
                        <span className="title-hr"></span>
                    </h2>
                </div>
                <div className="row justify-content-center gy-5">
                    {videos.map((column, colIndex) => (
                        <div key={colIndex} className="col-6 col-md-3 video-column">
                            {column.map((video, vidIndex) => {
                                const url = typeof video === 'string' ? video : video.url;
                                const className = typeof video === 'string' ? '' : video.className || '';
                                const style = typeof video === 'string' ? {} : video.style || {};
                                const isVideo = url.endsWith('.mp4');

                                return isVideo ? (
                                    <video
                                        key={vidIndex}
                                        className={`video-thumb ${className}`}
                                        style={style}
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
                                        className={`video-thumb ${className}`}
                                        style={style}
                                        src={url}
                                        alt="Work Preview"
                                        onClick={() => handleVideoClick(url, false)}
                                    />
                                );
                            })}
                        </div>
                    ))}
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
