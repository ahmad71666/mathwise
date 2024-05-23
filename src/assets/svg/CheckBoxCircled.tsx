import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {
  color?: string;
}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
        fill={props?.color ? props?.color : '#9298A8'}
      />
      <Path
        d="M4.93405 8.96514L6.59721 11.5775L13.066 6.42578"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SvgComponent;
