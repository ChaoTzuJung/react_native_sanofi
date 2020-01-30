import React, { useState, useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styled, { ThemeProvider } from 'styled-components';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import HomeScreen from './src/screens/HomeScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';
import PatientScreen from './src/screens/PatientScreen';
import ReportScreen from './src/screens/ReportScreen';
import ModalScreen from './src/screens/ModalScreen';

const fetchFonts = async () => (
  await Font.loadAsync({
    'ITCAvantGardeProBk': require('./assets/fonts/ITCAvantGardePro-Bk.otf'),
    'ITCAvantGardeProMd': require('./assets/fonts/ITCAvantGardePro-Md.otf'),
    'ITCAvantGardeProBold': require('./assets/fonts/ITCAvantGardePro-Bold.otf'),
    'ITCAvantGardeProBkItalic': require('./assets/fonts/ITCAvantGardePro-Bk-italic.otf'),
    'ITCAvantGardeProBoldItalic': require('./assets/fonts/ITCAvantGardePro-Bold-italic.otf'),
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
  white: "#ffffff",
  yellow: "#f0dd00",
  green: "#00a590",
  orange: "#fbba00",
  lightGreen: "#bcbc1c",
};

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Calculator: {
      screen: CalculatorScreen,
    },
    Patient: {
      screen: PatientScreen,
    },
    Report: {
      screen: ReportScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      // title: 'Sanofi Easiscore',
      headerStyle: {
        backgroundColor: '#FFF',
      },
      headerTintColor: '#525ca3',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    mode: 'card',
    keyboardHandlingEnabled: true,
  }
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

const App = () => {
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
      <AppContainer />
    </ThemeProvider>
  )
};

export default App;