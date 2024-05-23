import * as React from "react"
import { Svg, Path, SvgProps } from "react-native-svg"

interface SvgComponentProps extends SvgProps {
    bgColor?: string;
    color?: string;
}

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
    return (
        <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
            {/* <Path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill={props?.bgColor ? props?.bgColor : "#EBEEF7"} /> */}
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.94972 12.3088C9.85789 12.3088 9.76597 12.2737 9.69586 12.2036L6.10522 8.61295C5.96492 8.47265 5.96492 8.24544 6.10522 8.10522C6.24553 7.96501 6.47273 7.96492 6.61295 8.10522L9.94973 11.442L13.2865 8.10522C13.4268 7.96492 13.654 7.96492 13.7942 8.10522C13.9345 8.24553 13.9345 8.47273 13.7942 8.61295L10.2036 12.2036C10.1335 12.2737 10.0416 12.3088 9.94973 12.3088H9.94972Z" fill={props?.color ? props?.color : "#9298A8"} stroke={props?.color ? props?.color : "#9298A8"} strokeWidth={0.5} />
        </Svg>
    )
}

export default SvgComponent
