import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Path, Svg} from 'react-native-svg';

interface GenerateDashedBordersProps {
  width: number;
  height: number;
  borderWidth: number;
  borderRadius: number;
  dashSpacing: [number, number];
  borderColor: string;
}

const GenerateDashedBorders: FC<GenerateDashedBordersProps> = ({
  width,
  height,
  borderWidth,
  borderRadius,
  dashSpacing,
  borderColor,
}) => {
  const path = `M${borderRadius},${borderWidth / 2} L${width - borderRadius},${
    borderWidth / 2
  } Q${width - borderWidth / 2},${borderWidth / 2} ${
    width - borderWidth / 2
  },${borderRadius} L${width - borderWidth / 2},${height - borderRadius} Q${
    width - borderWidth / 2
  },${height - borderWidth / 2} ${width - borderRadius},${
    height - borderWidth / 2
  } L${borderRadius},${height - borderWidth / 2} Q${borderWidth / 2},${
    height - borderWidth / 2
  } ${borderWidth / 2},${height - borderRadius} L${
    borderWidth / 2
  },${borderRadius} Q${borderWidth / 2},${borderWidth / 2} ${borderRadius},${
    borderWidth / 2
  } Z`;

  return (
    <View style={{position: 'absolute'}}>
      <Svg height={height} width={width}>
        <Path
          d={path}
          stroke={borderColor}
          strokeWidth={borderWidth}
          strokeDasharray={dashSpacing}
          fill="none"
        />
      </Svg>
    </View>
  );
};

export default GenerateDashedBorders;
