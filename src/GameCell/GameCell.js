import React from 'react';
import './GameCell.css';

const gameCell = (props) => {

  let computerCells = props.computerData;

  return (
    <table>
      <tbody>
        <tr>
          <td className={ computerCells[0] && props.token === 'O' ? "gameCell computerOCell" : 
                          computerCells[0] && props.token === 'X' ? "gameCell computerXCell" : "gameCell" } 
              id="cell0" 
              onClick={ props.claim }></td>
           <td className={ computerCells[1] && props.token === 'O' ? "gameCell computerOCell" : 
                           computerCells[1] && props.token === 'X' ? "gameCell computerXCell" : "gameCell" } 
              id="cell1" 
              onClick={ props.claim }></td>
          <td className={ computerCells[2] && props.token === 'O' ? "gameCell computerOCell" : 
                          computerCells[2] && props.token === 'X' ? "gameCell computerXCell" : "gameCell" } 
              id="cell2" 
              onClick={ props.claim }></td>
        </tr>
        <tr>
          <td className={ computerCells[3] && props.token === 'O' ? "gameCell computerOCell" : 
                          computerCells[3] && props.token === 'X' ? "gameCell computerXCell" : "gameCell" } 
              id="cell3" 
              onClick={ props.claim }></td> 
          <td className={ computerCells[4] && props.token === 'O' ? "gameCell computerOCell" : 
                          computerCells[4] && props.token === 'X' ? "gameCell computerXCell" : "gameCell" } 
              id="cell4" 
              onClick={ props.claim }></td> 
          <td className={ computerCells[5] && props.token === 'O' ? "gameCell computerOCell" : 
                          computerCells[5] && props.token === 'X' ? "gameCell computerXCell" : "gameCell" } 
              id="cell5" 
              onClick={ props.claim }></td>
        </tr>
        <tr>
          <td className={ computerCells[6] && props.token === 'O' ? "gameCell computerOCell" : 
                          computerCells[6] && props.token === 'X' ? "gameCell computerXCell" : "gameCell" } 
              id="cell6" 
              onClick={ props.claim }></td>
          <td className={ computerCells[7] && props.token === 'O' ? "gameCell computerOCell" : 
                          computerCells[7] && props.token === 'X' ? "gameCell computerXCell" : "gameCell" } 
              id="cell7" 
              onClick={ props.claim }></td>
          <td className={ computerCells[8] && props.token === 'O' ? "gameCell computerOCell" : 
                          computerCells[8] && props.token === 'X' ? "gameCell computerXCell" : "gameCell" } 
              id="cell8" 
              onClick={ props.claim }></td>
        </tr>
      </tbody>
    </table>
  );
}
  

export default gameCell;