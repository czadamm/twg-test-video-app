import { Button, Text, View } from 'react-native';
import * as React from 'react';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type StackNavigatorParamList } from '@/src/navigators/StackNavigator';
import type { CompositeScreenProps } from '@react-navigation/core';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { TabNavigatorParamList } from '@/src/navigators/TabNavigator';

type SettingsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<StackNavigatorParamList, 'Settings'>,
  BottomTabScreenProps<TabNavigatorParamList>
>;
export default function SettingsScreen({ navigation }: SettingsScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}
