import {Button, Text, View} from "react-native";
import * as React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/App";

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function MainScreen({ navigation }: Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Main Screen</Text>
            <Button title={'Login'} onPress={()=> navigation.navigate('Login')} />
            <Button title={'Search'} onPress={()=> navigation.navigate('Search')} />
            <Button title={'VideoDetails'} onPress={()=> navigation.navigate('VideoDetails', {videoId: '001'})} />
        </View>
    );
}