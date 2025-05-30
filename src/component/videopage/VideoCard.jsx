import React from 'react';

const VideoCard = ({ video_title, video_para, video_url, isLast }) => {
    return (
        <li className='video-card text-dark list-unstyled'>
            <p className="light-text mb-2 heading-upper-text text-capitalize video-card-heading-text">
                {video_title}
            </p>
            <p className='about-text mb-4 px-0'>
                {video_para}
            </p>
            <video controls className="mx-auto d-block videoCard-video">
                <source src={video_url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Spacing added if not the last card */}
            {!isLast && <div className="video-card-spacing" />}
        </li>
    );
};

export default VideoCard;
