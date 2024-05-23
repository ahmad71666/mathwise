import * as React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

interface SvgComponentProps extends SvgProps {
  color?: string;
}

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
  return (
    <Svg width="21" height="19" viewBox="0 0 21 19" fill="none">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6C1.5 3.23858 3.73858 1 6.5 1H14.5C17.2614 1 19.5 3.23858 19.5 6V13C19.5 15.7614 17.2614 18 14.5 18H6.5C3.73858 18 1.5 15.7614 1.5 13V6Z" fill="white" stroke="#EBEEF7" strokeWidth="2" />
    </Svg>
  );
};

export default SvgComponent;
