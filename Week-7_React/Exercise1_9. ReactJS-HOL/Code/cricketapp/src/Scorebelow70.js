// src/Scorebelow70.js
import React from 'react';

const Scorebelow70 = ({ players }) => {
  const filtered = players.filter(player => player.score < 70); // ES6 arrow
  return (
    <ul>
      {filtered.map((player, index) => (
        <li key={index}>
          {player.name} - {player.score}
        </li>
      ))}
    </ul>
  );
};

export default Scorebelow70;

