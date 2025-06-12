import React, { useEffect, useState } from 'react';
import axios from "axios";

// const VideoHero = ({ hero_title, hero_description }) => {
const VideoHero = () => {
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/videos')
            .then(res => {
                if (res.data.length > 0) {
                    setVideoData(res.data[0]);
                }
            });
    }, []);

    return (
        <section className="video-banner-section">
            {/* Background Image */}
            <img
                src="https://products.codersh.com/greenhammerconcrete/wp-content/uploads/2025/05/hero-bg.webp"
                alt="Concrete background"
                className="hero-background-img"
            />

            {/* Content Overlay */}
            <div className="video-hero-overlay text-center">
                <div className="container d-flex justify-content-center align-items-center flex-column">
                    <h2 className="text-uppercase mb-0" style={{ maxWidth: "576px" }}>
                        {/* {hero_title} */}

                        {videoData?.title || "title Not Found"}

                    </h2>
                    <span className="hero-description" style={{ maxWidth: "576px" }}>
                        {/* {hero_description} */}
                        {videoData?.description || "description Not Found"}
                    </span>


                </div>
            </div>

            {/* Bottom Overlay Vector Image */}
            <img
                src="https://products.codersh.com/greenhammerconcrete/wp-content/uploads/2025/05/vector-light2.svg"
                alt="Decorative vector"
                className="hero-bottom-vector"
            />
        </section>
    );
};

export default VideoHero;