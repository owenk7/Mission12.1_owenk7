import React from 'react';

const TeamCard = ({ school, name, city, state }) => {
  return (
    <div className="team-card">
      <h3>{school}</h3>
      <p>Mascot: {name}</p>
      <p>Location: {city}, {state}</p>
    </div>
  );
};

export default TeamCard;
