import React, { Component } from 'react';
import './App.css';
import PlayerChoice from './PlayerChoice/PlayerChoice';
import GameCell from './GameCell/GameCell';
import ReplayButton from './ReplayButton/ReplayButton';
import StatusDisplay from './StatusDisplay/StatusDisplay';

class App extends Component {

  constructor() {
    super();
    this.state = {
      playerToken: null,
      computerToken: null,
      playerTurn: false,
      winnerDeclared: false,
      winner: '',
      availableCells: ['cell0', 'cell1', 'cell2', 'cell3', 'cell4', 'cell5', 'cell6', 'cell7', 'cell8'],
      playerCells: [],
      computerCells: ['', '', '', '', '', '', '', '', ''],
      winMatrix : [
        ['cell0', 'cell1', 'cell2'],
        ['cell3', 'cell4', 'cell5'],
        ['cell6', 'cell7', 'cell8'],
        ['cell0', 'cell3', 'cell6'],
        ['cell1', 'cell4', 'cell7'],
        ['cell2', 'cell5', 'cell8'],
        ['cell0', 'cell4', 'cell8'],
        ['cell2', 'cell4', 'cell6'],
      ]
    }
  }

  // Start with setting player token

  setPlayerToken = (event) => {
    let playerToken = event.target.firstChild.data;
    if (playerToken === 'X') {
      let computerToken = 'O';
      this.setState({ playerToken: playerToken, computerToken: computerToken, playerTurn: true });
    } else {
      let computerToken = 'X';
      this.setState({ playerToken: playerToken, computerToken: computerToken, playerTurn: false});
      this.computerChooses();
    }
  }

  claimCell = (event) => {
    if (this.state.playerTurn && this.state.availableCells[this.state.availableCells.indexOf(event.target.id)] !== null) {
      let playerCells = this.state.playerCells;
      let availableCells = this.state.availableCells;
      playerCells.push(event.target.id);
      // availableCells.splice(availableCells.indexOf(event.target.id), 1);
      availableCells[availableCells.indexOf(event.target.id)] = null;
      this.setState({ playerCells: playerCells, availableCells: availableCells, playerTurn: false });
      event.target.innerHTML = this.state.playerToken;
      if(!this.checkForWin(this.state.playerCells, 'Player')) {
        this.computerChooses();
      }      
    }
  }

  // Computer chooses it's cell then turns control back over to player
  computerChooses = () => {
    let computerCells = this.state.computerCells;
    let availableCells = this.state.availableCells;
    let computerChose = false;
    while(!computerChose) {
      let potentialCell = Math.floor(Math.random() * (8 - 0 + 1) + 0);
      if (availableCells[potentialCell]) {
        availableCells[potentialCell] = null;
        computerCells[potentialCell] = 'cell' + potentialCell;
        this.setState({ playerTurn: true, availableCells: availableCells, computerCells: computerCells })
        computerChose = true;
      }
    }
    this.checkForWin(this.state.computerCells, 'Computer');
  }

  // Some inspiration taken from KPkiller1671 at https://www.youtube.com/watch?v=aWhb9dr1jNw
  checkForWin = (ownedTiles, player) => {
    for (let i = 0; i < 8; i++) {
      var winStatus = true;
      for (let j = 0; j < 3; j++) {
        if (ownedTiles.indexOf(this.state.winMatrix[i][j]) === -1) {
          winStatus = false;
        }
      }
      if (winStatus === true) {
        this.setState({ winnerDeclared: winStatus, winner: player })
        return winStatus;
      }
    }
  }

  resetGame = () => {
    let playerToken = null;
    let playerTurn = false;
    let winnerDeclared = false;
    let winner = '';
    let availableCells = ['cell0', 'cell1', 'cell2', 'cell3', 'cell4', 'cell5', 'cell6', 'cell7', 'cell8'];
    let playerCells = [];
    let computerCells = [];
    this.setState({ playerToken: playerToken,
                    playerTurn: playerTurn,
                    winnerDeclared: winnerDeclared,
                    winner: winner,
                    availableCells: availableCells,
                    playerCells: playerCells,
                    computerCells: computerCells
                  });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>React TicTacToe</h1>
        </header>
        <main>
          <PlayerChoice playerHasChosen={ this.state.playerToken } chose={ this.setPlayerToken } />
          { this.state.playerToken ? 
            <GameCell claim={ this.claimCell } 
                      computerData={ this.state.computerCells }
                      token={ this.state.computerToken } /> : null }
          <ReplayButton shouldDisplay={ this.state.winnerDeclared } click={ this.resetGame } />
          <StatusDisplay shouldDisplay={ this.state.winnerDeclared ? this.state.winner : null } />
        </main>
      </div>
    );
  }
}

export default App;
