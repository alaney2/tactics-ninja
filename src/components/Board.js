import CustomBoard from './CustomBoard';
import React, { useState } from 'react';
import MoveHistory from './MoveHistory';
import './styles.css';

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
  const [chess] = useState(new Chess('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'));
  const [fen, setFen] = useState(chess.fen());
  const [bestMoves, setBestMoves] = useState(' ');
  const [, setCp] = useState(0);

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

  // const clearBoard = () => {
  //   setChess(chess => {
  //     chess.clear();
  //     return chess;
  //   });
  //   setFen('8/8/8/8/8/8/8/8 w - - 0 1');
  // }

  // const newBoard = () => {
  //   setChess(chess => {
  //     chess.reset();
  //     return chess;
  //   });
  //   setFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  // }

  const margin = calculateBoardWidth() / 8;
  
  const calculateMarginStyle = () => {
    if (width >= 1024) {
      return marginStyle;
    }
    return {};
  }

  const marginStyle = {
    marginTop: margin * 2, 
  }

  const calculateHeightStyle = () => {
    if (width >= 1024) {
      if (props.sparePieces) {
        return {
          marginTop: heightStyle.marginTop + calculateBoardWidth() / 8,
          height: heightStyle.height + calculateBoardWidth() / 8,
        }
      }
      return heightStyle;
    }
    return {};
  }

  const heightStyle = {
    marginTop: calculateBoardWidth() / 2,
    height: calculateBoardWidth() / 2,
  }

  const handleClick = async () => {
    const url = 'https://lichess.org/api/cloud-eval';
    const response = await fetch(`${url}?fen=${fen}`);
    const data = await response.json();
    const position = data.pvs[0];
    const cp = position.cp;
    setBestMoves(position.moves);
    setCp(cp);
    console.log(position);
  }

  return <div className="my-8 sm:my-0 lg:flex justify-center">
    <div className="flex justify-center">
      <CustomBoard
        width={calculateBoardWidth()}
        position={fen}
        onDrop={props.sparePieces ? undefined : onDrop}
        sparePieces={props.sparePieces}
        dropOffBoard={props.dropOffBoard}
      />
    </div>

    {props.moves && width > 1024 && <div className="lg:w-3/12 2xl:w-2/12 lg:mx-4">
      <p className="absolute w-full lg:w-2/12 p-3 md:p-2 m-4 text-center lg:text-left"> Warm up your chess skills against this beginner level computer.</p>
      <div className="scrollbar overflow-auto" style={calculateHeightStyle()}>
        <h1 className="px-2 mx-4 text-2xl">Moves</h1>
        <MoveHistory moveHistory={chess.pgn().split(' ')} />
      </div>
    </div>}

    {props.sparePieces && <div className="text-center lg:text-left lg:w-3/12 2xl:w-2/12 lg:mx-4">
        <button onClick={handleClick} type="submit" className="absolute lg:w-2/12 p-2 m-8 rounded-lg bg-pink-400 focus:bg-pink-500 focus:ring-2 focus:outline-none focus:ring-pink-700" style={calculateMarginStyle()}>Calculate best move</button>
        <div className="scrollbar overflow-auto" style={calculateHeightStyle()}>
        <h1 className="px-2 mx-4 text-2xl">Solution:</h1>
        <MoveHistory moveHistory={bestMoves.split(' ')} />
      </div>
    </div>}
  </div>;
}

export default Board;
