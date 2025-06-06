import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { IconProps } from '@/src/components/icons/types';

const SvgVolumeIcon = ({ color = '#2B2D42', ...props }: IconProps & SvgProps) => (
  <Svg width={'100%'} height={'100%'} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M15.404 4.085A1 1 0 0 1 16 5v22a1 1 0 0 1-1.673.74L7.28 21.333H3.667A2.333 2.333 0 0 1 1.333 19v-6a2.334 2.334 0 0 1 2.334-2.333H7.28l7.047-6.407a1 1 0 0 1 1.077-.173zM14 7.26l-5.66 5.147a1 1 0 0 1-.673.26h-4a.333.333 0 0 0-.334.333v6c0 .184.15.333.334.333h4a1 1 0 0 1 .673.26L14 24.74z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      d="M24.957 5.63a1 1 0 0 1 1.414 0c5.728 5.727 5.728 15.013 0 20.74a1 1 0 0 1-1.414-1.413 12.67 12.67 0 0 0 0-17.914 1 1 0 0 1 0-1.414"
    />
    <Path
      fill={color}
      d="M21.657 10.343a1.001 1.001 0 0 0-1.414 1.414 6 6 0 0 1 0 8.486 1 1 0 0 0 1.413 1.413 8 8 0 0 0 .001-11.313"
    />
  </Svg>
);
export default SvgVolumeIcon;
