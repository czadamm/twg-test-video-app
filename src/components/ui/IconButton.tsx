import { IconButtonProps } from '@/src/components/ui/types';
import { Pressable, StyleSheet, View } from 'react-native';

export default function IconButton({ children, onPress, size, position, backgroundStyle }: IconButtonProps) {
  return (
    <Pressable onPress={onPress} style={position}>
      <View style={[styles.buttonContainer, { width: size, height: size }, backgroundStyle]}>{children}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 4,
    backgroundColor: 'black',
    borderRadius: '50%',
  },
  iconImage: {
    width: '100%',
    height: '100%',
  },
});
