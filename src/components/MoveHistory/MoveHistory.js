import React from 'react';
import './MoveHistory.css';
import MoveList from './MoveList/MoveList';

function MoveHistory(props) {
  return (
    <div className="moves">
      <MoveList moves={props.moveHistory}/>
    </div>
  )
}

export default MoveHistory;