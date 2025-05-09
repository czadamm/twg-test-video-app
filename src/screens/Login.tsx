import { Text, View } from 'react-native';
import * as React from 'react';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type StackNavigatorParamList } from '@/src/navigators/StackNavigator';

type Props = NativeStackScreenProps<StackNavigatorParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
    </View>
  );
}
