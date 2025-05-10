import { Text, View } from 'react-native';
import * as React from 'react';
import { SettingsScreenProps } from '@/src/screens/types';

export default function SettingsScreen({ navigation }: SettingsScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}
