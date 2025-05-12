import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { IconProps } from '@/src/components/icons/types';

const SvgFullscreenIcon = ({ color = '#2B2D42', ...props }: IconProps & SvgProps) => (
  <Svg width={'100%'} height={'100%'} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5.333H5.333V12m21.334 0V5.333H20m0 21.334h6.667V20M5.333 20v6.667H12"
    />
  </Svg>
);
export default SvgFullscreenIcon;
