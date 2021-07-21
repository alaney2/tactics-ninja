import React from 'react';

function Move(props) {
  return (
    <p className="my-1 text-left lg:text-center">{props.move}</p>
  )
}

function MoveList(props) {
  const moves = props.moves;
  return (
    <div className="grid grid-cols-3 py-1">
      {
        moves.map(move => <Move move={move} key={move}/>)
      }
    </div>
  );
}

export default MoveList;