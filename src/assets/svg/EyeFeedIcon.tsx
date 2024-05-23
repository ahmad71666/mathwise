import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  return (
    <Svg width="14" height="11" viewBox="0 0 14 11" fill="none" {...props}>
      <Path
        d="M7.51571 5.09684C6.83873 5.09684 6.28996 5.64561 6.28996 6.32259C6.28996 6.99957 6.83873 7.54834 7.51571 7.54834C8.19269 7.54834 8.74146 6.99957 8.74146 6.32259C8.74146 5.64561 8.19269 5.09684 7.51571 5.09684Z"
        stroke="#9298A8"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2 6.32275C3.15747 4.48965 5.23702 2.64551 7.51587 2.64551C9.79472 2.64551 11.8743 4.48965 13.0317 6.32275C11.623 8.06439 9.9725 10 7.51587 10C5.05922 10 3.40869 8.06442 2 6.32275Z"
        stroke="#9298A8"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default SvgComponent;
