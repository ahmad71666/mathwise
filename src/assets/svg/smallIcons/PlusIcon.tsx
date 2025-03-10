import * as React from 'react';
import {Svg, Path, SvgProps, ClipPath, G, Defs, Rect} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {}

const SvgComponent: React.FC<SvgComponentProps> = () => {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <G clip-path="url(#clip0_970_54057)">
        <Path
          d="M6 12C5.8446 12 5.69556 11.9383 5.58568 11.8284C5.47579 11.7185 5.41406 11.5695 5.41406 11.4141V0.585938C5.41406 0.430537 5.47579 0.281502 5.58568 0.171617C5.69556 0.0617325 5.8446 0 6 0C6.1554 0 6.30444 0.0617325 6.41432 0.171617C6.52421 0.281502 6.58594 0.430537 6.58594 0.585938V11.4141C6.58594 11.5695 6.52421 11.7185 6.41432 11.8284C6.30444 11.9383 6.1554 12 6 12Z"
          fill="#9298A8"
          stroke="#9298A8"
          strokeWidth="0.5"
        />
        <Path
          d="M11.4141 6.58594H0.585938C0.430537 6.58594 0.281502 6.52421 0.171617 6.41432C0.0617325 6.30444 0 6.1554 0 6C0 5.8446 0.0617325 5.69556 0.171617 5.58568C0.281502 5.47579 0.430537 5.41406 0.585938 5.41406H11.4141C11.5695 5.41406 11.7185 5.47579 11.8284 5.58568C11.9383 5.69556 12 5.8446 12 6C12 6.1554 11.9383 6.30444 11.8284 6.41432C11.7185 6.52421 11.5695 6.58594 11.4141 6.58594Z"
          fill="#9298A8"
          stroke="#9298A8"
          strokeWidth="0.5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_970_54057">
          <Rect width="12" height="12" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SvgComponent;
