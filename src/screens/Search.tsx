import { Button, Text, View } from 'react-native';
import * as React from 'react';
import { SearchScreenProps } from '@/src/screens/types';

export default function SearchScreen({ navigation }: SearchScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Screen</Text>
      <Button title={'Home'} onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
