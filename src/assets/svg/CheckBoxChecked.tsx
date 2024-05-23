import * as React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";
import { Colors } from "../../theme/colors";

interface SvgComponentProps extends SvgProps {
  color?: string;
}

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
  return (
    <Svg width={21} height={19} viewBox="0 0 21 19" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 6C1.5 3.23858 3.73858 1 6.5 1H14.5C17.2614 1 19.5 3.23858 19.5 6V13C19.5 15.7614 17.2614 18 14.5 18H6.5C3.73858 18 1.5 15.7614 1.5 13V6Z"
        fill={props.color ? props.color : Colors.cyanPrimary}
        stroke={props.color ? props.color : Colors.cyanPrimary}
        strokeWidth={2}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4937 5.75844C14.8383 5.41386 15.397 5.41386 15.7416 5.75844C16.0862 6.10302 16.0862 6.6617 15.7416 7.00628L10.4475 12.3004C10.1029 12.645 9.54419 12.645 9.19962 12.3004L6.25844 9.35922C5.91386 9.01464 5.91386 8.45596 6.25844 8.11138C6.60302 7.7668 7.1617 7.7668 7.50628 8.11138L9.82353 10.4286L14.4937 5.75844Z"
        fill="white"
      />
    </Svg>
  );
};

export default SvgComponent;
