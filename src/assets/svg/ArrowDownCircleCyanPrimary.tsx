import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#1089FF"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.94972 6.9998C9.85789 6.9998 9.76597 7.0349 9.69586 7.10501L6.10522 10.6956C5.96492 10.8359 5.96492 11.0631 6.10522 11.2034C6.24553 11.3436 6.47273 11.3437 6.61295 11.2034L9.94973 7.86658L13.2865 11.2034C13.4268 11.3437 13.654 11.3437 13.7942 11.2034C13.9345 11.0631 13.9345 10.8359 13.7942 10.6956L10.2036 7.10501C10.1335 7.0349 10.0416 6.9998 9.94973 6.9998H9.94972Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </Svg>
  );
};

export default SvgComponent;
