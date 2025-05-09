import HomeScreen from '@/src/screens/Home';
import SearchScreen from '@/src/screens/Search';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// tab nav routes params (undefined for no params)
export type TabNavigatorParamList = {
  Home: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Tab.Screen name="Search" options={{ headerShown: false }} component={SearchScreen} />
    </Tab.Navigator>
  );
}
