import * as React from "react"
import { Svg, Path, SvgProps } from "react-native-svg"

interface SvgComponentProps extends SvgProps {

}

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
    return (
        <Svg width="13" height="21" viewBox="0 0 13 21" fill="none">
            <Path d="M11.8926 3.03536L11.8926 3.03535C11.4414 2.65486 10.7253 2.65492 10.2741 3.0353L1.10746 10.7625C0.875956 10.9577 0.75 11.2238 0.75 11.5V11.5C0.75 11.7762 0.875956 12.0423 1.10746 12.2375L10.274 19.9647C10.7252 20.3453 11.4413 20.3449 11.8924 19.9648L11.8924 19.9648C12.1241 19.7696 12.25 19.5036 12.25 19.2274C12.25 18.9511 12.1241 18.6851 11.8925 18.4898L3.6007 11.5L11.8924 4.51028C11.8925 4.51027 11.8925 4.51025 11.8925 4.51024C12.1242 4.31504 12.25 4.04903 12.2499 3.7728C12.2499 3.49658 12.124 3.23059 11.8926 3.03536Z" fill="#131A1B" stroke="#131A1B" strokeWidth="0.5" />
        </Svg>
    )
}

export default SvgComponent
