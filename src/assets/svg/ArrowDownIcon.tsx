import * as React from "react"
import { Svg, Path, SvgProps } from "react-native-svg"

interface SvgComponentProps extends SvgProps {

}

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
    return (
        <Svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <Path d="M11 1.5L6 6.5L1 1.5" stroke="#131A1B" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}

export default SvgComponent
