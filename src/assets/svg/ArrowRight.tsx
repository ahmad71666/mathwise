import * as React from "react"
import { Svg, Path, SvgProps } from "react-native-svg"

interface SvgComponentProps extends SvgProps {
    color?:string;
}

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
    return (
        <Svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <Path d="M2.10165 2L8.08472 7.99997L2.10165 14" stroke={props?.color ? props?.color : "white"} strokeWidth="2" stroke-linecap="square" stroke-linejoin="round" />
        </Svg>
    )
}

export default SvgComponent
