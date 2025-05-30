import React from 'react';
import VideoHero from '../component/videopage/VideoHero';
import VideoCard from '../component/videopage/VideoCard';

const heroCardData = [
    {
        title: 'none',
        description:
            'none',
    }
    // ✅ Add more video objects here if needed
];

const videoCardData = [
    {
        title: 'The Origin of Green Hammer Concrete',
        description:
            'Green Hammer Concrete started with a passion for quality concrete work and a desire to move beyond side projects. Our name originates from an old \'94 Chevy pickup truck we affectionately called the Green Hammer. Over the years, we have grown from small side jobs to a full-fledged concrete service provider, equipped with over 30 years of experience.',


    },
    {
        title: 'No Project is Too Big or Small',
        description:
            'Join Adam as he takes you through one of our projects—a 70x70 addition at Grace Bible Church, featuring a 32-meter boom pump. Whether it\'s a simple sidewalk repair or an expansive addition, we have the skills and expertise to deliver.',
        url: 'https://landing-page-app-hero-images.s3.amazonaws.com/media/4b6671b4-95e9-4390-9b2e-1b29a2d62eca.mp4#t=0.5',
    },
    // ✅ Add more video objects here if needed
];

function VideoPage() {
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
                        {videoCardData.map((video, index) => {
                            const isLast = index === videoCardData.length - 1;
                            return (
                                <VideoCard
                                    key={index}
                                    video_title={video.title}
                                    video_para={video.description}
                                    video_url={video.url}
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
