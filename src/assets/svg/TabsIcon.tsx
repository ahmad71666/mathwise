import * as React from "react"
import { Svg, Path, SvgProps, Circle } from "react-native-svg"

interface SvgComponentProps extends SvgProps {

}

const SvgComponent: React.FC<SvgComponentProps> = (props) => {
    return (
        <Svg width="27" height="26" viewBox="0 0 27 26" fill="none">
            <Circle cx="13.625" cy="13" r="12" fill="#F7F8FC" stroke="#D4D4D4" strokeWidth="1.6" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.4744 7.70711C13.865 7.31658 13.865 6.68342 13.4744 6.29289C13.0839 5.90237 12.4507 5.90237 12.0602 6.29289L6.91789 11.4352C6.52737 11.8257 6.52737 12.4589 6.91789 12.8494C7.30842 13.24 7.94158 13.24 8.33211 12.8494L13.4744 7.70711ZM19.4725 7.15056C19.863 7.54108 19.863 8.17425 19.4725 8.56477L9.18782 18.8494C8.7973 19.24 8.16413 19.24 7.77361 18.8494C7.38308 18.4589 7.38308 17.8257 7.77361 17.4352L18.0583 7.15056C18.4488 6.76003 19.082 6.76003 19.4725 7.15056ZM20.3321 13.1496C20.7226 13.5401 20.7226 14.1733 20.3321 14.5638L15.1898 19.7061C14.7992 20.0967 14.1661 20.0967 13.7756 19.7061C13.385 19.3156 13.385 18.6824 13.7756 18.2919L18.9179 13.1496C19.3084 12.7591 19.9416 12.7591 20.3321 13.1496Z" fill="#D4D4D4" />
        </Svg>

    )
}

export default SvgComponent
