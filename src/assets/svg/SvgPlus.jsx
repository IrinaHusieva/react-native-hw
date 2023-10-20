
import React from 'react';
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg';

const SvgAddButton = ({
  style: { fill = '#ff6c00', stroke = '#ff6c00', backgroundColor = '#ffffff' },
}) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={70} height={40} fill="none">
      <G clip-path="url(#a)">
        <Rect width={70} height={40} fill="#FF6C00" rx={20} />
        <Path
          fill="#fff"
          fill-rule="evenodd"
          d="M35.5 13.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z"
          clip-rule="evenodd"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Rect width={70} height={40} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};


export default SvgAddButton;
