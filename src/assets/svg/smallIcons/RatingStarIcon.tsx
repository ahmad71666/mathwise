import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {}

const SvgComponent: React.FC<SvgComponentProps> = () => {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.98625 4.78279L5.65166 0.474609L4.31702 4.78279H0L3.49402 7.44487L2.15944 11.7531L5.65166 9.08919L9.1456 11.7531L7.81101 7.44487L11.305 4.78279H6.98625Z"
        fill="#1089FF"
      />
    </Svg>
  );
};

export default SvgComponent;
