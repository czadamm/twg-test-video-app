import { YouTubeSearchItem } from '@/src/services/types';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type VideoThumbnailProps = {
  source: string;
};

export type VideoListItemProps = {
  thumbnailImage: string;
  videoId: string;
  title: string;
  publishDate: string;
  size: 'small' | 'medium' | 'large';
  channelName?: string;
};

export type VideosListProps = {
  videos: YouTubeSearchItem[];
  keyword?: string;
  horizontal?: boolean;
  itemSize?: 'small' | 'medium' | 'large';
  channelName?: boolean;
};

export enum EstimatedListItemSize {
  small = 100,
  medium = 180,
  large = 320,
}

type ItemSizeVariant = 'small' | 'medium' | 'large';

type ItemVariantStyles = {
  itemContainer: ViewStyle;
  infoContainer: ViewStyle;
  channel: TextStyle;
  title: TextStyle;
  date: TextStyle;
};

export type ItemSizeStyles = {
  [key in ItemSizeVariant]: ReturnType<typeof StyleSheet.create<ItemVariantStyles>>;
};

export type VideoPlayerProps = {
  source: { uri?: string | NodeRequire | undefined };
  customControls?: boolean;
};
