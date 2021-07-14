import React from 'react';

function Move(props) {
  return (
    <p className="Move">{props.move}</p>
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