import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import VideoThumbnail from '@/src/components/VideoThumbnail';
import { ItemSizeStyles, VideoListItemProps } from '@/src/components/types';
import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CombinedNavigatorsParamList } from '@/src/navigators/types';

// React.memo for avoiding re-render list items when no props changed
const VideoListItem = memo(function VideoListItem({
  thumbnailImage,
  videoId,
  title,
  publishDate,
  size,
  channelName,
}: VideoListItemProps) {
  const navigation = useNavigation<CombinedNavigatorsParamList>();

  function redirectToDetails() {
    navigation.navigate('VideoDetails', { videoId: videoId });
  }

  return (
    <TouchableOpacity onPress={redirectToDetails}>
      <View style={styles[size].itemContainer}>
        <VideoThumbnail source={thumbnailImage} />
        <View style={styles[size].infoContainer}>
          {channelName && <Text style={styles[size].channel}>{channelName}</Text>}
          <Text numberOfLines={2} style={styles[size].title}>
            {title}
          </Text>
        </View>
        <Text style={styles[size].date}>{new Date(publishDate).toLocaleDateString()}</Text>
      </View>
    </TouchableOpacity>
  );
});

const styles: ItemSizeStyles = {
  small: StyleSheet.create({
    itemContainer: {
      paddingBottom: 16,
      width: 100,
      height: 'auto',
    },
    infoContainer: {
      paddingHorizontal: 0,
    },
    channel: {
      marginVertical: 16,
      fontSize: 12,
      lineHeight: 12,
    },
    title: {
      width: '100%',
      height: 'auto',
      marginTop: 4,
      fontSize: 10,
      lineHeight: 10,
    },
    date: {
      alignSelf: 'flex-end',
      fontSize: 10,
      lineHeight: 18,
    },
  }),
  medium: StyleSheet.create({
    itemContainer: {
      paddingBottom: 16,
      width: 180,
      height: 'auto',
    },
    infoContainer: {
      paddingHorizontal: 0,
    },
    channel: {
      marginVertical: 16,
      fontSize: 12,
      lineHeight: 12,
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
  }),
  large: StyleSheet.create({
    itemContainer: {
      paddingBottom: 16,
      width: '100%',
      height: 'auto',
    },
    infoContainer: {
      paddingHorizontal: 8,
    },
    channel: {
      marginVertical: 16,
      fontSize: 12,
      lineHeight: 12,
    },
    title: {
      width: '100%',
      height: 'auto',
      marginTop: 4,
      fontSize: 15,
      lineHeight: Platform.OS !== 'ios' ? 12 : 15, // fix for iOS
    },
    date: {
      marginTop: 8,
      alignSelf: 'flex-end',
      fontSize: 10,
      lineHeight: 24,
    },
  }),
};

export default VideoListItem;
