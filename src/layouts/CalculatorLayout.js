import React from 'react';
import { View , Text } from 'react-native';
import styled from 'styled-components/native';
import CustomText from 'components/Common/CustomText';
import Accordion, { AccordionItem } from 'components/Common/Accordion';
import RadioCardList from 'components/Common/RadioCardList';

import { symptomData } from 'utils/resources/static';
import { usePatient } from 'models/patient';

import NeckFront from 'assets/neck-front.svg'; 
import NeckBack from 'assets/neck-back.svg';
import ArmFront from 'assets/arm-front.svg'; 
import ArmBack from 'assets/arm-back.svg';
import BodyFront from 'assets/body-front.svg'; 
import BodyBack from 'assets/body-back.svg';
import LegFront from 'assets/leg-front.svg'; 
import LegBack from 'assets/leg-back.svg';

export const symptomContext = React.createContext(null);

const SvgComponent = ({ name }) => {
    let Component = <Text>沒圖片</Text>;
    switch(name) {
        case 'NeckFront':
            return <NeckFront />;
        case 'NeckBack':
            return <NeckBack />;
        case 'ArmFront':
            return <ArmFront />;
        case 'ArmBack':
            return <ArmBack />;
        case 'BodyFront':
            return <BodyFront />;
        case 'BodyBack':
            return <BodyBack />;
        case 'LegFront':
            return <LegFront />;
        case 'LegBack':
            return <LegBack />;
    }

    return Component;
};

const CalculatorLayout = props => {
    const [value, onChangeText] = React.useState('');
    const [areaPoint , setAreaPoint ] = React.useState(0);
    const [symptomScore, updateSymptomScore] = React.useState({
        Erythema: '0',
        'Edema / papulation': '0',
        Excoriation: '0',
        Lichenification: '0',
    });
    const [{ patient }, { setPatientArea }] = usePatient();

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

            setPatientArea({ areaScore: areaPoint, areaPercent: value, body: props.title});
        }, 100);
    };

    return (
        <View> 
            <View style={{ paddingHorizontal: 20 }}>
                <BodySection>
                    <BodyPart>
                        <BodyText>Front</BodyText>
                        <SvgComponent name={props.front} />
                    </BodyPart>
                    <BodyPart>
                        <BodyText>Back</BodyText>
                        <SvgComponent name={props.back} />
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
                <CustomText color="#a77f7f" value="*Given each respective body region a score between 0 and 6 based on the estimated percentage involment." style={{ lineHeight: 20 }} />
                <SubTitle>EASI lesion severity atlas</SubTitle>
            </View>
            <symptomContext.Provider value={[symptomScore, updateSymptomScore]}>
                <Accordion defaultIndex={null} onItemClick={console.log}>
                    {
                        symptomData.map(symptom => (
                            <AccordionItem 
                                key={symptom.id} 
                                label={`${symptom.name}: ${symptomScore[symptom.name]}`}
                                index={symptom.id}
                            >
                                <RadioCardList listData={symptom.data} name={symptom.name} />
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </symptomContext.Provider>
        </View>
    )
}

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

export default CalculatorLayout;