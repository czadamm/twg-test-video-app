import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

const SvgLeftarrowIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      stroke="#2B2D42"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28.8 16H3.2m0 0L14.4 4.8M3.2 16l11.2 11.2"
    />
  </Svg>
);
export default SvgLeftarrowIcon;
