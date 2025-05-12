import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { IconProps } from '@/src/components/icons/types';

const SvgLeftarrowIcon = ({ color = '#2B2D42', ...props }: IconProps & SvgProps) => (
  <Svg width={'100%'} height={'100%'} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28.8 16H3.2m0 0L14.4 4.8M3.2 16l11.2 11.2"
    />
  </Svg>
);
export default SvgLeftarrowIcon;
