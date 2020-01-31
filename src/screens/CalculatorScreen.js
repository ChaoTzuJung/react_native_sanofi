import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Button } from 'react-native';
import styled from 'styled-components/native';
import LogoTitle from '../components/Common/LogoTitle';
import CustomText from '../components/Common/CustomText';
import Footer from '../components/Common/Footer';
import NeckBack from '../../assets/neck-back.svg';
import NeckFront from '../../assets/neck-front.svg'; 

const CalculatorScreen = ({ navigation }) => {
    const [isModal, setModal] = React.useState(false);
    const [value, onChangeText] = React.useState('');
    const [areaPoint, setAreaPoint] = React.useState(0);

    const computedAreaScore = value => {
        onChangeText(value);
        let timeout;
        if (timeout) clearTimeout(timeout);
        // make lazy input
        timeout = setTimeout(() => {
            if (parseInt(value) >= 90 && parseInt(value) <= 100) setAreaPoint(6);
            if (parseInt(value) >= 70 && parseInt(value) <= 89) setAreaPoint(5);
            if (parseInt(value) >= 50 && parseInt(value) <= 69) setAreaPoint(4);
            if (parseInt(value) >= 30 && parseInt(value) <= 49) setAreaPoint(3);
            if (parseInt(value) >= 10 && parseInt(value) <= 29) setAreaPoint(2);
            if (parseInt(value) >= 1 && parseInt(value) <= 9) setAreaPoint(1);
            if (parseInt(value) == 0) setAreaPoint(0);
            
            // 超過 100 / 負數
            if (parseInt(value) > 100 || parseInt(value) < 0) {
                onChangeText('');
                setAreaPoint(0);
            }

            // 中文文字 / 奇怪符號
            if (!Number(value)) {
                onChangeText('');
                setAreaPoint(0);
            }
        }, 100);
    };

    return (
        <ScrollView>
            <View style={{ paddingHorizontal: 20 }}>
                <ScreenTitle>Caculator</ScreenTitle>
                <Description>Determine the severity of atopic dermatitis in each of the four body regions.</Description>
                <BodySection>
                    <BodyPart>
                        <BodyText>Front</BodyText>
                        <NeckBack />
                    </BodyPart>
                    <BodyPart>
                        <BodyText>Back</BodyText>
                        <NeckFront />
                    </BodyPart>
                </BodySection>
                <SubTitle>
                    Area score:&nbsp;
                    <CustomText font="normal" size="h5" color="#333333" value={`${areaPoint}.0`} />
                </SubTitle>
                <InputArea
                    onChangeText={text => computedAreaScore(text)}
                    value={value}
                />
                <SubTitle>EASI lesion severity atlas</SubTitle>
                <Button title="Click Here" onPress={() => navigation.navigate('MyModal')}></Button>
            </View>
            <Footer />
        </ScrollView>
    )
};


CalculatorScreen.navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
        headerTitle: () => <Text style={{ fontFamily: 'ITCAvantGardeProBk', fontSize: 18 }}>Calculator</Text>,
    };
};


const ScreenTitle = styled.Text`
    margin-top: 40px;
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
    padding: 10px 0;
    color: #000000;
    text-align: left;
    font-family: 'ITCAvantGardeProBk';
    font-size: 16px;
    line-height: 24px;
    opacity: 0.5;
`;

const BodySection = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    width: 63%;
`

const BodyPart = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BodyText = styled.Text`
    margin-bottom: 14px;
    color: #000000;
    font-family: 'ITCAvantGardeProBk';
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.5px;
`

const SubTitle = styled.Text`
    margin: 40px 0 20px 0;
    color: #333333;
    font-family: 'ITCAvantGardeProMd';
    font-size: 20px;
    line-height: 30px;
`

const InputArea = styled.TextInput`
    width: 100px;
    height: 40px;
    width: 100px;
    text-align: center;
    color: #000000;
    font-family: 'Arial';
    font-size: 24px;
    line-height: 32px;
    border: none;
    border-bottom-width: 1px;
    border-bottom-color: #a77f7f;
    opacity: 0.8;

`

export default CalculatorScreen;