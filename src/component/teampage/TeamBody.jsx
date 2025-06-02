// TeamBody.jsx
import React from 'react';
import teamGroupPic from '../../assets/img/team-group-pic.webp';
import TeamCard from './TeamCard';


function TeamBody({ teamData }) {
    return (
        <section className='teampage-body-section' style={{ backgroundColor: "#fff" }}>
            <div className='container pt-3 px-0 d-flex justify-content-center align-items-center flex-column' style={{ maxWidth: "1280px" }}>
                <div className="team-group-pic-div mb-4">
                    <img src={teamGroupPic} alt="team group photo" className='team-group-pic img-fluid' />
                </div>
                <div className='team-card-container w-100'>
                    <ul className="team-card-list p-0 row g-4 mb-0" style={{ maxWidth: "1024px", listStyleType: "none" }}>
                        {teamData.map((item, index) => (
                            <TeamCard
                                key={index}
                                team_member_img={item.img}
                                team_member_name={item.name}
                                team_member_designation={item.role}
                                team_member_description={item.bio}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TeamBody;
