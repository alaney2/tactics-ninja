import Board from './Board';

function Analyze() {
  return <div>
    <Board moves={false} sparePieces={true} dropOffBoard={'trash'}/>
  </div>;
}

export default Analyze
