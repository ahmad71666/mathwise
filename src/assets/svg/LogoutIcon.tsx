import * as React from 'react';
import {Svg, Path, SvgProps, Defs, ClipPath, Rect, G} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 1C11.0216 1 11.4444 1.42533 11.4444 1.95V11.45C11.4444 11.9747 11.0216 12.4 10.5 12.4C9.97838 12.4 9.55556 11.9747 9.55556 11.45V1.95C9.55556 1.42533 9.97838 1 10.5 1ZM7.53974 4.39105C7.80092 4.84521 7.64663 5.42635 7.19513 5.68907C5.2166 6.84032 3.88889 8.98978 3.88889 11.45C3.88889 15.1227 6.84879 18.1 10.5 18.1C14.1512 18.1 17.1111 15.1227 17.1111 11.45C17.1111 8.98978 15.7834 6.84032 13.8049 5.68907C13.3534 5.42635 13.1991 4.84521 13.4603 4.39105C13.7214 3.9369 14.2992 3.7817 14.7507 4.04442C17.2889 5.52132 19 8.2841 19 11.45C19 16.1721 15.1945 20 10.5 20C5.80558 20 2 16.1721 2 11.45C2 8.2841 3.71113 5.52132 6.24931 4.04442C6.70081 3.7817 7.27856 3.9369 7.53974 4.39105Z"
        fill="#131A1B"
      />
    </Svg>
  );
};

export default SvgComponent;
