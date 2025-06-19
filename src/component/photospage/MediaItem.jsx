
import React from 'react';

const MediaItem = React.memo(({ src, type, alt }) => {
    if (type === 'video') {
        return (
            <video controls className="masonry-item" preload="metadata" autoPlay muted loop playsInline>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }
    return <img loading="lazy" src={src} alt={alt} className="masonry-item" />;
});

export default MediaItem;

