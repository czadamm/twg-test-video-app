import { CardProps } from '@/src/components/ui/types';
import { StyleSheet, View } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import StyledText from '@/src/components/ui/StyledText';

export default function Card({ icon, compact, children, style }: CardProps) {
  return (
    <View style={[styles.cardContainer, compact ? styles.compact : null, style]}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <StyledText style={styles.description} semibold>
        {children}
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 8,
    borderRadius: 8,
    backgroundColor: Colors.light.primary,
  },
  iconContainer: {
    width: 20,
    height: 20,
  },
  compact: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingLeft: 8,
    gap: 0,
  },
  description: {
    flex: 1,
    width: 'auto',
    paddingHorizontal: 8,
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    color: Colors.light.onPrimary,
  },
});
