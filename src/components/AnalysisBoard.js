import CustomBoard from './CustomBoard';
import React, { useState } from 'react';
import MoveHistory from './MoveHistory';
import '../styles/styles.css';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import ReactTooltip from 'react-tooltip';
import Switch from "react-switch";

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
  const [fen, setFen] = useState(chess.fen());
  const [bestMoves, setBestMoves] = useState('');
  const [, setCp] = useState(0);
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [turn, setTurn] = useState('w');
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  }

  const onDrop = (move) => {
    if (move.sourceSquare !== move.targetSquare) {
      chess.put( {type: move.piece.charAt(1), color: move.piece.charAt(0) }, move.targetSquare);
      chess.remove(move.sourceSquare);
      setFen(chess.fen());
    }
  };

  const setNewFen = () => {
    const parts = fen.split(' ');
    setFen(`${parts[0]} ${turn} ${parts[2]} ${parts[3]} ${parts[4]} ${parts[5]}`)
  }

  const handleClick = async () => {
    const url = 'https://lichess.org/api/cloud-eval';

    if (value !== '') {
      console.log(value);
      setFen(value);
      chess.load(value);
      console.log(fen);
      try {
        const response = await fetch(`${url}?fen=${fen}`);
        const data = await response.json();
        console.log(data);
        const position = data.pvs[0];
        const cp = position.cp;
        console.log(position.moves);
        setBestMoves(position.moves);
        setError(false);
        setCp(cp);
      } catch (e) {
        setBestMoves('');
        setError(true);
        setCp(0);
        console.log(e);
      }
    } else {
      try {
        setNewFen();
        const response = await fetch(`${url}?fen=${fen}`);
        const data = await response.json();
        const position = data.pvs[0];
        const cp = position.cp;
        setBestMoves(position.moves);
        setError(false);
        setCp(cp);
      } catch (e) {
        setBestMoves('');
        setError(true);
        setCp(0);
        console.log(e);
      }
    }
  }

  const handleChange = (checked) => {
    setChecked(checked);
    setTurn('b');
  }

  const formatBestMoves = () => {
    if (bestMoves) {
      const moves = bestMoves.split(' ');
      let move = 1;
      for (let i = 0; i < moves.length; i+=3) {
        moves.splice(i, 0, `${move}.`);
        move++;
      }
      return moves;
    }
    return [];
  }

  return <div className="sm:my-2 flex justify-center overflow-x-hidden">
    <div className="lg:flex justify-center">
      <div className="flex-col justify-center mx-8">
        <CustomBoard
          width={calculateBoardWidth()}
          position={fen}
          onDrop={onDrop}
          sparePieces={props.sparePieces}
          dropOffBoard={props.dropOffBoard}
        />
        <form className="flex justify-center mt-6 mb-4">
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
            id="fen" effect="solid" type="dark" place="top" 
          />
        </form>
      </div>

      <div className="flex-col">
        <div className="flex justify-center lg:flex-col items-center lg:mt-44">
          <label className="flex items-center p-4">
            <Switch onChange={handleChange} checked={checked}
              offColor="#66D8D6" onColor="#f981c2" 
              uncheckedIcon={false} checkedIcon={false} 
            />
            <span className="ml-3">to move</span>
          </label>
          <button onClick={handleClick} type="submit" className="w-28 p-2 lg:mt-2 rounded-lg bg-pink-400 focus:bg-pink-500 focus:ring-2 focus:outline-none focus:ring-pink-700">Solve!</button>  
        </div>
        {error && <p className="absolute m-6">Invalid position!</p>}

        <h1 className="px-2 m-2 text-2xl lg:mt-48 text-center">Solution:</h1>
        <div className="scrollbar overflow-y-auto text-center lg:text-left ">
          <MoveHistory moveHistory={formatBestMoves()} />
        </div>
      </div>
    </div>
  </div>;
}

export default AnalysisBoard;
