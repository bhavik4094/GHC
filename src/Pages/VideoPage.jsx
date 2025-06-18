import React, { useEffect, useState } from 'react';
import axios from "axios";
import VideoHero from '../component/videopage/VideoHero';
import VideoCard from '../component/videopage/VideoCard';

const heroCardData = [
    {
        title: 'none',
        description: 'none',
    }
    // ✅ Add more video objects here if needed
];

function VideoPage() {
    const [videoInfo, setVideoInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/videosectioninfo')
            .then(res => {
                setVideoInfo(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching video data:', err);
                setError('Failed to load videos');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div>
                {heroCardData.map((hero, index) => (
                    <VideoHero
                        key={index}
                        hero_title={hero.title}
                        hero_description={hero.description}
                    />
                ))}
                <section className="videos-with-text" style={{ background: '#fff' }}>
                    <div className="container videoCards-Container">
                        <p className='text-dark fw-blod fs-4 text-center'>Loading videos...</p>
                    </div>
                </section>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                {heroCardData.map((hero, index) => (
                    <VideoHero
                        key={index}
                        hero_title={hero.title}
                        hero_description={hero.description}
                    />
                ))}
                <section className="videos-with-text" style={{ background: '#fff' }}>
                    <div className="container videoCards-Container">
                        <p className='text-dark fw-blod fs-4 text-center'> Error: {error}</p>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div>
            {heroCardData.map((hero, index) => (
                <VideoHero
                    key={index}
                    hero_title={hero.title}
                    hero_description={hero.description}
                />
            ))}

            <section className="videos-with-text" style={{ background: '#fff' }}>
                <div className="container videoCards-Container">
                    <ul className="video-list list-unstyled">
                        {videoInfo.map((video, index) => {
                            const isLast = index === videoInfo.length - 1;
                            return (
                                <VideoCard
                                    key={video._id || index}
                                    video_title={video.heading || "Heading Not Found"}
                                    video_para={video.description || "Description Not Found"}
                                    video_url={video.videoUrl || "Video URL Not Found"}
                                    isLast={isLast}
                                />
                            );
                        })}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default VideoPage;