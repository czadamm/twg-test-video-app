import { Text, View } from 'react-native';
import * as React from 'react';
import { LoginScreenProps } from '@/src/screens/types';

export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
    </View>
  );
}
