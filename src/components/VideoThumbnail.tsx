import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { VideoThumbnailProps } from '@/src/components/types';

const blurHash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function VideoThumbnail({ source }: VideoThumbnailProps) {
  return (
    <View style={styles.thumbnailContainer}>
      <Image style={styles.thumbnail} source={source} contentFit="cover" transition={500} placeholder={blurHash} />
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnailContainer: {
    borderRadius: 16,
    width: '100%',
    height: 'auto',
    aspectRatio: '1.61/1',
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
});
