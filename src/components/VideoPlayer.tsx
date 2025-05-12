import Video from 'react-native-video';
import * as React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { VideoPlayerProps } from '@/src/components/types';
import { useState } from 'react';

export default function VideoPlayer({ source, customControls }: VideoPlayerProps) {
  const [areControlsVisible, setAreControlsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  function toggleControls() {
    setAreControlsVisible((prevState) => !prevState);
  }

  return (
    <View style={styles.playerContainer}>
      <TouchableWithoutFeedback onPress={toggleControls}>
        <Video
          source={source}
          resizeMode="contain"
          style={styles.player}
          controls={!customControls}
          paused={isPaused}
          fullscreen={isFullScreen}
          muted={isMuted}
        />
      </TouchableWithoutFeedback>
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
