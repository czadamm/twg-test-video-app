import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from '@/src/components/ui/types';
import { Colors } from '@/src/constants/Colors';
import StyledText from '@/src/components/ui/StyledText';

export default function Button({ children, onPress, style }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, style]}>
      <StyledText style={styles.label} bold>
        {children}
      </StyledText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    maxWidth: 256,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.light.primary,
  },
  label: {
    color: Colors.light.onPrimary,
  },
});
