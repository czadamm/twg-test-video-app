import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

const SvgPauseIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      stroke="#2B2D42"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.44 8.218a3.84 3.84 0 1 0-7.68 0v15.36a3.84 3.84 0 1 0 7.68 0zM26.24 8.218a3.84 3.84 0 1 0-7.68 0v15.36a3.84 3.84 0 1 0 7.68 0z"
    />
  </Svg>
);
export default SvgPauseIcon;
