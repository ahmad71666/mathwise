import * as React from 'react';
import {Svg, Path, SvgProps, Defs, ClipPath, Rect, G} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clip-path="url(#clip0_191_9018)">
        <Path
          d="M18.3332 9.99935V7.49935C18.3332 3.33268 16.6665 1.66602 12.4998 1.66602H7.49984C3.33317 1.66602 1.6665 3.33268 1.6665 7.49935V12.4993C1.6665 16.666 3.33317 18.3327 7.49984 18.3327H9.99984"
          stroke="#131A1B"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M17.4667 14.8667L16.1084 15.3251C15.7334 15.4501 15.4334 15.7417 15.3084 16.1251L14.8501 17.4834C14.4584 18.6584 12.8084 18.6334 12.4417 17.4584L10.9001 12.5001C10.6001 11.5167 11.5084 10.6001 12.4834 10.9084L17.4501 12.4501C18.6167 12.8167 18.6334 14.4751 17.4667 14.8667Z"
          stroke="#131A1B"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_191_9018">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SvgComponent;
