import * as React from "react"
import { Svg, Path, SvgProps } from "react-native-svg"

interface SvgComponentProps extends SvgProps {

}

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
    return (
        <Svg width="9" height="6" viewBox="0 0 9 6" fill="none">
            <Path d="M3.76285 5.19583L0.536081 1.67572C-0.0518705 1.03432 0.40313 0 1.27324 0H7.72676C8.59687 0 9.05187 1.03432 8.46392 1.67573L5.23715 5.19583C4.84082 5.6282 4.15918 5.6282 3.76285 5.19583Z" fill="#131A1B" />
        </Svg>
    )
}

export default SvgComponent
