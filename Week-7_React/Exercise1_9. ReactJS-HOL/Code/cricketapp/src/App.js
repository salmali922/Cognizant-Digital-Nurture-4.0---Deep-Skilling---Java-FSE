// src/App.js
import React from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import OddPlayers from './OddPlayers';
import EvenPlayers from './EvenPlayers';
import ListofIndianPlayers from './ListofIndianPlayers';

const App = () => {
  const flag = false;

  const players = [ 
    { name: 'Virat', score: 90 },
    { name: 'Rohit', score: 45 },
    { name: 'Dhoni', score: 60 },
    { name: 'Hardik', score: 85 },
    { name: 'Bumrah', score: 55 },
    { name: 'KL Rahul', score: 75 },
    { name: 'Surya', score: 65 },
    { name: 'Gill', score: 88 },
    { name: 'Pant', score: 40 },
    { name: 'Shami', score: 60 },
    { name: 'Jadeja', score: 95 }
  ];

  const T20players = ['Virat', 'Rohit', 'Gill'];
  const RanjiTrophy = ['Pujara', 'Iyer', 'Vihari'];
  const IndianTeam = [...T20players, ...RanjiTrophy]; // Merge using ES6 spread
  const IndianPlayers = IndianTeam;

  if (flag === true) {
   return (
  <div className="app-container">
    <div className="section">
      <h1>List of Players</h1>
      <ListofPlayers players={players} />
    </div>
    <div className="section">
      <h1>List of Players having Scores Less than 70</h1>
      <Scorebelow70 players={players} />
    </div>
  </div>
);

  } else {
    return (
  <div className="app-container">
    <div className="section">
      <h1>Indian Team</h1>
      <h1>Odd Players</h1>
      <OddPlayers players={IndianTeam} />
      <hr />
      <h1>Even Players</h1>
      <EvenPlayers players={IndianTeam} />
    </div>
    <hr />
    <div className="section">
      <h1>List of Indian Players Merged:</h1>
      <ListofIndianPlayers IndianPlayers={IndianPlayers} />
    </div>
  </div>
);

  }
};

export default App;
