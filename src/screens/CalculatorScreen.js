import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import styled, { withTheme }  from 'styled-components/native';
import LogoTitle from '../components/Common/LogoTitle';
import Carousel from '../components/Common/Carousel';
import CustomText from '../components/Common/CustomText';
import Accordion, { AccordionItem } from '../components/Common/Accordion';
import Footer from '../components/Common/Footer';
import RadioCard from '../components/Common/RadioCard';

import { symptomData } from '../models/symptom';
import NeckBack from '../../assets/neck-back.svg';
import NeckFront from '../../assets/neck-front.svg'; 
import Test from '../../assets/Edema_Clear_Skin.jpg'; 

const DATA = [
    {
        id: '1',
        title: 'Head & Neck',
        score: 0
    },
    {
        id: '2',
        title: 'Upper extremities',
        score: 0
    },
    {
        id: '3',
        title: 'Trunk',
        score: 0
    },
    {
        id: '4',
        title: 'Lower extremities',
        score: 0
    },
    {
        id: '5',
        title: 'Result',
        score: 0
    },
];

const CalculatorScreen = ({ navigation, theme }) => {
    const [isModal, setModal] = React.useState(false);
    const [value, onChangeText] = React.useState('');
    const [areaPoint, setAreaPoint] = React.useState(0);
    const [bindRadioIndex, setBindRadio] = React.useState(null);
    const [score, setSymptomScore] = React.useState({
        Erythema: 0,
        'Edema / papulation': 0,
        Excoriation: 0,
        Lichenification: 0,
    });

    console.log('[state] score: ', score);

    const computedAreaScore = value => {
        onChangeText(value);
        const score = parseInt(value);
        let timeout;
        if (timeout) clearTimeout(timeout);

        // make lazy input
        timeout = setTimeout(() => {
            if (score >= 90 && score <= 100) setAreaPoint(6);
            if (score >= 70 && score <= 89) setAreaPoint(5);
            if (score >= 50 && score <= 69) setAreaPoint(4);
            if (score >= 30 && score <= 49) setAreaPoint(3);
            if (score >= 10 && score <= 29) setAreaPoint(2);
            if (score >= 1 && score <= 9) setAreaPoint(1);
            if (value == 0) setAreaPoint(0);

            // 超過 100
            if (score > 100) {
                onChangeText('');
                setAreaPoint(0);
            }
            // 負數
            if (score < 0) {
                onChangeText('');
                setAreaPoint(0);
            }

            // 中文文字 / 奇怪符號
            if (!score && score !== 0) {
                onChangeText('');
                setAreaPoint(0);
            }
        }, 100);
    };

    const changeRadio = (name, index) => {
        console.log('changeRadio index', index);
        console.log('changeRadio name', name);

        setBindRadio(index);
        setSymptomScore(() => ({
            ...score,
            [name]: index,
        }))
    };

    return (
        <ScrollView>
            <View style={{ paddingHorizontal: 20 }}>
                <ScreenTitle>Calculator</ScreenTitle>
                <Description>Determine the severity of atopic dermatitis in each of the four body regions.</Description>
                <Carousel data={DATA} />
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
                <CustomText size="h6" color="#333333" value="%Involvement:" style={{ lineHeight: 24 }}/>
                <InputArea
                    onChangeText={text => computedAreaScore(text)}
                    value={value}
                />
                <CustomText color={theme.brown} value="*Given each respective body region a score between 0 and 6 based on the estimated percentage involment." style={{ lineHeight: 20 }} />
                <SubTitle>EASI lesion severity atlas</SubTitle>
            </View>
            <Accordion defaultIndex="1" onItemClick={console.log}>
                {
                    symptomData.map(accordionItem => (
                        <AccordionItem key={accordionItem.id} label={`${accordionItem.name}: ${score[accordionItem.name]}`} index={accordionItem.id}>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={accordionItem.data}
                                keyExtractor={item => item.info}
                                renderItem={({ item, index }) => (
                                    <RadioCard 
                                        defaultIndex={index + 1}
                                        label={`${item.label}: ${index}`}
                                        image={item.image}
                                        info={item.info}
                                        isChecked={index + 1 === bindRadioIndex}
                                        changeRadio={() => changeRadio(accordionItem.name, index)}
                                    />
                                )}
                            />
                        </AccordionItem>
                    ))
                }
            </Accordion>
            <Footer />
        </ScrollView>
    )
};


CalculatorScreen.navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
        headerTitle: () => <CustomText font="normal" size="h6" color="#333333" value="Calculator" />
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
    margin-bottom: 8px;
    width: 100px;
    height: 40px;
    text-align: center;
    color: #000000;
    font-family: 'Arial';
    font-size: 24px;
    line-height: 32px;
    border: none;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.brown};
    opacity: 0.8;

`
export default withTheme(CalculatorScreen);