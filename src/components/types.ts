export type VideoThumbnailProps = {
  source: string;
};

export type VideoListItemProps = {
  thumbnailImage: string;
  title: string;
  publishDate: string;
  size: 'small' | 'medium' | 'large';
};
