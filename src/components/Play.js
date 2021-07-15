import Board from './Board';
import Chessboard from 'chessboardjsx';

function Play() {
  return <div>
    <Board moves={true} sparePieces={false}/>
    {/* <Chessboard
          id="custom"
          position="start"
          width={320}
          dropOffBoard="trash"
          lightSquareStyle={{ backgroundColor: "#61dafb" }}
          darkSquareStyle={{ backgroundColor: "#10a8c8" }}
          onHoverSquareStyle={{ boxShadow: "inset 0 0 1px 100px orange" }}
        /> */}
  </div>;
}

export default Play;
