import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { SearchResultState, SearchScreenProps } from '@/src/screens/types';
import { useSearch } from '@/src/hooks/useSearch';
import { useEffect, useMemo, useRef, useState } from 'react';
import { getTestVideosData, getVideosByQuery } from '@/src/services/youtubeService';
import { YouTubeSearchItem, YouTubeSearchResponse } from '@/src/services/types';
import { Colors } from '../constants/Colors';
import VideosList from '@/src/components/VideosList';
import StyledText from '@/src/components/ui/StyledText';
import Modal from 'react-native-modal';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

export default function SearchScreen({ navigation }: SearchScreenProps) {
  const { searchQuery, sortingMethod, setSortingMethod } = useSearch();
  const [results, setResults] = useState<SearchResultState>([]);
  const [totalResultsCount, setTotalResultsCount] = useState(0);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);
  const [isSortingModalOpen, setIsSortingModalOpen] = useState(false);

  const fetchVideos = async () => {
    setLoading(true);
    setResults([]);
    setTotalResultsCount(0);

    try {
      // const data = await new Promise<YouTubeSearchResponse>((resolve) => {
      //   setTimeout(() => {
      //     resolve(getTestVideosData(initialLoad));
      //   }, 100);
      // });
      const data = await getVideosByQuery({ query: searchQuery, maxPerPage: 15, order: sortingMethod });
      const newVideos = data.items.filter((item: YouTubeSearchItem) => item.id.kind === 'youtube#video');

      setResults((prevState) => [...prevState, ...newVideos]);
      setTotalResultsCount(data.pageInfo.totalResults);
    } catch (error) {
      console.error(`Error` + error);
    }

    setLoading(false);
    setInitialLoad(false);
  };

  function handleOpenSortingModal() {
    setIsSortingModalOpen(true);
  }

  function handleCloseSortingModal() {
    setIsSortingModalOpen(false);
  }

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

  const sortButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: 'date', // acts as primary key, should be unique and non-empty string
        label: 'Upload date: latest',
      },
      {
        id: 'rating',
        label: 'Upload date: oldest',
      },
      {
        id: 'viewCount',
        label: 'Most popular',
      },
    ],
    []
  );

  function handleSetSorting(value: string) {
    setSortingMethod(value);
    handleCloseSortingModal();
  }

  return (
    <View style={styles.contentContainer}>
      {initialLoad && loading ? (
        <ActivityIndicator size="large" />
      ) : !results.length ? (
        <StyledText>No results found</StyledText>
      ) : (
        <>
          <View style={styles.listHeader}>
            <StyledText>
              <StyledText style={styles.queryText}>{`${totalResultsCount} results found for: “`}</StyledText>
              <StyledText style={styles.queryText} semibold>
                {searchQuery}
              </StyledText>
              <StyledText style={styles.queryText}>{`”`}</StyledText>
            </StyledText>
            <TouchableOpacity onPress={handleOpenSortingModal}>
              <StyledText>
                <StyledText style={styles.soringText}>{`Sort By: `}</StyledText>
                <StyledText style={styles.soringText} semibold>
                  {sortingMethod}
                </StyledText>
              </StyledText>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.list}>
              <VideosList videos={results} horizontal={false} itemSize={'large'} channelName={true} />
            </View>
          </ScrollView>
          <Modal isVisible={isSortingModalOpen}>
            <View style={styles.modal}>
              <StyledText style={styles.modalTitle}>Search records by:</StyledText>
              <RadioGroup
                radioButtons={sortButtons}
                onPress={handleSetSorting}
                selectedId={sortingMethod}
                containerStyle={{ alignItems: 'flex-start', paddingVertical: 24 }}
                labelStyle={{ color: Colors.light.onPrimaryContainer }}
              />
            </View>
          </Modal>
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
  listHeader: {
    width: '100%',
    paddingHorizontal: 24,
  },
  list: {
    width: Dimensions.get('window').width,
  },
  queryText: {
    textAlign: 'left',
    fontSize: 10,
    lineHeight: 24,
  },
  soringText: {
    textAlign: 'right',
    fontSize: 12,
    lineHeight: 24,
  },
  modal: {
    padding: 24,
    backgroundColor: Colors.light.primaryContainer,
    borderRadius: 24,
  },
  modalTitle: {
    fontSize: 18,
    color: Colors.light.onPrimaryContainer,
  },
});
