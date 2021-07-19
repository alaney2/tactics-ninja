import CustomBoard from './CustomBoard';
import React, { useState } from 'react';
import MoveHistory from './MoveHistory';
import '../styles/styles.css';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import ReactTooltip from 'react-tooltip';

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

function AnalysisBoard(props) {
  // Start position: rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
  const [chess] = useState(new Chess());
  const [fen, setFen] = useState('start');
  const [bestMoves, setBestMoves] = useState(' ');
  const [, setCp] = useState(0);
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
  }

  const onDrop = (move) => {
   chess.put( {type: 'p', color: 'w' }, 'e4');
   setFen(chess.fen());
  };

  const margin = calculateBoardWidth() / 8;
  
  const calculateFenMargin = () => {
    if (width >= 1024) {
      return {
        marginTop: margin * 1.2
      };
    }
    return {};
  }

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
    setFen(value);
    chess.load(value);
    console.log(value);
    const url = 'https://lichess.org/api/cloud-eval';
    try {  
      const response = await fetch(`${url}?fen=${fen}`);
      const data = await response.json();
      const position = data.pvs[0];
      const cp = position.cp;
      setBestMoves(position.moves);
      setCp(cp);
      console.log(position);
    } catch (e) {
      console.log(e);
      setFen('start');
    }
  }

  return <div className="my-8 sm:my-0 lg:flex justify-center">
    <div className="flex justify-center">
      <CustomBoard
        width={calculateBoardWidth()}
        position={fen}
        onDrop={onDrop}
        sparePieces={props.sparePieces}
        dropOffBoard={props.dropOffBoard}
      />
    </div>

    <div className="text-center lg:text-left lg:w-3/12 2xl:w-2/12 lg:mx-4 flex-col lg:flex-row">
      <form className="lg:absolute lg:w-2/12 p-2 m-2 lg:m-6 flex justify-center lg:justify-left" style={calculateFenMargin()}>
        <label for="fen" className="p-1">FEN: </label>
        <input type="text" name="fen" value={value} onChange={handleInputChange} className="p-1 mx-2 outline-none bg-gray-300 rounded-lg text-gray-700" />
        <QuestionMarkCircleIcon data-for="fen" data-tip="" className="w-8"/>
        <ReactTooltip
          getContent={(dataTip) => 
            <div>
              <p>FEN, i.e., Forsythe Edwards Notation, is used for describing a particular board position.</p>
              <p>E.g., the starting position is 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'</p>
            </div>
          }
          id="fen" 
          effect="solid" 
          type="dark" 
          place="top" 
        />
      </form>

      <button onClick={handleClick} type="submit" className="lg:absolute lg:w-2/12 p-2 lg:m-6 rounded-lg bg-pink-400 focus:bg-pink-500 focus:ring-2 focus:outline-none focus:ring-pink-700" style={calculateMarginStyle()}> Calculate best move </button>

      <div className="scrollbar overflow-auto" style={calculateHeightStyle()}>
        <h1 className="px-2 m-4 lg:mx-4 text-2xl">Solution:</h1>
        <MoveHistory moveHistory={bestMoves.split(' ')} />
      </div>
    </div>
  </div>;
}

export default AnalysisBoard;
