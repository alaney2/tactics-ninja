import Board from './Board';

function Analyze() {
  return <div>
    <Board moves={false} sparePieces={true} freePlay={true} dropOffBoard={'trash'}/>
  </div>;
}

export default Analyze
