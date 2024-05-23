import * as React from 'react';
import {Svg, Path, SvgProps, Defs, ClipPath, Rect, G} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clip-path="url(#clip0_191_9014)">
        <Path
          d="M7.08317 15.8327H6.6665C3.33317 15.8327 1.6665 14.9993 1.6665 10.8327V6.66602C1.6665 3.33268 3.33317 1.66602 6.6665 1.66602H13.3332C16.6665 1.66602 18.3332 3.33268 18.3332 6.66602V10.8327C18.3332 14.166 16.6665 15.8327 13.3332 15.8327H12.9165C12.6582 15.8327 12.4082 15.9577 12.2498 16.166L10.9998 17.8327C10.4498 18.566 9.54984 18.566 8.99984 17.8327L7.74984 16.166C7.6165 15.9827 7.30817 15.8327 7.08317 15.8327V15.8327Z"
          stroke="#131A1B"
          strokeWidth="1.5"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.3301 9.16602H13.3384M9.99593 9.16602H10.0043M6.6626 9.16602H6.66926"
          stroke="#131A1B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_191_9014">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SvgComponent;
