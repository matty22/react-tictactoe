import React from 'react';
import './StatusDisplay.css';

const statusDisplay = (props) => (
  <p className="statusDisplay">{ props.shouldDisplay ? props.shouldDisplay + ' wins!' : null }</p>
);

export default statusDisplay;