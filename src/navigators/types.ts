import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/core';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackNavigatorParamList = {
  Login: undefined;
  Main: NavigatorScreenParams<TabNavigatorParamList>;
  VideoDetails: { videoId: string };
  Settings: undefined;
};

export type TabNavigatorParamList = {
  Home: undefined;
  Search: { query: string } | undefined;
};

export type SearchNavigatorParamList = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigatorParamList>,
  NativeStackNavigationProp<StackNavigatorParamList>
>;
