import HomeScreen from '@/src/screens/Home';
import SearchScreen from '@/src/screens/Search';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigatorParamList } from '@/src/navigators/types';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ animation: 'fade', headerTransparent: true }}>
      <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Tab.Screen name="Search" options={{ headerShown: false }} component={SearchScreen} />
    </Tab.Navigator>
  );
}
