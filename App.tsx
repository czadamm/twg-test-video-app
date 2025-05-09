import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "@/src/screens/Login";
import MainScreen from "@/src/screens/Main";
import SearchScreen from "@/src/screens/Search";
import VideoDetailsScreen from "@/src/screens/VideoDetails";
import SettingsScreen from "@/src/screens/Settings";

export type RootStackParamList = {
    Login: undefined;
    Main: undefined;
    Search: undefined;
    VideoDetails: { videoId: string };
    Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="VideoDetails" component={VideoDetailsScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}