import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TeamHero from '../component/teampage/TeamHero';
import TeamBody from '../component/teampage/TeamBody';

function TeamPage() {
    const [heroData, setHeroData] = useState(null);
    const [groupImage, setGroupImage] = useState(null);
    const [teamData, setTeamData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [heroRes, groupImageRes, teamRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/teamshero'),
                    axios.get('http://localhost:5000/api/teamgroupimage'),
                    axios.get('http://localhost:5000/api/teammembers')
                ]);

                if (heroRes.data.length > 0) {
                    setHeroData(heroRes.data[0]);
                }

                setGroupImage(groupImageRes.data?.imagePath || null);
                setTeamData(teamRes.data || []);
            } catch (err) {
                console.error('Failed to fetch team page data:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? (
                <p className='text-center fs-5 my-4'>Loading...</p>
            ) : (
                <>
                    {heroData ? (
                        <TeamHero
                            heading={heroData.heading}
                            description={heroData.description}
                        />
                    ) : (
                        <p className='text-center fs-5 my-4'>
                            <span style={{ color: "red" }}>Error:</span> Failed to load team hero section.
                        </p>
                    )}

                    {(teamData.length > 0 || groupImage) ? (
                        <TeamBody teamData={teamData} groupImage={groupImage} />
                    ) : (
                        <p className='text-center fs-5 my-4'>
                            <span style={{ color: "red" }}>Error:</span> Failed to load team body section.
                        </p>
                    )}
                </>
            )}
        </div>
    );
}

export default TeamPage;
