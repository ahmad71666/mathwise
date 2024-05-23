import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {Svg, Path, SvgProps} from 'react-native-svg';

interface SvgComponentProps extends SvgProps {
  onPress: () => void;
  disabled?: boolean;
}

const SvgComponent: React.FC<SvgComponentProps> = ({
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Svg width="30" height="31" viewBox="0 0 30 31" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.9401 15.1333C29.9401 6.88462 23.2532 0.197748 15.0045 0.197748C6.75584 0.197748 0.0689697 6.88462 0.0689697 15.1333C0.0689697 23.382 6.75584 30.0688 15.0045 30.0688C23.2532 30.0688 29.9401 23.382 29.9401 15.1333Z"
          fill="#1089FF"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.0356 15.5436C11.0359 15.6714 11.0851 15.7993 11.1829 15.8967L16.1944 20.8852C16.3902 21.0801 16.7065 21.0794 16.9014 20.8836C17.0961 20.6878 17.0955 20.3714 16.8997 20.1766L12.2426 15.5408L16.8784 10.8836C17.0733 10.6878 17.0726 10.3714 16.8768 10.1766C16.681 9.98184 16.3646 9.98244 16.1698 10.1783L11.1813 15.1897C11.0839 15.2876 11.0353 15.4157 11.0356 15.5435L11.0356 15.5436Z"
          fill="white"
          stroke="white"
          strokeWidth="0.5"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default SvgComponent;
