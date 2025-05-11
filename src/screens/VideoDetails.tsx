import { StatusBar, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { VideoDetailsScreenProps } from '@/src/screens/types';
import { useEffect, useState } from 'react';
import { YouTubeSearchItem } from '@/src/services/types';
import { getTestVideoData, getTestVideosData } from '@/src/services/youtubeService';
import { Colors } from '@/src/constants/Colors';
import VideoPlayer from '@/src/components/VideoPlayer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function VideoDetailsScreen({ route, navigation }: VideoDetailsScreenProps) {
  const videoId = route.params.videoId;
  const [videoData, setVideoData] = useState<YouTubeSearchItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const insets = useSafeAreaInsets();

  const fetchVideoData = async () => {
    setLoading(true);

    try {
      const data = await new Promise<YouTubeSearchItem>((resolve) => {
        setTimeout(() => {
          resolve(getTestVideoData(videoId));
        }, 100);
      });
      // const data = await getVideoById(videoId);

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
        <VideoPlayer source={require('@/src/assets/videos/broadchurch.mp4')} customControls={true} />
      </View>
      <Text>{`Video: ${videoData?.snippet.title}`}</Text>
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
});
