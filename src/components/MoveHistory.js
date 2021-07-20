import React from 'react';
import MoveList from './MoveList';

function MoveHistory(props) {
  return (
    <div className="h-28">
      <MoveList moves={props.moveHistory}/>
    </div>
  )
}

export default MoveHistory;