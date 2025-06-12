// TeamPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TeamHero from '../component/teampage/TeamHero';
import TeamBody from '../component/teampage/TeamBody';






function TeamPage() {

    const [heroData, setHeroData] = useState(null);
    const [teamData, setTeamData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/api/teamshero')
            .then((res) => {
                if (res.data.length > 0) {
                    setHeroData(res.data[0]); // Only using the first hero entry
                }
            })
            .catch((err) => {
                console.error('Failed to fetch teams hero data:', err);
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/api/teamsbody')
            .then((res) => res.json())
            .then((data) => setTeamData(data))
            .catch((err) => console.error('Error fetching team body data:', err));
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

            {teamData.map((member, index) => (
                <TeamBody
                    key={index}
                    team_member_img={member.imageUrl}
                    team_member_name={member.name}
                    team_member_designation={member.role}
                    team_member_description={member.bio}
                />
            ))}
        </div>
    );
}

export default TeamPage;
