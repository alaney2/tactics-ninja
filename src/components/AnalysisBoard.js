import CustomBoard from './CustomBoard';
import React, { useState } from 'react';
import MoveHistory from './MoveHistory';
import '../styles/styles.css';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import ReactTooltip from 'react-tooltip';
import Switch from "react-switch";
import king from '../resources/king.png';
import trash from '../resources/trash.png';

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
  const [, setFen] = useState(chess.fen());
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
    const parts = chess.fen().split(' ');
    const newFen = `${parts[0]} ${turn} ${parts[2]} ${parts[3]} ${parts[4]} ${parts[5]}`;
    chess.load(newFen);
  }

  const handleClick = async () => {
    const url = 'https://lichess.org/api/cloud-eval';

    if (value !== '') {
      setFen(value);
      chess.load(value);
      try {
        const response = await fetch(`${url}?fen=${value}`);
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
        console.log(chess.fen());
        console.log(turn);

        const response = await fetch(`${url}?fen=${chess.fen()}`);
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
    if (checked) {
      setTurn('b');
    } else {
      setTurn('w');
    }
  }

  const newBoard = () => {
    chess.reset();
    setFen(chess.fen());
    setBestMoves('');
    setError(false);
    setCp(0);
  }

  const clearBoard = () => {
    chess.clear();
    setFen(chess.fen());
    setBestMoves('');
    setError(false);
    setCp(0);
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

  return <div className="sm:my-2 flex justify-center">
    <div className="lg:flex justify-center">
      <div className="flex-col justify-center">
        <CustomBoard
          width={calculateBoardWidth()}
          position={chess.fen()}
          onDrop={onDrop}
          sparePieces={props.sparePieces}
          dropOffBoard={props.dropOffBoard}
        />
        <form className="flex justify-center items-center mt-4 lg:mt-6 mb-4">
          <label for="fen" className="p-1">FEN: </label>
          <input type="text" name="fen" value={value} onChange={handleInputChange} className="h-8 w-48 md:w-80 p-1 mx-2 outline-none bg-gray-300 rounded-lg text-gray-800" />
          <QuestionMarkCircleIcon data-for="fen" data-tip="" className="w-6"/>
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
        <div className="flex justify-center lg:flex-col lg:mt-20 mx-8">
          <button onClick={clearBoard} className="flex items-center mx-2 hover:text-gray-300">
            <img src={trash} alt="Clear board" loading="lazy"></img>
            <span className="ml-1">Clear board</span>
          </button>

          <button onClick={newBoard} className="flex items-center m-2 hover:text-gray-300">
            <img src={king} alt="New board" loading="lazy"></img>
            <span className="ml-1">New board</span>
          </button>
        </div>

        <div className="flex justify-center lg:flex-col my-4 mx-8">
          <label className="flex items-center p-2">
            <Switch onChange={handleChange} checked={checked}
              offColor="#66D8D6" onColor="#f981c2"
              offHandleColor="#a4f5f2" onHandleColor="#f5bada"
              uncheckedIcon={false} checkedIcon={false}
            />
            <span className="ml-3">to move</span>
          </label>
          <button onClick={handleClick} type="submit" className="text-lg w-28 p-1 lg:p-2 lg:mt-48 rounded-lg bg-pink-400 focus:bg-pink-500 focus:ring-2 focus:outline-none focus:ring-pink-700">Solve!</button>  
        </div>
        
        <h1 className="text-xl lg:mt-6 text-center lg:text-left mx-8">Solution:</h1>
        {error && <p className="absolute mx-8 my-4 w-8/12 lg:w-auto text-center flex justify-center">Invalid position!</p>}
        <div className="scrollbar lg:w-72 overflow-y-auto h-28">
          <MoveHistory moveHistory={formatBestMoves()} />
        </div>
      </div>
    </div>
  </div>;
}

export default AnalysisBoard;
