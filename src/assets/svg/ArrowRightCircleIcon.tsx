import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {
  fillColor?: string;
  arrowColor?: string;
}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  return (
    <Svg width="30" height="31" viewBox="0 0 30 31" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 30.2871C23.2843 30.2871 30 23.5714 30 15.2871C30 7.00284 23.2843 0.287109 15 0.287109C6.71573 0.287109 0 7.00284 0 15.2871C0 23.5714 6.71573 30.2871 15 30.2871Z"
        fill={props?.fillColor ? props?.fillColor : '#EBEEF7'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.1666 15.2911C19.1669 15.1515 19.1139 15.0117 19.0075 14.9048L13.5614 9.43359C13.3485 9.21981 13.0031 9.21902 12.7895 9.43182C12.5758 9.64462 12.5749 9.99003 12.7877 10.2037L17.8489 15.2881L12.7644 20.3493C12.5507 20.5621 12.5499 20.9075 12.7627 21.1211C12.9755 21.3348 13.3209 21.3357 13.5345 21.1229L19.0058 15.6767C19.1126 15.5704 19.1663 15.4307 19.1666 15.2911L19.1666 15.2911Z"
        fill={props?.arrowColor ? props?.arrowColor : '#9298A8'}
        stroke={props?.arrowColor ? props?.arrowColor : '#9298A8'}
      />
    </Svg>
  );
};

export default SvgComponent;
