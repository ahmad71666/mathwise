import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {
  color?: string;
  decrease: boolean;
}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  return (
    <Svg width="8" height="6" viewBox="0 0 8 6" fill="none">
      {props?.decrease ? (
        <Path
          d="M4.0866 5.85C4.04811 5.91667 3.95189 5.91667 3.9134 5.85L0.622501 0.149999C0.584011 0.0833324 0.632124 -6.4412e-07 0.709104 -6.3739e-07L7.2909 -6.19918e-08C7.36788 -5.5262e-08 7.41599 0.0833334 7.3775 0.15L4.0866 5.85Z"
          fill={'#FF1E1E'}
        />
      ) : (
        <Path
          d="M4.0866 5.85C4.04811 5.91667 3.95189 5.91667 3.9134 5.85L0.622501 0.149999C0.584011 0.0833324 0.632124 -6.4412e-07 0.709104 -6.3739e-07L7.2909 -6.19918e-08C7.36788 -5.5262e-08 7.41599 0.0833334 7.3775 0.15L4.0866 5.85Z"
          fill={'green'}
        />
      )}
    </Svg>
  );
};

export default SvgComponent;
