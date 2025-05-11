import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '@/src/navigators/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SearchContextProvider } from '@/src/contexts/searchContext';
import { View } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <SearchContextProvider>
        <NavigationContainer>
          <View style={{ flex: 1 }}>
            <StackNavigator />
          </View>
        </NavigationContainer>
      </SearchContextProvider>
    </SafeAreaProvider>
  );
}
