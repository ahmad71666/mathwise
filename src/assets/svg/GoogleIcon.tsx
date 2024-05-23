import * as React from "react"
import { Svg, Path, SvgProps } from "react-native-svg"

interface SvgComponentProps extends SvgProps {

}

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
    return (
        <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 7.6V11.4H14.8751C14.0904 13.6116 11.9776 15.2 9.5 15.2C6.3574 15.2 3.8 12.6426 3.8 9.5C3.8 6.3574 6.3574 3.8 9.5 3.8C10.8623 3.8 12.1733 4.2883 13.1917 5.1756L15.6883 2.3104C13.9783 0.8208 11.7819 0 9.5 0C4.2617 0 0 4.2617 0 9.5C0 14.7383 4.2617 19 9.5 19C14.7383 19 19 14.7383 19 9.5V7.6H9.5Z" fill="#1089FF" />
        </Svg>
    )
}

export default SvgComponent
