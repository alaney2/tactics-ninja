import React from 'react';
import './MoveHistory.css';

function MoveHistory(props) {
  return (
    <div className="moves">
      <h2>Moves: </h2>
      <p>{props.moveHistory}</p>
    </div>
  )
}

export default MoveHistory;