import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import CalculatorLayout from '../layouts/CalculatorLayout';
import LogoTitle from 'components/Common/LogoTitle';
import Carousel from 'components/Common/Carousel';
import CustomText from 'components/Common/CustomText';
import Footer from 'components/Common/Footer';

import { tabData } from 'models/calculator';

const CalculatorScreen = ({ navigation, theme, patient, patientTest }) => (
    <ScrollView>
        <ScreenTitle>Calculator</ScreenTitle>
        <Description>Determine the severity of atopic dermatitis in each of the four body regions.</Description>
        <Carousel data={tabData} render={props => <CalculatorLayout {...props} />} />
        <Footer />
    </ScrollView>
)


CalculatorScreen.navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
        headerTitle: () => <CustomText font="normal" size="h6" color="#333333" value="Calculator" />
    };
};

const ScreenTitle = styled.Text`
    margin-top: 40px;
    padding: 0 20px;
    height: 32px;
    color: #000000;
    text-align: center;
    font-family: 'ITCAvantGardeProBk';
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.5px;
`;

const Description = styled.Text`
    margin: auto;
    padding: 10px 20px;
    color: #000000;
    text-align: left;
    font-family: 'ITCAvantGardeProBk';
    font-size: 16px;
    line-height: 24px;
    opacity: 0.5;
`;

export default CalculatorScreen;
