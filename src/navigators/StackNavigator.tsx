import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideoDetailsScreen from '@/src/screens/VideoDetails';
import SettingsScreen from '@/src/screens/Settings';
import LoginScreen from '@/src/screens/Login';
import * as React from 'react';
import { TabNavigator } from '@/src/navigators/TabNavigator';
import { StackNavigatorParamList } from '@/src/navigators/types';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
      <Stack.Screen name="Main" options={{ headerShown: false, title: 'Home' }} component={TabNavigator} />
      <Stack.Screen name="VideoDetails" options={{ headerShown: false }} component={VideoDetailsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
