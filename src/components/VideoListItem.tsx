import { StyleSheet, Text, View } from 'react-native';
import VideoThumbnail from '@/src/components/VideoThumbnail';
import { VideoListItemProps } from '@/src/components/types';
import { memo } from 'react';

// React.memo for avoiding re-render list items when no props changed
const VideoListItem = memo(function VideoListItem({ thumbnailImage, title, publishDate, size }: VideoListItemProps) {
  return (
    <View style={[styles.itemContainer, styles[size]]}>
      <VideoThumbnail source={thumbnailImage} />
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.date}>{new Date(publishDate).toLocaleDateString()}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  itemContainer: {
    paddingBottom: 16,
    width: '100%',
    height: 'auto',
  },
  small: {
    width: 100,
  },
  medium: {
    width: 180,
  },
  large: {
    width: '100%',
  },
  title: {
    width: '100%',
    height: 'auto',
    marginTop: 4,
    fontSize: 12,
    lineHeight: 12,
  },
  date: {
    alignSelf: 'flex-end',
    fontSize: 10,
    lineHeight: 24,
  },
});

export default VideoListItem;
