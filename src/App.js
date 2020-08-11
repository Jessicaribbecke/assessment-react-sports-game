import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./components/Game"
import raccoonpic from "./components/assets/images/raccoon.png"
import squirrelpic from "./components/assets/images/squirrel.png"
import bunnypic from "./components/assets/images/bunny.png"
import houndpic from "./components/assets/images/hound.png"

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: raccoonpic
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirrelpic
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunnypic
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: houndpic
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
