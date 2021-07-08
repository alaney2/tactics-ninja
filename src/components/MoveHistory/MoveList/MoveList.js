import React from 'react';
import './MoveList.css';

function Move(props) {
  return (
    <p>{props.move}</p>
  )
}

function MoveList(props) {
  const moves = props.moves;
  return (
    <div className="MoveList">
      {
        moves.map(move => <Move move={move} />)
      }
    </div>
  );
}

export default MoveList;