// TeamCard.jsx
import React from 'react';

const TeamCard = ({ team_member_img, team_member_name, team_member_designation, team_member_description }) => {
    return (
        <li className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center align-items-center flex-column text-center team-member">
            <img
                src={team_member_img}
                alt={team_member_name}
                className="img-fluid  mb-3"
                width="225"
                height="225"
                loading='lazy'
                style={{
                    borderRadius: "50%", objectFit: "cover", height: "225px", width: "225px", objectPosition: "center"
                }}
            />
            <h3 className='team-card-name '>{team_member_name}</h3>
            <p className="team-card-designation">{team_member_designation}</p>
            <p className="team-card-bio">{team_member_description}</p>
        </li>
    );
};

export default TeamCard;
