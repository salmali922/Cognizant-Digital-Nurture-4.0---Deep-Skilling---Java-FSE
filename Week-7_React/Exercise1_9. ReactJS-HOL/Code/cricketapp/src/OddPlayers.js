// src/OddPlayers.js
import React from 'react';

const OddPlayers = (team) => {
  const { players } = team;
  const odd = players.filter((_, index) => index % 2 !== 0);
  return (
    <ul>
      {odd.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  );
};

export default OddPlayers;
