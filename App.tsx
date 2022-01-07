import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import AsyncStorage from '@react-native-async-storage/async-storage';

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FCC603',
    accent: '#f1c40f',
  },
};

export default function App({ navigation }) {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}
