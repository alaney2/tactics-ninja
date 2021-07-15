import CustomBoard from './CustomBoard';
import Chessboard from 'chessboardjsx';
import React, { useState } from 'react';
const Chess = require("chess.js");

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function Board(props) {
  const [chess] = useState(
    new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  );

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

  return <div className="flex w-screen justify-center items-center">
    <CustomBoard
      width={getWindowDimensions().width > 648 ? getWindowDimensions().width * 2 / 5 : getWindowDimensions().width}
      position={fen}
      onDrop={props.freePlay ? undefined : onDrop}
      sparePieces={props.sparePieces}
    />
  </div>;
}

export default Board
