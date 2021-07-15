import React from 'react';
import ChessBoard from 'chessboardjsx';
import MoveHistory from './MoveHistory';
import wP from '../resources/wP.svg';
import wR from '../resources/wR.svg';
import wN from '../resources/wN.svg';
import wB from '../resources/wB.svg';
import wQ from '../resources/wQ.svg';
import wK from '../resources/wK.svg';
import bP from '../resources/bP.svg';
import bR from '../resources/bP.svg';
import bN from '../resources/bN.svg';
import bB from '../resources/bB.svg';
import bQ from '../resources/bQ.svg';
import bK from '../resources/bK.svg';

function CustomBoard(props) {
  return (
    <div className="customBoard">
      <div className="chessBoard">
      <ChessBoard
        sparePieces={props.sparePieces}
        lightSquareStyle={{ backgroundColor: "Gray" }}
        darkSquareStyle={{ backgroundColor: "Black" }}
        width={props.width}
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
                width: isDragging ? squareWidth : squareWidth,
                height: isDragging ? squareWidth : squareWidth
              }}
              src={wP}
              alt={"white pawn"}
            />
          ),
          wR: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth : squareWidth,
                height: isDragging ? squareWidth : squareWidth
              }}
              src={wR}
              alt={"white rook"}
            />
          ),
          wN: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth : squareWidth,
                height: isDragging ? squareWidth : squareWidth
              }}
              src={wN}
              alt={"white knight"}
            />
          ),
          wB: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth : squareWidth,
                height: isDragging ? squareWidth : squareWidth
              }}
              src={wB}
              alt={"white bishop"}
            />
          ),
          wQ: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth : squareWidth,
                height: isDragging ? squareWidth : squareWidth
              }}
              src={wQ}
              alt={"white queen"}
            />
          ),
          wK: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth : squareWidth,
                height: isDragging ? squareWidth : squareWidth
              }}
              src={wK}
              alt={"white king"}
            />
          ),
          bP: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth : squareWidth,
                height: isDragging ? squareWidth : squareWidth
              }}
              src={bP}
              alt={"black pawn"}
            />
          ),
          bR: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth : squareWidth,
                height: isDragging ? squareWidth : squareWidth
              }}
              src={bR}
              alt={"black rook"}
            />
          ),
          bN: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth : squareWidth,
                height: isDragging ? squareWidth : squareWidth
              }}
              src={bN}
              alt={"black knight"}
            />
          ),
          bB: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth : squareWidth,
                height: isDragging ? squareWidth : squareWidth
              }}
              src={bB}
              alt={"black bishop"}
            />
          ),
          bQ: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth : squareWidth,
                height: isDragging ? squareWidth : squareWidth
              }}
              src={bQ}
              alt={"black queen"}
            />
          ),
          bK: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth : squareWidth,
                height: isDragging ? squareWidth : squareWidth
              }}
              src={bK}
              alt={"black king"}
            />
          ),
        }}
      />
      </div>
      {/* <div className="moveHistory">
        <MoveHistory moveHistory={props.moveHistory} />
      </div> */}
    </div>
  );
}

export default CustomBoard;