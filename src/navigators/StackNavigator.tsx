import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideoDetailsScreen from '@/src/screens/VideoDetails';
import SettingsScreen from '@/src/screens/Settings';
import LoginScreen from '@/src/screens/Login';
import * as React from 'react';
import { TabNavigator, TabNavigatorParamList } from '@/src/navigators/TabNavigator';
import { NavigatorScreenParams } from '@react-navigation/core';

// stack nav routes params (undefined for no params)
export type StackNavigatorParamList = {
  Login: undefined;
  Main: NavigatorScreenParams<TabNavigatorParamList>;
  VideoDetails: { videoId: string };
  Settings: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" options={{ headerShown: false, title: 'Home' }} component={TabNavigator} />
      <Stack.Screen name="VideoDetails" component={VideoDetailsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
