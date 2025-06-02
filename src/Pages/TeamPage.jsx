// TeamPage.jsx
import React from 'react';
import TeamHero from '../component/teampage/TeamHero';
import TeamBody from '../component/teampage/TeamBody';
import teamIMg1 from '../assets/img/team-1.webp';
import teamIMg2 from '../assets/img/team-2.webp';
import teamIMg3 from '../assets/img/team-3.webp';
import teamIMg4 from '../assets/img/team-4.webp';
import teamIMg5 from '../assets/img/team-5.webp';
import teamIMg6 from '../assets/img/team-6.webp';
import teamIMg7 from '../assets/img/team-7.webp';

const heroCardData = [
    {
        title: 'Meet Our Team',
        description:
            "At Green Hammer Concrete, we believe that our team's dedication and expertise are what set us apart. With over a century of combined experience in concrete construction and design, our family-owned business is proud to serve the Palm Bay community and surrounding areas. Meet the professionals who make it all happen.",
    }
];

const teamData = [
    {
        "img": teamIMg1,
        "name": "JEREMY",
        "role": "Crew Leader",
        "bio": "With years of experience in the concrete industry, Jeremy is a valuable asset to our team and ensures that every project is completed with precision and efficiency."
    },
    {
        "img": teamIMg2,
        "name": "JENNIFER “JEN”",
        "role": "Office Assistant",
        "bio": "Jen is one of our star employees here at Green Hammer Concrete, bringing with her a variety of experience in administrative roles."
    },
    {
        "img": teamIMg3,
        "name": "ADAM",
        "role": "Co-Founder and Field Manager",
        "bio": "Adam, co-founder and field manager of Green Hammer Concrete, brings a wealth of knowledge and experience from his extensive background in concrete and construction management."
    },
    {
        "img": teamIMg4,
        "name": "ASHLEY",
        "role": "Co-Founder and Project Manager",
        "bio": "Ashley is our dedicated Office Manager and co-founder. Ashley plays a crucial role in ensuring the smooth operation of our office and projects."
    },
    {
        "img": teamIMg5,
        "name": "JUSTIN 'BOSTON'",
        "role": "Foreman",
        "bio": "With nearly 10 years in the concrete industry, Boston is a true expert. From laying block to forming foundations and finishing floors, he has seen it all and gets the job done."
    },
    {
        "img": teamIMg6,
        "name": "RYAN",
        "role": "Lead Concrete Finisher",
        "bio": "When it comes to concrete finishing, having a skilled lead is crucial. At Green Hammer Concrete, our lead finisher Ryan brings years of expertise to every job."
    },

    {
        "img": teamIMg7,
        "name": "Billy",
        "role": "Field Estimator"
    }
];

function TeamPage() {
    return (
        <div>
            {heroCardData.map((hero, index) => (
                <TeamHero
                    key={index}
                    hero_title={hero.title}
                    hero_description={hero.description}
                />
            ))}
            <TeamBody teamData={teamData} />
        </div>
    );
}

export default TeamPage;
