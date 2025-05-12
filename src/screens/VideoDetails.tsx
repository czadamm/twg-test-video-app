import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { VideoDetailsScreenProps } from '@/src/screens/types';
import { useEffect, useState } from 'react';
import { YouTubeVideoItem, YouTubeVideoResponse } from '@/src/services/types';
import { getTestVideoData, getVideoById } from '@/src/services/youtubeService';
import { Colors } from '@/src/constants/Colors';
import VideoPlayer from '@/src/components/VideoPlayer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PersonIcon from '@/src/components/icons/PersonIcon';
import { DetailsTabView } from '@/src/components/DetailsTabView';
import { TEST_NOTES } from '@/src/services/test-data';

export default function VideoDetailsScreen({ route, navigation }: VideoDetailsScreenProps) {
  const videoId = route.params.videoId;
  const [videoData, setVideoData] = useState<YouTubeVideoItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const insets = useSafeAreaInsets();

  const fetchVideoData = async () => {
    setLoading(true);

    try {
      const data = await new Promise<YouTubeVideoResponse>((resolve) => {
        setTimeout(() => {
          resolve(getTestVideoData(videoId));
        }, 100);
      });
      // const data = await getVideoById(videoId);

      console.log(data);

      setVideoData(data);
    } catch (error) {
      console.error(`Error` + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  return (
    <View style={styles.contentContainer}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />
      <View style={[styles.videoContainer, { paddingTop: insets.top }]}>
        <VideoPlayer source={require('@/src/assets/videos/broadchurch.mp4')} customControls />
      </View>
      <View style={styles.infoContainer}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : !videoData?.snippet ? (
          <Text>No data found</Text>
        ) : (
          <>
            <Text>{`Video: ${videoData?.snippet.title}`}</Text>
            <View style={styles.channelInfo}>
              <View style={styles.iconContainer}>
                <PersonIcon color={Colors.light.onPrimary} />
              </View>
              <Text>{videoData?.snippet.channelTitle}</Text>
            </View>
            <DetailsTabView
              description={videoData?.snippet.description}
              statistics={videoData?.statistics}
              notes={TEST_NOTES}
            />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  videoContainer: {
    width: '100%',
    height: 300,
    backgroundColor: 'black',
  },
  player: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  channelInfo: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    backgroundColor: Colors.light.primary,
    width: 48,
    height: 48,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  videoInfo: {
    flex: 1,
    gap: 16,
  },
  description: {
    gap: 8,
  },
  statistics: {
    gap: 8,
  },
  statisticsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customCard: {
    minWidth: 136,
    width: 'auto',
  },
});
