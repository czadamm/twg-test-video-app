import { StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { SearchNavigatorParamList } from '@/src/navigators/types';
import { useSearch } from '@/src/hooks/useSearch';

export default function SearchBar() {
  const insets = useSafeAreaInsets();
  const { searchQuery, setSearchQuery } = useSearch();
  const navigation = useNavigation<SearchNavigatorParamList>();

  const handleSearchInputPress = () => {
    navigation.navigate('Main', { screen: 'Search' });
  };

  return (
    <View style={[styles.barContainer, { paddingTop: insets.top }]}>
      <View style={styles.inputContainer}>
        <TextInput
          onPress={handleSearchInputPress}
          style={styles.input}
          placeholder="Search videos"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    height: 'auto',
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: Colors.light.background,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.light.primary,
  },
  input: {
    height: 44,
    width: '100%',
    fontSize: 16,
    lineHeight: 20,
  },
});
