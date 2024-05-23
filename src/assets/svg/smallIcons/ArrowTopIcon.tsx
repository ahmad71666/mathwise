import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {
  color?: string;
}

const SvgComponent: React.FC<SvgComponentProps> = ({color, ...props}) => {
  return (
    <Svg width="10" height="12" viewBox="0 0 10 12" fill="none" {...props}>
      <Path
        d="M5.57441 0.550562C5.25713 0.233078 4.74302 0.233078 4.42554 0.550562L0.363037 4.61306C0.0455524 4.93034 0.0457556 5.44445 0.363037 5.76194C0.680318 6.07942 1.19443 6.07942 1.51191 5.76194L4.18747 3.08637L4.18747 10.875C4.18747 11.3237 4.55086 11.6875 4.99997 11.6875C5.44908 11.6875 5.81247 11.3237 5.81247 10.875L5.81247 3.08637L8.48804 5.76194C8.80532 6.07942 9.31943 6.07942 9.63691 5.76194C9.79555 5.6033 9.87497 5.3953 9.87497 5.1875C9.87497 4.9797 9.79555 4.7717 9.63691 4.61306L5.57441 0.550562Z"
        fill={color ? color : '#9298A8'}
      />
    </Svg>
  );
};

export default SvgComponent;
