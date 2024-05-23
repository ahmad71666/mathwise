import * as React from 'react';
import {Svg, Path, SvgProps, Defs, ClipPath, Rect, G} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.0165 2.42578C7.25816 2.42578 5.0165 4.66745 5.0165 7.42578V9.83412C5.0165 10.3424 4.79983 11.1174 4.5415 11.5508L3.58316 13.1424C2.9915 14.1258 3.39983 15.2174 4.48316 15.5841C8.07483 16.7841 11.9498 16.7841 15.5415 15.5841C16.5498 15.2508 16.9915 14.0591 16.4415 13.1424L15.4832 11.5508C15.2332 11.1174 15.0165 10.3424 15.0165 9.83412V7.42578C15.0165 4.67578 12.7665 2.42578 10.0165 2.42578Z"
        stroke="#131A1B"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M11.5584 2.66719C10.5507 2.38018 9.48284 2.38018 8.4751 2.66719C8.71676 2.05052 9.31676 1.61719 10.0168 1.61719C10.7168 1.61719 11.3168 2.05052 11.5584 2.66719V2.66719Z"
        stroke="#131A1B"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.5166 15.8828C12.5166 17.2578 11.3916 18.3828 10.0166 18.3828C9.33327 18.3828 8.69993 18.0995 8.24993 17.6495C7.78173 17.1806 7.5181 16.5454 7.5166 15.8828"
        stroke="#131A1B"
        strokeWidth="1.5"
        stroke-miterlimit="10"
      />
    </Svg>
  );
};

export default SvgComponent;
