import { YouTubeSearchItem } from '@/src/services/types';

export type VideoThumbnailProps = {
  source: string;
};

export type VideoListItemProps = {
  thumbnailImage: string;
  title: string;
  publishDate: string;
  size: 'small' | 'medium' | 'large';
};

export type VideosListProps = {
  videos: YouTubeSearchItem[];
  keyword: string;
};
