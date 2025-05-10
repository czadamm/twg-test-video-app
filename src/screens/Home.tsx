import { Button, Text, View } from 'react-native';
import * as React from 'react';
import { MainScreenProps } from '@/src/screens/types';

export default function HomeScreen({ navigation }: MainScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title={'Login'} onPress={() => navigation.navigate('Login')} />
      <Button title={'Search'} onPress={() => navigation.navigate('Search')} />
      <Button title={'VideoDetails'} onPress={() => navigation.navigate('VideoDetails', { videoId: '001' })} />
      <Button title={'Settings'} onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}
