import type { CompositeScreenProps } from '@react-navigation/core';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { StackNavigatorParamList, TabNavigatorParamList } from '@/src/navigators/types';
import { YouTubeSearchItem } from '@/src/services/types';

export type LoginScreenProps = NativeStackScreenProps<StackNavigatorParamList, 'Login'>;

export type MainScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabNavigatorParamList, 'Home'>,
  NativeStackScreenProps<StackNavigatorParamList>
>;

export type SearchScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabNavigatorParamList, 'Search'>,
  NativeStackScreenProps<StackNavigatorParamList>
>;

export type SettingsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<StackNavigatorParamList, 'Settings'>,
  BottomTabScreenProps<TabNavigatorParamList>
>;

export type VideoDetailsScreenProps = NativeStackScreenProps<StackNavigatorParamList, 'VideoDetails'>;

export type VideoListsState = {
  [keyword: string]: {
    list: YouTubeSearchItem[];
  };
};

export type SearchResultState = YouTubeSearchItem[];
