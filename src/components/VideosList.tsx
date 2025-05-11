import VideoListItem from '@/src/components/VideoListItem';
import { FlashList } from '@shopify/flash-list';
import * as React from 'react';
import { VideosListProps } from '@/src/components/types';
import { StyleSheet, View } from 'react-native';

export default function VideosList({ videos, keyword }: VideosListProps) {
  return (
    <FlashList
      data={videos}
      horizontal={true}
      estimatedItemSize={180}
      keyExtractor={(item, index) => `${keyword}-${item.id.videoId}`}
      renderItem={({ item }) => (
        <VideoListItem
          thumbnailImage={item.snippet.thumbnails.medium.url}
          title={item.snippet.title}
          publishDate={item.snippet.publishedAt}
          size={'medium'}
        />
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
    />
  );
}

const styles = StyleSheet.create({
  itemSeparator: {
    margin: 8,
  },
});
