import React from "react";

type ProfileCardProps = {
    name: string;
    currentRole: string;
    shortBio: string;
    skills: string[];
};

const ProfileCard = ({name, currentRole, shortBio, skills}: ProfileCardProps) => {
    return (
        <div>
            <h1>{name}</h1>
            <h3>{currentRole}</h3>
            <p>{shortBio}</p>
            <h5>{skills}</h5>
        </div>
    );
};

export default ProfileCard;