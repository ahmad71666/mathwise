import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Svg, Path, SvgProps} from 'react-native-svg';
import {Colors} from '../../theme/colors';

interface SvgComponentProps extends SvgProps {
  hide?: boolean;
}

const SvgComponent: React.FC<SvgComponentProps> = props => {
  return (
    <TouchableOpacity
      style={[styles.container, props?.hide && styles.hide]}
      {...props}>
      <Svg width="16" height="8" viewBox="0 0 16 8" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.99999 7.5C8.16274 7.5 8.32564 7.44298 8.4499 7.32908L14.8135 1.49578C15.0622 1.26785 15.0622 0.898746 14.8135 0.670947C14.5649 0.443164 14.1622 0.443018 13.9137 0.670947L7.99997 6.09184L2.08625 0.670947C1.8376 0.443018 1.43494 0.443018 1.18643 0.670947C0.937938 0.898876 0.937778 1.26798 1.18643 1.49578L7.55006 7.32908C7.67431 7.44298 7.83722 7.5 7.99997 7.5H7.99999Z"
          fill="white"
          stroke="white"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 76,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.cyanPrimary,
    borderRadius: 42,
    marginTop: -11,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 999,
  },
  hide: {
    zIndex: -999,
    backgroundColor: 'white',
  },
});

export default SvgComponent;
