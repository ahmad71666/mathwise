import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {Svg, Path, SvgProps} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation?.goBack()}>
      <Svg width="29" height="16" viewBox="0 0 29 16" fill="none">
        <Path
          d="M28 7.99997H3.39286M7.59264 2L2 7.99997L7.59264 14"
          stroke="#131A1B"
          strokeWidth="2"
          stroke-linecap="square"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default SvgComponent;
