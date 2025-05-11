import { Button, Text, View } from 'react-native';
import * as React from 'react';
import { SearchResultState, SearchScreenProps } from '@/src/screens/types';
import { useSearch } from '@/src/hooks/useSearch';
import { useState } from 'react';
import { getTestVideoData } from '@/src/services/youtubeService';
import { YouTubeSearchItem, YouTubeSearchResponse } from '@/src/services/types';

export default function SearchScreen({ navigation }: SearchScreenProps) {
  const { searchQuery } = useSearch();
  const [results, setResults] = useState<SearchResultState>([]);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);

  const fetchVideos = async () => {
    setLoading(true);

    try {
      const data = await new Promise<YouTubeSearchResponse>((resolve) => {
        setTimeout(() => {
          resolve(getTestVideoData(initialLoad));
        }, 100);
      });
      // const data = await getVideosByQuery({ query: topic.keyword, maxPerPage: 15 });
      const newVideos = data.items.filter((item: YouTubeSearchItem) => item.id.kind === 'youtube#video');

      setResults((prevState) => [...prevState, ...newVideos]);
    } catch (error) {
      console.error(`Error` + error);
    }

    setLoading(false);
    setInitialLoad(false);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{`Query: ${searchQuery}`}</Text>
      <Button title={'Home'} onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
