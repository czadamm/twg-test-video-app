import { ActivityIndicator, ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { MainScreenProps, VideoListsState } from '@/src/screens/types';
import { useEffect, useMemo, useState } from 'react';
import { YouTubeSearchItem, YouTubeSearchResponse } from '@/src/services/types';
import { getTestVideosData, getVideosByQuery } from '@/src/services/youtubeService';
import VideosList from '@/src/components/VideosList';
import { Colors } from '../constants/Colors';
import { useSearch } from '@/src/hooks/useSearch';
import { useFocusEffect } from '@react-navigation/core';
import StyledText from '@/src/components/ui/StyledText';

export default function HomeScreen({ navigation }: MainScreenProps) {
  const [videos, setVideos] = useState<VideoListsState>({});
  const [initialLoad, setInitialLoad] = useState<boolean>(true); // setting to true to load initial videos lists
  const [loading, setLoading] = useState<boolean>(false);
  const { setSearchQuery } = useSearch();

  const topics = useMemo(
    () => [
      { keyword: 'react native', title: 'React Native' },
      { keyword: 'react js', title: 'React' },
      { keyword: 'typescript', title: 'TypeScript' },
      { keyword: 'javascript', title: 'JavaScript' },
    ],
    []
  );

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);

      for (let topic of topics) {
        try {
          // const data = await new Promise<YouTubeSearchResponse>((resolve) => {
          //   setTimeout(() => {
          //     resolve(getTestVideosData(initialLoad));
          //   }, 100);
          // });
          const data = await getVideosByQuery({ query: topic.keyword, maxPerPage: 15 });
          const newVideos = data.items.filter((item: YouTubeSearchItem) => item.id.kind === 'youtube#video');

          setVideos((prevState) => ({
            ...prevState,
            [topic.keyword]: {
              list: [...(prevState[topic.keyword]?.list || []), ...newVideos],
            },
          }));
        } catch (error) {
          console.error(`Error with fetching data for ${topic.keyword}` + error);
        }
      }

      setLoading(false);
      setInitialLoad(false);
    };

    initialLoad && fetchVideos().catch((error) => console.error(error));
  }, [initialLoad, topics]);

  const handleShowMore = (query: string) => {
    navigation.navigate('Search');
    setSearchQuery(query);
  };

  useFocusEffect(() => {
    setSearchQuery('');
  });

  return (
    <View style={styles.contentContainer}>
      {initialLoad && loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ScrollView>
          {topics.map((topic, index) => (
            <View key={topic.keyword} style={[styles.list, { borderTopWidth: index > 0 ? 2 : 0 }]}>
              <View style={styles.titleRow}>
                <StyledText style={styles.title}>{topic.title}</StyledText>
                <TouchableOpacity onPress={() => handleShowMore(topic.keyword)}>
                  <StyledText style={styles.showMoreButton}>Show more</StyledText>
                </TouchableOpacity>
              </View>
              <VideosList videos={videos[topic.keyword]?.list} keyword={topic.keyword} />
            </View>
          ))}
        </ScrollView>
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
  list: {
    paddingTop: 8,
    paddingBottom: 24,
    borderColor: Colors.light.primary,
  },
  titleRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  showMoreButton: {
    textDecorationLine: 'underline',
    fontSize: 12,
    lineHeight: 24,
  },
});
