import VideoListItem from '@/src/components/VideoListItem';
import { FlashList } from '@shopify/flash-list';
import * as React from 'react';
import { EstimatedListItemSize, VideosListProps } from '@/src/components/types';
import { StyleSheet, View } from 'react-native';

export default function VideosList({
  videos,
  keyword,
  horizontal = true,
  itemSize = 'medium',
  channelName = false,
}: VideosListProps) {
  const estItemSize: keyof typeof EstimatedListItemSize = itemSize;

  return (
    <FlashList
      data={videos}
      horizontal={horizontal}
      estimatedItemSize={EstimatedListItemSize[estItemSize]}
      keyExtractor={(item, index) => `${keyword}-${item.id.videoId}`}
      renderItem={({ item }) => (
        <VideoListItem
          thumbnailImage={item.snippet.thumbnails[itemSize]?.url ?? item.snippet.thumbnails?.default.url}
          title={item.snippet.title}
          publishDate={item.snippet.publishedAt}
          size={itemSize}
          channelName={channelName ? item.snippet.channelTitle : undefined}
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
