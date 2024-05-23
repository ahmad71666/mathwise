import * as React from "react"
import { Svg, Path, SvgProps, Circle, Rect } from "react-native-svg"

interface SvgComponentProps extends SvgProps {

}

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
    return (
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
            <Circle cx="12.875" cy="12" r="11" fill="#D4D4D4" stroke="#D4D4D4" strokeWidth="2" />
        </Svg>
    )
}

export default SvgComponent
