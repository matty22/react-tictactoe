import React from 'react';
import './ReplayButton.css';

const replayButton = (props) => {
  if ( props.shouldDisplay ) {
    return <button className="replayButton" onClick={ props.click }>REPLAY</button> 
  } else {
    return null;
  }
}

export default replayButton;