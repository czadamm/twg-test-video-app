import HomeScreen from '@/src/screens/Home';
import SearchScreen from '@/src/screens/Search';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigatorParamList } from '@/src/navigators/types';
import SearchBar from '../components/SearchBar';
import { View } from 'react-native';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export function TabNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <Tab.Navigator
        screenOptions={{
          animation: 'fade',
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </View>
  );
}
