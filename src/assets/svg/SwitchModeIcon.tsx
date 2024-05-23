import * as React from 'react';
import {Svg, Path, SvgProps, Defs, ClipPath, Rect, G} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clip-path="url(#clip0_191_8980)">
        <Path
          d="M7.49984 18.3327H12.4998C16.6665 18.3327 18.3332 16.666 18.3332 12.4993V7.49935C18.3332 3.33268 16.6665 1.66602 12.4998 1.66602H7.49984C3.33317 1.66602 1.6665 3.33268 1.6665 7.49935V12.4993C1.6665 16.666 3.33317 18.3327 7.49984 18.3327Z"
          stroke="#131A1B"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.48353 14.2923L5.9502 11.759M8.48353 5.70898V14.2923"
          stroke="#131A1B"
          strokeWidth="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11.5166 5.70898L14.0499 8.24232M11.5166 14.2923V5.70898"
          stroke="#131A1B"
          strokeWidth="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_191_8980">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SvgComponent;
