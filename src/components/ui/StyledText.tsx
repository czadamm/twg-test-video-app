import { StyledTextProps } from '@/src/components/ui/types';
import { StyleSheet, Text, TextProps } from 'react-native';

export default function StyledText({ children, bold, semibold, style, ...props }: StyledTextProps & TextProps) {
  return (
    <Text
      style={[styles.regular, bold ? styles.bold : undefined, semibold ? styles.semiBold : undefined, style]}
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  semiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
});
