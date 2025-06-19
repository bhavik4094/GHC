import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import MediaItem from './MediaItem';


const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 2,
};

function PhotosBody() {

    const [mediaItems, setMediaItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/media")
            .then((res) => res.json())
            .then(setMediaItems);
    }, []);

    return (
        <section className='photos-body-section'>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-column"
            >
                {mediaItems.map((item, index) => (
                    <MediaItem key={index} src={`http://localhost:5000/uploads/${item.filename}`} type={item.type} alt={item.title} />
                ))}
            </Masonry>
        </section>
    )
}

export default PhotosBody