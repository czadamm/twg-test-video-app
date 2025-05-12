import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { CombinedNavigatorsParamList } from '@/src/navigators/types';
import { useSearch } from '@/src/hooks/useSearch';
import { SearchIcon, SettingsIcon } from '@/src/components/icons';
import IconButton from '@/src/components/ui/IconButton';

export default function SearchBar() {
  const insets = useSafeAreaInsets();
  const { searchQuery, setSearchQuery } = useSearch();
  const navigation = useNavigation<CombinedNavigatorsParamList>();

  const handleSearchInputPress = () => {
    navigation.navigate('Main', { screen: 'Search' });
  };

  return (
    <View style={[styles.barContainer, { paddingTop: insets.top }]}>
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <View style={styles.searchIcon}>
            <SearchIcon />
          </View>
          <TextInput
            onPress={handleSearchInputPress}
            style={styles.input}
            placeholder="Search videos"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <IconButton
          size={32}
          backgroundStyle={{ padding: 0, backgroundColor: 'transparent' }}
          onPress={() => {}}
          absolute={false}
        >
          <SettingsIcon />
        </IconButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 8,
    gap: 16,
    backgroundColor: Colors.light.background,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.light.primary,
  },
  searchIcon: {
    marginRight: 12,
    width: 24,
    height: 24,
  },
  input: {
    width: '100%',
    fontSize: 16,
    lineHeight: Platform.OS !== 'ios' ? 24 : 20, // fix for iOS
    paddingBottom: 0,
    paddingTop: 0,
    textAlignVertical: 'center',
  },
});
