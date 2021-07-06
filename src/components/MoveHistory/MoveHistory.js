import React from 'react';

function MoveHistory(props) {
  return (
    <div className="moves">
      <h1>Moves: </h1>
      <p>{props.moves}</p>
    </div>
  )
}

export default MoveHistory;