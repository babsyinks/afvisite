import { Circle } from 'rc-progress';

const Progress = ({progress}) => (
  <>
     
     <Circle percent={progress} strokeWidth={4} trailWidth = {4} strokeColor="green" /> 
  </>
);

export default Progress