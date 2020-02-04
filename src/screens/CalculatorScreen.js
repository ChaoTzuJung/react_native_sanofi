import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Button } from 'react-native';
import styled, { withTheme }  from 'styled-components/native';
import { connect } from 'react-redux';
import LogoTitle from 'components/Common/LogoTitle';
import Carousel from 'components/Common/Carousel';
import CustomText from 'components/Common/CustomText';
import Accordion, { AccordionItem } from 'components/Common/Accordion';
import Footer from 'components/Common/Footer';
import RadioCardList from 'components/Common/RadioCardList';

import { symptomData, tabData } from 'models/calculator';
import NeckBack from 'assets/neck-back.svg';
import NeckFront from 'assets/neck-front.svg'; 

import { patientAction } from 'actions/patient';


const CalculatorScreen = ({ navigation, theme, patient, patientTest }) => {
    const [value, onChangeText] = React.useState('');
    const [areaPoint, setAreaPoint] = React.useState(0);

    // NOTE: 用字串 0 去避免一開始 Radio index 跟 value 比較時 相同，導致redio 0號預設先亮起
    const [symptomScore, updateSymptomScore] = React.useState({
        Erythema: '0',
        'Edema / papulation': '0',
        Excoriation: '0',
        Lichenification: '0',
    });

    console.log(symptomScore);

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

    const handleRadioCardListChange = (name, score) => {
        console.log('handleRadioCardListChange',name, score);
        updateSymptomScore(() => ({
            ...symptomScore,
            [name]: score,
        }))
    };

    return (
        <ScrollView>
            <ScreenTitle>Calculator</ScreenTitle>
            <Description>Determine the severity of atopic dermatitis in each of the four body regions.</Description>
            <Carousel data={tabData} render={props => (
                // <View> 
                //     <View style={{ paddingHorizontal: 20 }}>
                //         <BodySection>
                //             <BodyPart>
                //                 <BodyText>Front</BodyText>
                //                 {props.front}
                //             </BodyPart>
                //             <BodyPart>
                //                 <BodyText>Back</BodyText>
                //                 {props.back}
                //             </BodyPart>
                //         </BodySection>
                //         <SubTitle>
                //             Area score:&nbsp;
                //             <CustomText font="normal" size="h5" color="#333333" value={`${areaPoint}.0`} />
                //         </SubTitle>
                //         <CustomText size="h6" color="#333333" value="%Involvement:" style={{ lineHeight: 24 }}/>
                //         <InputArea
                //             onChangeText={text => computedAreaScore(text)}
                //             value={value}
                //         />
                //         <CustomText color={theme.brown} value="*Given each respective body region a score between 0 and 6 based on the estimated percentage involment." style={{ lineHeight: 20 }} />
                //         <SubTitle>EASI lesion severity atlas</SubTitle>
                //     </View>
                //     <Accordion defaultIndex={null} onItemClick={console.log}>
                //         {
                //             symptomData.map(symptom => (
                //                 <AccordionItem 
                //                     key={symptom.id} 
                //                     label={`${symptom.name}: ${symptomScore[symptom.name]}`}
                //                     index={symptom.id}
                //                 >
                //                     <RadioCardList currentScore={symptomScore[symptom.name]} listData={symptom.data} onChangeRadioCardList={(index) => handleRadioCardListChange(symptom.name, index)} />
                //                 </AccordionItem>
                //             ))
                //         }
                //     </Accordion>
                // </View>
            )}/>
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

const mapStateToProps = ({ patient }) => ({
	patient,
});

const mapDispatchToProps = dispatch => ({
	patientTest: () => dispatch(patientAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(CalculatorScreen));