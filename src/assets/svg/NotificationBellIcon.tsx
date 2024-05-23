import * as React from "react"
import { Svg, Path, SvgProps } from "react-native-svg"

interface SvgComponentProps extends SvgProps {

}

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
    return (
        <Svg width="23" height="28" viewBox="0 0 23 28" fill="none">
            <Path d="M11.6453 2.63721C7.35915 2.63721 3.87588 5.99971 3.87588 10.1372V13.7497C3.87588 14.5122 3.53921 15.6747 3.13779 16.3247L1.64866 18.7122C0.729279 20.1872 1.36378 21.8247 3.04715 22.3747C8.62815 24.1747 14.6494 24.1747 20.2304 22.3747C21.7973 21.8747 22.4836 20.0872 21.6289 18.7122L20.1398 16.3247C19.7513 15.6747 19.4146 14.5122 19.4146 13.7497V10.1372C19.4146 6.01221 15.9184 2.63721 11.6453 2.63721Z" stroke="#9297AC" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" />
            <Path d="M14.0411 2.9998C12.4752 2.56929 10.8159 2.56929 9.25 2.9998C9.62552 2.0748 10.5578 1.4248 11.6456 1.4248C12.7333 1.4248 13.6656 2.0748 14.0411 2.9998V2.9998Z" stroke="#9297AC" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M15.5304 22.8247C15.5304 24.8872 13.7823 26.5747 11.6457 26.5747C10.5839 26.5747 9.59974 26.1497 8.90049 25.4747C8.17297 24.7713 7.76331 23.8187 7.76099 22.8247" stroke="#9297AC" strokeWidth="1.5" strokeMiterlimit="10" />
        </Svg>

    )
}

export default SvgComponent
