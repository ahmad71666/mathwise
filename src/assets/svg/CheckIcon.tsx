import * as React from "react"
import { Svg, Path, SvgProps } from "react-native-svg"

interface SvgComponentProps extends SvgProps {

}

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
    return (
        <Svg width="30" height="31" viewBox="0 0 30 31" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M15 30.2871C23.2843 30.2871 30 23.5714 30 15.2871C30 7.00284 23.2843 0.287109 15 0.287109C6.71573 0.287109 0 7.00284 0 15.2871C0 23.5714 6.71573 30.2871 15 30.2871Z" fill="#1089FF" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.93359 15.8611L12.2167 19.8412L22.064 10.7383" fill="#1089FF" />
            <Path d="M7.93359 15.8611L12.2167 19.8412L22.064 10.7383" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}

export default SvgComponent
