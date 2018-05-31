import React from 'react';
import './PlayerChoice.css';

const playerChoice = (props) => (
  <section className="playerChoice">
    <p>Choose your token</p>
    <button id={ props.playerHasChosen ? 'tokenChosen' : null } onClick={ props.chose } disabled={ props.playerHasChosen }>X</button>
    <button id={ props.playerHasChosen ? 'tokenChosen' : null } onClick={ props.chose } disabled={ props.playerHasChosen }>O</button>
  </section>
);

export default playerChoice;