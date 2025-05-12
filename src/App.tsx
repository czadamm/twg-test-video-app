import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '@/src/navigators/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SearchContextProvider } from '@/src/contexts/searchContext';
import { View } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Poppins-Regular': require('@/src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('@/src/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('@/src/assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

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
