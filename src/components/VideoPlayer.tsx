import Video, { VideoRef } from 'react-native-video';
import * as React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Text, Dimensions } from 'react-native';
import { VideoPlayerProps } from '@/src/components/types';
import { useEffect, useRef, useState } from 'react';
import { Colors } from '@/src/constants/Colors';
import * as Icons from '@/src/components/icons';
import IconButton from '@/src/components/ui/IconButton';
import { useNavigation } from '@react-navigation/native';
import { Slider } from '@react-native-assets/slider';

export default function VideoPlayer({ source, customControls }: VideoPlayerProps) {
  const [areControlsVisible, setAreControlsVisible] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const navigation = useNavigation();
  const videoRef = useRef<VideoRef>(null);

  function toggleControls() {
    setAreControlsVisible((prevState) => !prevState);
  }

  function togglePlayVideo() {
    setIsPaused((prevState) => !prevState);
  }

  function closeDetails() {
    navigation.goBack();
  }

  function openFullscreen() {
    setIsFullScreen(true);
  }

  function closeFullscreen() {
    setIsFullScreen(false);
  }

  function toggleMute() {
    setIsMuted((prevState) => !prevState);
  }

  function formatTime(seconds: number) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // auto hiding controls
  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setAreControlsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(visibilityTimer);
    };
  }, [isPaused, areControlsVisible, isMuted]);

  return (
    <View style={styles.playerContainer}>
      <TouchableWithoutFeedback onPress={toggleControls}>
        <Video
          ref={videoRef}
          source={source}
          resizeMode="contain"
          style={[styles.player, { opacity: areControlsVisible ? 0.5 : 1 }]}
          controls={!customControls}
          paused={isPaused}
          fullscreen={isFullScreen}
          muted={isMuted}
          onFullscreenPlayerWillDismiss={closeFullscreen}
          onLoad={(data) => {
            setVideoDuration(data.duration);
          }}
          onProgress={(data) => {
            setVideoCurrentTime(data.currentTime);
          }}
        />
      </TouchableWithoutFeedback>
      {customControls && areControlsVisible && (
        <>
          <IconButton onPress={closeDetails} size={32} position={{ top: 16, left: 12 }}>
            <Icons.LeftarrowIcon color={Colors.light.onPrimary} />
          </IconButton>
          <IconButton onPress={toggleMute} size={32} position={{ top: 16, right: 52 }}>
            <Icons.VolumeIcon color={Colors.light.onPrimary} />
          </IconButton>
          <IconButton onPress={() => {}} size={32} position={{ top: 16, right: 12 }}>
            <Icons.AirplayIcon color={Colors.light.onPrimary} />
          </IconButton>
          <IconButton
            onPress={openFullscreen}
            size={32}
            backgroundStyle={{ backgroundColor: 'transparent' }}
            position={{ bottom: 8, right: 6 }}
          >
            <Icons.FullscreenIcon color={Colors.light.onPrimary} />
          </IconButton>
          <IconButton
            onPress={togglePlayVideo}
            size={40}
            backgroundStyle={{ padding: 8 }}
            position={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {isPaused ? (
              <Icons.PlayIcon color={Colors.light.onPrimary} />
            ) : (
              <Icons.PauseIcon color={Colors.light.onPrimary} />
            )}
          </IconButton>
          <IconButton
            onPress={() => {}}
            size={32}
            backgroundStyle={{ padding: 4 }}
            position={{
              top: '50%',
              left: '25%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Icons.BackwardIcon color={Colors.light.onPrimary} />
          </IconButton>
          <IconButton
            onPress={() => {}}
            size={32}
            backgroundStyle={{ padding: 4 }}
            position={{
              top: '50%',
              right: '25%',
              transform: 'translate(50%, -50%)',
            }}
          >
            <Icons.ForwardIcon color={Colors.light.onPrimary} />
          </IconButton>
          <Text style={styles.playbackTime}>
            {formatTime(videoCurrentTime)} / {formatTime(videoDuration)}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={videoDuration}
            value={videoCurrentTime}
            minimumTrackTintColor={Colors.light.playerSliderTint}
            maximumTrackTintColor={Colors.light.borderLight}
            thumbTintColor={Colors.light.playerSliderTint}
            onSlidingComplete={(value) => {
              videoRef.current?.seek(value);
              setVideoCurrentTime(value);
            }}
          />
        </>
      )}
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
  playbackTime: {
    position: 'absolute',
    bottom: 12,
    left: 8,
    color: Colors.light.onPrimary,
  },
  slider: {
    position: 'absolute',
    height: 40,
    width: Dimensions.get('window').width + 16,
    paddingLeft: 0,
    marginLeft: 0,
    bottom: -18,
    left: -8,
    borderRadius: 0,
  },
});
