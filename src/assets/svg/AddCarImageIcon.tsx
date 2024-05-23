import * as React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Svg, Path, SvgProps} from 'react-native-svg';

interface SvgComponentProps extends TouchableOpacityProps {}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  return (
    <Svg width="67" height="66" viewBox="0 0 67 66" fill="none">
      <Path
        d="M65 33C65 50.397 50.897 64.5 33.5 64.5C16.103 64.5 2 50.397 2 33C2 15.603 16.103 1.5 33.5 1.5C50.897 1.5 65 15.603 65 33Z"
        stroke="#1089FF"
        strokeWidth="3"
      />
      <Path
        d="M45.8872 30.6447C46.295 30.6447 46.4989 30.8486 46.4989 31.2565V35.1106C46.4989 35.5184 46.295 35.7224 45.8872 35.7224H36.2829C36.1197 35.7224 36.0382 35.8039 36.0382 35.9671V45.3882C36.0382 45.7961 35.8343 46 35.4264 46H31.5725C31.1647 46 30.9607 45.7961 30.9607 45.3882V35.9671C30.9607 35.8039 30.8792 35.7224 30.716 35.7224H21.1117C20.7039 35.7224 20.5 35.5184 20.5 35.1106V31.2565C20.5 30.8486 20.7039 30.6447 21.1117 30.6447H30.716C30.8792 30.6447 30.9607 30.5631 30.9607 30.4V20.6118C30.9607 20.2039 31.1647 20 31.5725 20H35.4264C35.8343 20 36.0382 20.2039 36.0382 20.6118V30.4C36.0382 30.5631 36.1197 30.6447 36.2829 30.6447H45.8872Z"
        fill="#1089FF"
      />
    </Svg>
  );
};

export default SvgComponent;
