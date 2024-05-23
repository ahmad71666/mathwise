import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  return (
    <Svg width="14" height="11" viewBox="0 0 14 11" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.53741 9.99272C4.87327 7.72957 2.99707 6.53078 2.99707 4.62398C2.99707 3.18205 4.05595 2 5.50593 2C6.51213 2 7.25875 2.5999 7.71963 3.45091C8.18047 2.59995 8.92709 2 9.93333 2C11.3835 2 12.4422 3.18228 12.4422 4.62398C12.4422 6.53054 10.5684 7.72749 7.90185 9.9927C7.7975 10.0813 7.64174 10.0813 7.53741 9.99272Z"
        stroke="#9298A8"
        strokeWidth="1.2"
      />
    </Svg>
  );
};

export default SvgComponent;
