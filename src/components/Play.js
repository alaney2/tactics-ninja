import Board from './Board';
import { calculateBoardWidth } from './Board';

function Play() {
  const padding = calculateBoardWidth() / 8;
  const style = {
    paddingTop: padding, 
  }

  return <div style={style}>
    <Board moves={true} sparePieces={false}/>
  </div>;
}

export default Play;
