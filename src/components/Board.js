import CustomBoard from './CustomBoard';
import React, { useState } from 'react';
import MoveHistory from './MoveHistory';
import '../styles/styles.css';
import king from '../resources/king.png';

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
  const [checkmate, setCheckmate] = useState(false);
  const [draw, setDraw] = useState(false);
  const [stalemate, setStalemate] = useState(false);

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
    if (chess.in_checkmate()) {
      setCheckmate(true);
    }
    if (chess.in_draw() || chess.in_threefold_repetition()) {
      setDraw(true);
    }
    if (chess.in_stalemate()) {
      setStalemate(true);
    }
  };

  const onDrop = (move) => {
    handleMove({
      from: move.sourceSquare,
      to: move.targetSquare,
      promotion: 'q',
    })
  };

  const newBoard = () => {
    chess.reset();
    setFen(chess.fen());
    setCheckmate(false);
    setDraw(false);
    setStalemate(false);
  }

  return <div className="sm:my-2 flex justify-center">
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
        <button onClick={newBoard} className="flex items-center m-4 mx-8 hover:text-gray-300">
          <img src={king} alt="New game" loading="lazy"></img>
          <span className="ml-1">New game</span>
        </button>
        <div className="absolute m-8 my-36">
          {checkmate && <p>Checkmate!</p>}
          {draw && <p>Draw!</p>}
          {stalemate && <p>Stalemate!</p>}
        </div>
        <h1 className= "lg:mx-8 text-xl mt-4 lg:mt-56 text-center lg:text-left">Moves:</h1>
        <div className="scrollbar lg:w-72 h-24 lg:h-64 overflow-y-auto">
          <MoveHistory moveHistory={chess.pgn().split(' ')} />
        </div>
      </div>
    </div>
  </div>;
}

export default Board;
