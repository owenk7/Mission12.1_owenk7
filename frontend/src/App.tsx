import React, { useState, useEffect } from 'react';
import './App.css';

type TeamCardProps = {
  school: string;
  name: string;
  city: string;
  state: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ school, name, city, state }) => {
  return (
    <div className="team-card">
      <h3>{school}</h3>
      <p>Mascot: {name}</p>
      <p>Location: {city}, {state}</p>
    </div>
  );
};

type TeamListProps = {
  teams: Array<{
    school: string;
    name: string;
    city: string;
    state: string;
  }>;
};

const TeamList: React.FC<TeamListProps> = ({ teams }) => {
  return (
    <div className="team-list">
      {teams.map((team, index) => (
        <TeamCard
          key={index}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [teams, setTeams] = useState<Array<{ school: string; name: string; city: string; state: string }>>([]);

  useEffect(() => {
    fetch('/teams.json')
      .then((response) => response.json())
      .then((data) => {
        const sortedTeams = data.teams.sort((a: any, b: any) => a.school.localeCompare(b.school));
        setTeams(sortedTeams);
      });
  }, []);

  return (
    <div className="App">
      <header>
      <img src="logoMM.png" alt='logo' />
      <h1>Welcome to the March Madness Cheatsheet!</h1>
      <p>Get (almost) all the information you need to win your family march madness group and finally have something over your brother-in-law.</p>
      </header>
      <main>
        <TeamList teams={teams} />
      </main>
    </div>
  );
};

export default App;
