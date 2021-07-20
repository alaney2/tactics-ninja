import AnalysisBoard from './AnalysisBoard';

function Analyze() {
  return <div>
    <AnalysisBoard moves={false} sparePieces={true} dropOffBoard={'trash'}/>
  </div>;
}

export default Analyze;
