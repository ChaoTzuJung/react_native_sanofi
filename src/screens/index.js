import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import CalculatorScreen from './CalculatorScreen';
import PatientScreen from './PatientScreen';
import ReportScreen from './ReportScreen';
import ModalScreen from './ModalScreen';
import TableModalScreen from './TableModalScreen';

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
        TableModal: {
            screen: TableModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

export const AppContainer = createAppContainer(RootStack);