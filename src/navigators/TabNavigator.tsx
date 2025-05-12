import HomeScreen from '@/src/screens/Home';
import SearchScreen from '@/src/screens/Search';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigatorParamList } from '@/src/navigators/types';
import SearchBar from '../components/SearchBar';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import { HomeIcon, SearchIcon } from '@/src/components/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export function TabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          animation: 'fade',
          headerShown: false,
          tabBarStyle: {
            paddingTop: 10,
            paddingBottom: 0,
            backgroundColor: Colors.light.primaryContainer,
            height: insets.bottom + 72,
          },
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Home') {
              return focused ? <HomeIcon /> : <HomeIcon color={Colors.light.onPrimaryContainer} />;
            } else if (route.name === 'Search') {
              return focused ? <SearchIcon /> : <SearchIcon color={Colors.light.onPrimaryContainer} />;
            }
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={
                  (styles.tabLabel,
                  {
                    color: focused ? Colors.light.primary : Colors.light.onPrimaryContainer,
                  })
                }
              >
                {route.name}
              </Text>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 32,
    height: 32,
  },
  tabLabel: {
    fontSize: 16,
    lineHeight: 24,
  },
});
