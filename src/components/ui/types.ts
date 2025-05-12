import { TextStyle, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export type IconButtonProps = {
  children: ReactNode;
  onPress: () => void;
  size: number;
  position?: Pick<ViewStyle, 'top' | 'left' | 'right' | 'bottom' | 'transform'>;
  backgroundStyle?: ViewStyle;
  absolute?: boolean;
};

export type CardProps = {
  children: string;
  compact?: boolean;
  icon?: ReactNode;
  style?: ViewStyle;
};

export type ButtonProps = {
  children: string;
  onPress: () => void;
};

export type StyledTextProps = {
  children: ReactNode;
  bold?: boolean;
  semibold?: boolean;
  style?: TextStyle;
};
