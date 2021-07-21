import React from 'react';
import MoveList from './MoveList';

function MoveHistory(props) {
  return (
    <div className="">
      <MoveList moves={props.moveHistory}/>
    </div>
  )
}

export default MoveHistory;