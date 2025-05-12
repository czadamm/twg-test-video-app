import { IconButtonProps } from '@/src/components/ui/types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/src/constants/Colors';

export default function PlayerButton({ children, onPress, size, position, backgroundStyle }: IconButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[{ position: 'absolute' }, position]}>
      <View style={[styles.buttonContainer, { width: size, height: size }, backgroundStyle]}>{children}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 6,
    backgroundColor: Colors.light.backdrop,
    borderRadius: '50%',
  },
});
