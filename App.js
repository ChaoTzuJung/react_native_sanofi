import React, { useState, useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styled, { ThemeProvider } from 'styled-components';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './src/components/Common/Header';

import HomeScreen from './src/screens/HomeScreen';
import CaculatorScreen from './src/screens/CaculatorScreen';
import PatientScreen from './src/screens/PatientScreen';
import ReportScreen from './src/screens/ReportScreen';

const fetchFonts = async () => (
  await Font.loadAsync({
    'ITCAvantGardeProBk': require('./assets/fonts/ITCAvantGardePro-Bk.otf'),
    'ITCAvantGardeProMd': require('./assets/fonts/ITCAvantGardePro-Md.otf'),
    'ITCAvantGardeProBold': require('./assets/fonts/ITCAvantGardePro-Bold.otf'),
    'ITCAvantGardeProBkItalic': require('./assets/fonts/ITCAvantGardePro-Bk-italic.otf'),
    'ITCAvantGardeProBoldItalic': require('./assets/fonts/ITCAvantGardePro-Bold-italic.otf'),
  })
);

const Navigation = createStackNavigator(
  {
    Home: HomeScreen,
    Caculator: CaculatorScreen,
    Patient: PatientScreen,
    Report: ReportScreen,
  },
  {
    InitalRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Sanofi Easiscore'
    },
    mode: 'card',
    headerMode: 'none',
    keyboardHandlingEnabled: true,
  }
)

const App = createAppContainer(Navigation);

const theme = {
  main: "#bcbc1c",
  second: "#525ca3",
  warn: "#ea5d45",
  black: "#000000",
  dark: "#333333",
  gray: "#666666",
  lightGray: "#eeeeee",
  white: "#ffffff",
  yellow: "#f0dd00",
  green: "#00a590",
  orange: "#fbba00",
  lightGreen: "#bcbc1c",
};

export default () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

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
    <ThemeProvider theme={theme}>
      <Header />
      <App />
    </ThemeProvider>
  )
};
