import { Text, View } from 'react-native';
import * as React from 'react';
import { VideoDetailsScreenProps } from '@/src/screens/types';

export default function VideoDetailsScreen({ route, navigation }: VideoDetailsScreenProps) {
  const videoId = route.params.videoId;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{`Video: ${videoId}`}</Text>
    </View>
  );
}
