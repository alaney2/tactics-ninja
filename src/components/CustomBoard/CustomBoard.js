import React from 'react';
import ChessBoard from 'chessboardjsx';
import MoveHistory from '../MoveHistory/MoveHistory';
import './CustomBoard.css';
import wP from '../../resources/wP.svg';
import wR from '../../resources/wR.svg';
import wN from '../../resources/wN.svg';
import wB from '../../resources/wB.svg';
import wQ from '../../resources/wQ.svg';
import wK from '../../resources/wK.svg';
import bP from '../../resources/bP.svg';
import bR from '../../resources/bP.svg';
import bN from '../../resources/bN.svg';
import bB from '../../resources/bB.svg';
import bQ from '../../resources/bQ.svg';
import bK from '../../resources/bK.svg';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


function CustomBoard(props) {
  return (
    <div className="customBoard">
      <ChessBoard
        width={getWindowDimensions().width > 700 ? 700 : getWindowDimensions().width}
        position={props.position}
        onDrop={props.onDrop}
        onMouseOverSquare={props.onMouseOverSquare}
        onMouseOutSquare={props.onMouseOutSquare}
        boardStyle={props.boardStyle}
        squareStyles={props.squareStyles}
        dropSquareStyle={props.dropSquareStyle}
        onDragOverSquare={props.onDragOverSquare}
        onSquareClick={props.onSquareClick}
        // onSquareRightClick={props.onSquareRightClick}
        pieces={{
          wP: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.2 : squareWidth,
                height: isDragging ? squareWidth * 1.2 : squareWidth
              }}
              src={wP}
              alt={"white pawn"}
            />
          ),
          wR: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.2 : squareWidth,
                height: isDragging ? squareWidth * 1.2 : squareWidth
              }}
              src={wR}
              alt={"white rook"}
            />
          ),
          wN: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.2 : squareWidth,
                height: isDragging ? squareWidth * 1.2 : squareWidth
              }}
              src={wN}
              alt={"white knight"}
            />
          ),
          wB: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.2 : squareWidth,
                height: isDragging ? squareWidth * 1.2 : squareWidth
              }}
              src={wB}
              alt={"white bishop"}
            />
          ),
          wQ: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.2 : squareWidth,
                height: isDragging ? squareWidth * 1.2 : squareWidth
              }}
              src={wQ}
              alt={"white queen"}
            />
          ),
          wK: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.2 : squareWidth,
                height: isDragging ? squareWidth * 1.2 : squareWidth
              }}
              src={wK}
              alt={"white king"}
            />
          ),
          bP: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.2 : squareWidth,
                height: isDragging ? squareWidth * 1.2 : squareWidth
              }}
              src={bP}
              alt={"black pawn"}
            />
          ),
          bR: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.2 : squareWidth,
                height: isDragging ? squareWidth * 1.2 : squareWidth
              }}
              src={bR}
              alt={"black rook"}
            />
          ),
          bN: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.2 : squareWidth,
                height: isDragging ? squareWidth * 1.2 : squareWidth
              }}
              src={bN}
              alt={"black knight"}
            />
          ),
          bB: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.2 : squareWidth,
                height: isDragging ? squareWidth * 1.2 : squareWidth
              }}
              src={bB}
              alt={"black bishop"}
            />
          ),
          bQ: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.2 : squareWidth,
                height: isDragging ? squareWidth * 1.2 : squareWidth
              }}
              src={bQ}
              alt={"black queen"}
            />
          ),
          bK: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.2 : squareWidth,
                height: isDragging ? squareWidth * 1.2 : squareWidth
              }}
              src={bK}
              alt={"black king"}
            />
          ),
        }}
        sparePieces={props.sparePieces}
        lightSquareStyle={{ backgroundColor: "Gray" }}
        darkSquareStyle={{ backgroundColor: "Black" }}
      />
      <MoveHistory moveHistory={props.moveHistory} />
    </div>
  );
}

export default CustomBoard;