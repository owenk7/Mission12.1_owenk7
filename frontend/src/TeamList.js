import React from 'react';
import TeamCard from './TeamCard';

const TeamList = ({ teams }) => {
  return (
    <div className="team-list">
      {teams.map((team, index) => (
        <TeamCard
          key={index}
          schoolName={team.schoolName}
          mascotName={team.mascotName}
          location={team.location}
        />
      ))}
    </div>
  );
};

export default TeamList;
