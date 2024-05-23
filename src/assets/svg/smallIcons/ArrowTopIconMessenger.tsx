import * as React from 'react';
import {Svg, Path, SvgProps, G, Defs, Rect, ClipPath} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {
  color?: string;
}

const SvgComponent: React.FC<SvgComponentProps> = ({color}) => {
  return (
    <Svg width="15" height="16" viewBox="0 0 15 16" fill="none">
      <G clip-path="url(#clip0_1211_74626)">
        <Path
          d="M8.21802 1.1882C7.82141 0.791346 7.17878 0.791346 6.78192 1.1882L1.7038 6.26633C1.30694 6.66293 1.30719 7.30557 1.7038 7.70242C2.1004 8.09928 2.74303 8.09928 3.13989 7.70242L6.48434 4.35797L6.48434 14.0937C6.48434 14.6546 6.93858 15.1094 7.49997 15.1094C8.06136 15.1094 8.51559 14.6546 8.51559 14.0937L8.51559 4.35797L11.86 7.70242C12.2566 8.09928 12.8993 8.09928 13.2961 7.70242C13.4944 7.50412 13.5937 7.24412 13.5937 6.98437C13.5937 6.72463 13.4944 6.46463 13.2961 6.26633L8.21802 1.1882Z"
          fill={color ? color : 'white'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1211_74626">
          <Rect
            width="15"
            height="15"
            fill={color ? color : 'white'}
            transform="translate(0 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SvgComponent;
