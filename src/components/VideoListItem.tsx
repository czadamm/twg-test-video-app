import { StyleSheet, Text, View } from 'react-native';
import VideoThumbnail from '@/src/components/VideoThumbnail';
import { VideoListItemProps } from '@/src/components/types';

export default function VideoListItem({ thumbnailImage, title, publishDate, size }: VideoListItemProps) {
  return (
    <View style={[styles.itemContainer, styles[size]]}>
      <VideoThumbnail source={thumbnailImage} />
      <Text numberOfLines={2}>{title}</Text>
      <Text>{new Date(publishDate).toLocaleDateString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {},
  small: {
    width: '20%',
  },
  medium: {
    width: '40%',
  },
  large: {
    width: '100%',
  },
});
