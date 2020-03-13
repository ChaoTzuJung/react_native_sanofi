import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from '@/store';
import { AppContainer } from '@/screens';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { registerForPushNotificationsAsync } from 'utils/notification';

const fetchFonts = async () => (
  await Font.loadAsync({
    'ITCAvantGardeProBk': require('assets/fonts/ITCAvantGardePro-Bk.otf'),
    'ITCAvantGardeProMd': require('assets/fonts/ITCAvantGardePro-Md.otf'),
    'ITCAvantGardeProBold': require('assets/fonts/ITCAvantGardePro-Bold.otf'),
    'ITCAvantGardeProBkItalic': require('assets/fonts/ITCAvantGardePro-Bk-italic.otf'),
    'ITCAvantGardeProBoldItalic': require('assets/fonts/ITCAvantGardePro-Bold-italic.otf'),
    'Arial': require('assets/fonts/Arial.ttf'),
  })
);

const theme = {
  main: "#bcbc1c",
  second: "#525ca3",
  warn: "#ea5d45",
  black: "#000000",
  dark: "#333333",
  gray: "#666666",
  lightGray: "#eeeeee",
  brown: "#a77f7f",
  white: "#ffffff",
  yellow: "#f0dd00",
  green: "#00a590",
  orange: "#fbba00",
  lightGreen: "#bcbc1c",
};

const store = configureStore({});

const App = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  useEffect(() => {
    await registerForPushNotificationsAsync();
  }, [])
  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setAssetsLoaded(true)}
        onError={(err) => console.error('Error loading assets: ', err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </Provider>
  )
};

export default App;