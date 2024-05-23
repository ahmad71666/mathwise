import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import {Svg, Path, SvgProps} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {
  onPress:() => void;
}

const SvgComponent: React.FC<SvgComponentProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width="30" height="31" viewBox="0 0 30 31" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.0599308 15.8667C0.0599308 24.1154 6.74681 30.8023 14.9955 30.8023C23.2442 30.8023 29.931 24.1154 29.931 15.8667C29.931 7.61803 23.2442 0.931152 14.9955 0.931152C6.74681 0.931152 0.0599308 7.61803 0.0599308 15.8667Z"
        fill="#1089FF"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.9644 15.4564C18.9641 15.3286 18.9149 15.2007 18.8171 15.1033L13.8056 10.1148C13.6098 9.91986 13.2935 9.92059 13.0986 10.1164C12.9039 10.3122 12.9045 10.6286 13.1003 10.8234L17.7574 15.4592L13.1216 20.1164C12.9267 20.3122 12.9274 20.6286 13.1232 20.8234C13.319 21.0182 13.6354 21.0176 13.8302 20.8217L18.8187 15.8103C18.9161 15.7124 18.9647 15.5843 18.9644 15.4565L18.9644 15.4564Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </Svg>
    </TouchableOpacity>
  );
};

export default SvgComponent;
