import { Button, Text, View } from 'react-native';
import * as React from 'react';
import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { type CompositeScreenProps } from '@react-navigation/core';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type TabNavigatorParamList } from '@/src/navigators/TabNavigator';
import { type StackNavigatorParamList } from '@/src/navigators/StackNavigator';

type MainScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabNavigatorParamList, 'Home'>,
  NativeStackScreenProps<StackNavigatorParamList>
>;

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
