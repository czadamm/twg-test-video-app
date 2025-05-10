import { NavigatorScreenParams } from '@react-navigation/core';

export type StackNavigatorParamList = {
  Login: undefined;
  Main: NavigatorScreenParams<TabNavigatorParamList>;
  VideoDetails: { videoId: string };
  Settings: undefined;
};

export type TabNavigatorParamList = {
  Home: undefined;
  Search: undefined;
};
