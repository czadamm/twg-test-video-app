import { Linking, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { LoginScreenProps } from '@/src/screens/types';
import { Colors } from '@/src/constants/Colors';
import { Image } from 'expo-image';
import textLogo from '@/src/assets/images/logo.png';
import appLogo from '@/src/assets/images/app-icon.png';
import StyledText from '@/src/components/ui/StyledText';
import Button from '@/src/components/ui/Button';

export default function LoginScreen({ navigation }: LoginScreenProps) {
  function handleRedirectToHome() {
    navigation.navigate('Main', { screen: 'Home' });
  }

  function handleRedirectToPolicy() {
    Linking.openURL('https://www.thewidlarzgroup.com');
  }

  return (
    <View style={styles.contentContainer}>
      <Image source={textLogo} style={styles.textLogo} />
      <Image source={appLogo} style={styles.appLogo} />
      <View style={styles.welcomeContainer}>
        <StyledText style={styles.welcomeMessage} semibold>
          Welcome to the best YouTube-based learning application.
        </StyledText>
        <Button style={styles.loginButton} onPress={handleRedirectToHome}>
          Lon in as guest
        </Button>
        <View>
          <StyledText style={styles.linksText}>{`By continuing you agree with `}</StyledText>
          <StyledText>
            <StyledText style={styles.link} onPress={handleRedirectToPolicy}>
              Terms and Conditions
            </StyledText>
            <StyledText style={styles.linksText}>{` and `}</StyledText>
            <StyledText style={styles.link} onPress={handleRedirectToPolicy}>
              Privacy Policy
            </StyledText>
          </StyledText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.light.primaryContainer,
  },
  textLogo: {
    width: 292,
    height: 116,
  },
  appLogo: {
    width: 128,
    height: 128,
  },
  welcomeContainer: {
    width: '100%',
    paddingHorizontal: 32,
    gap: 24,
    paddingBottom: 48,
  },
  welcomeMessage: {
    fontSize: 22,
    lineHeight: 24,
    color: Colors.light.onPrimaryContainer,
  },
  loginButton: {
    width: '100%',
    maxWidth: 'auto',
  },
  linksText: {
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
    color: Colors.light.onPrimaryContainer,
  },
  link: {
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
