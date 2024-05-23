import * as React from "react"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { Svg, Path, SvgProps } from "react-native-svg"

interface SvgComponentProps extends TouchableOpacityProps {

}

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
    return (
        <Svg width="22" height="14" viewBox="0 0 22 14" fill="none">
            <Path d="M21.0763 1C19.1817 4.92727 15.3924 7.54545 11.1046 7.54545C6.8167 7.54545 3.02744 4.92727 1.13281 1" stroke="#9298A8" stroke-miterlimit="10" stroke-linecap="round" />
            <Path d="M11.1045 7.54492V12.9995" stroke="#9298A8" strokeWidth="1.3" stroke-miterlimit="10" stroke-linecap="round" />
            <Path d="M19.082 4.27344L21.0764 9.72798" stroke="#9298A8" strokeWidth="1.3" stroke-miterlimit="10" stroke-linecap="round" />
            <Path d="M3.12716 4.27344L1.13281 9.72798" stroke="#9298A8" strokeWidth="1.3" stroke-miterlimit="10" stroke-linecap="round" />
        </Svg>
    )
}

export default SvgComponent
