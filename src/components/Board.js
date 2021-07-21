import CustomBoard from './CustomBoard';
import React, { useState } from 'react';
import MoveHistory from './MoveHistory';
import '../styles/styles.css';

const Chess = require("chess.js");

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const width = getWindowDimensions().width;
const height = getWindowDimensions().height;

export function calculateBoardWidth() {
  const smallBreakpoint = 640;
  if (width > height) {
    if (height <= smallBreakpoint) {
      return height / 2;
    }
    return height * 3 / 5;
  } else {
    if (width <= smallBreakpoint) {
      return width;
    }
    return width * 3 / 5;
  }
}

function Board(props) {
  const [chess, ] = useState(new Chess());
  const [fen, setFen] = useState(chess.fen());

  const handleMove = (move) => {
    if (chess.move(move)) {
      setTimeout(() => {
        const moves = chess.moves();

        if (moves.length > 0) {
          const computerMove = moves[Math.floor(Math.random() * moves.length)];
          chess.move(computerMove);
          setFen(chess.fen());
        }
      }, 300);

      setFen(chess.fen());
    }
  };

  const onDrop = (move) => {
    handleMove({
      from: move.sourceSquare,
      to: move.targetSquare,
      promotion: 'q',
    })
  };

  return <div className="sm:my-2 flex justify-center overflow-x-hidden">
    <div className="lg:flex justify-center">
      <div className="flex justify-center">
        <CustomBoard
          width={calculateBoardWidth()}
          position={fen}
          onDrop={props.sparePieces ? onDrop : onDrop}
          sparePieces={props.sparePieces}
          dropOffBoard={props.dropOffBoard}
        />
      </div>

      <div className="flex-col items-center justify-center">
        <p className="text-sm sm:text-lg py-2 lg:w-40 text-center lg:text-left lg:mt-4 lg:mx-8">Drag and drop!</p>

        <h1 className= "lg:mx-8 text-xl mt-4 lg:mt-64 text-center lg:text-left">Moves:</h1>
        <div className="scrollbar lg:w-72 h-24 lg:h-64 overflow-y-auto">
          <MoveHistory moveHistory={chess.pgn().split(' ')} />
        </div>
      </div>
    </div>
  </div>;
}

export default Board;
