import { Text, View } from 'react-native';
import * as React from 'react';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type StackNavigatorParamList } from '@/src/navigators/StackNavigator';

type Props = NativeStackScreenProps<StackNavigatorParamList, 'VideoDetails'>;

export default function VideoDetailsScreen({ route, navigation }: Props) {
  const videoId = route.params.videoId;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{`Video: ${videoId}`}</Text>
    </View>
  );
}
