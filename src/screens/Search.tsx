import {
  ActivityIndicator,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as React from 'react';
import { SearchResultState, SearchScreenProps } from '@/src/screens/types';
import { useSearch } from '@/src/hooks/useSearch';
import { useEffect, useRef, useState } from 'react';
import { getTestVideosData, getVideosByQuery } from '@/src/services/youtubeService';
import { YouTubeSearchItem, YouTubeSearchResponse } from '@/src/services/types';
import { Colors } from '../constants/Colors';
import VideosList from '@/src/components/VideosList';

export default function SearchScreen({ navigation }: SearchScreenProps) {
  const { searchQuery, sortingMethod } = useSearch();
  const [results, setResults] = useState<SearchResultState>([]);
  const [totalResultsCount, setTotalResultsCount] = useState(0);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);

  const fetchVideos = async () => {
    setLoading(true);
    setResults([]);
    setTotalResultsCount(0);

    try {
      const data = await new Promise<YouTubeSearchResponse>((resolve) => {
        setTimeout(() => {
          resolve(getTestVideosData(initialLoad));
        }, 100);
      });
      // const data = await getVideosByQuery({ query: searchQuery, maxPerPage: 15 });
      const newVideos = data.items.filter((item: YouTubeSearchItem) => item.id.kind === 'youtube#video');

      setResults((prevState) => [...prevState, ...newVideos]);
      setTotalResultsCount(data.pageInfo.totalResults);
    } catch (error) {
      console.error(`Error` + error);
    }

    setLoading(false);
    setInitialLoad(false);
  };

  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      if (searchQuery.trim() === '') return;
      fetchVideos();
    }, 500);

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [searchQuery, sortingMethod]);

  return (
    <View style={styles.contentContainer}>
      {initialLoad && loading ? (
        <ActivityIndicator size="large" />
      ) : !results.length ? (
        <Text>No results found</Text>
      ) : (
        <>
          <View style={styles.listHeader}>
            <Text>
              <Text>{`${totalResultsCount} results found for: “`}</Text>
              <Text>{searchQuery}</Text>
              <Text>{`”`}</Text>
            </Text>
            <Text>
              <Text>{`Sort By: `}</Text>
              <Text>{sortingMethod}</Text>
            </Text>
          </View>
          <ScrollView>
            <View style={styles.list}>
              <VideosList videos={results} horizontal={false} itemSize={'large'} channelName={true} />
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
  },
  listHeader: {},
  list: {
    width: Dimensions.get('window').width,
  },
});
