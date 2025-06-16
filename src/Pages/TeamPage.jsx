import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TeamHero from '../component/teampage/TeamHero';
import TeamBody from '../component/teampage/TeamBody';

function TeamPage() {

    const [heroData, setHeroData] = useState(null);
    const [groupImage, setGroupImage] = useState(null);
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        // Fetch team hero data
        axios.get('http://localhost:5000/api/teamshero')
            .then((res) => {
                if (res.data.length > 0) {
                    setHeroData(res.data[0]);
                }
            })
            .catch((err) => console.error('Failed to fetch teams hero data:', err));

        // Fetch team group image
        axios.get('http://localhost:5000/api/teamgroupimage')
            .then(res => {
                setGroupImage(res.data?.imagePath);
            })
            .catch(err => console.log('Group image fetch error', err));

        // Fetch team member data
        axios.get('http://localhost:5000/api/teammembers')
            .then((res) => {
                setTeamData(res.data);
            })
            .catch((err) => console.error('Failed to fetch team members:', err));
    }, []);

    return (
        <div>
            {heroData ? (
                <TeamHero
                    heading={heroData.heading}
                    description={heroData.description}
                />
            ) : (
                <p>Data Not Found</p>
            )}

            <TeamBody teamData={teamData} groupImage={groupImage} />

        </div>
    );
}

export default TeamPage;
