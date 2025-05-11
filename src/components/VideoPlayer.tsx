import Video from 'react-native-video';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { VideoPlayerProps } from '@/src/components/types';

export default function VideoPlayer({ source, customControls }: VideoPlayerProps) {
  return (
    <View style={styles.playerContainer}>
      <Video
        source={source}
        resizeMode="contain"
        style={styles.player}
        controls={!customControls}
        paused={true}
        fullscreen={false}
        muted={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    position: 'relative',
  },
  player: {
    width: '100%',
    height: '100%',
  },
});
