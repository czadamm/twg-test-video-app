import { ActivityIndicator, View } from 'react-native';
import * as React from 'react';
import { MainScreenProps } from '@/src/screens/types';
import { useEffect, useState } from 'react';
import { YouTubeSearchItem } from '@/src/services/types';
import { getVideosByQuery } from '@/src/services/youtubeService';
import { FlashList } from '@shopify/flash-list';
import VideoListItem from '@/src/components/VideoListItem';

export default function HomeScreen({ navigation }: MainScreenProps) {
  const [videos, setVideos] = useState<YouTubeSearchItem[]>([]);
  const [initialLoad, setInitialLoad] = useState<boolean>(true); // setting to true to load initial videos lists
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchVideos = async () => {
    setLoading(true);

    try {
      const data = await getVideosByQuery({ query: 'react native' });
      const newVideos = data.items.filter((item) => item.id.kind === 'youtube#video');

      setVideos((prevState) => [...prevState, ...newVideos]);
      setNextPageToken(data.nextPageToken || null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setInitialLoad(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {initialLoad && loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlashList
          data={videos}
          renderItem={({ item }) => (
            <VideoListItem
              thumbnailImage={item.snippet.thumbnails.medium.url}
              title={item.snippet.title}
              publishDate={item.snippet.publishedAt}
              size={'medium'}
            />
          )}
        />
      )}
    </View>
  );
}
