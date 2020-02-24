import React, { useState, useEffect, useRef } from 'react';
import { View , Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import { usePatient } from 'models/patient';
import { SymptomProvider } from '../context/SymptomContext';
import CustomText from 'components/Common/CustomText';
import Accordion from 'components/Common/Accordion';
import AccordionItem from 'components/Common/AccordionItem';
import RadioCard from 'components/Common/RadioCard';

import { symptomData } from 'utils/resources/static';
import NeckFront from 'assets/neck-front.svg'; 
import NeckBack from 'assets/neck-back.svg';
import ArmFront from 'assets/arm-front.svg'; 
import ArmBack from 'assets/arm-back.svg';
import BodyFront from 'assets/body-front.svg'; 
import BodyBack from 'assets/body-back.svg';
import LegFront from 'assets/leg-front.svg'; 
import LegBack from 'assets/leg-back.svg';

const renderCard = ({item, index}) => (
    <RadioCard
        key={item.info}
        name={item.name}
        index={index}
        label={`${item.label}: ${item.score}`}
        image={item.image}
        info={item.info}
    />
);

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
    const CarouselEl = useRef(null);
    const [text, setText] = useState('');
    const [areaPoint , setAreaPoint ] = useState(0);
    const [symptomScore, updateSymptomScore] = useState({
        Erythema: '0',
        'Edema / papulation': '0',
        Excoriation: '0',
        Lichenification: '0',
    });
    const [slider1ActiveSlide, setSlider1ActiveSlide] = React.useState(0);
    const { width: screenWidth } = Dimensions.get("window");
    
    // 當Back To Home 再回到 Calculator 後仍能 sync store data
    useEffect(() => {
        const percent = patient[props.title].area.areaPercent;
        const symptom = patient[props.title].symptom;
        setText(percent);
        calculatePoint(percent);
        updateSymptomScore(() => ({
            ...symptomScore,
            ...symptom,
        }));
    }, [])

    const [{ patient }, { setPatientArea, calculatorBodyScore, checkTabStatus }] = usePatient();

    const calculatePoint = percent => {
        const score = parseInt(percent);
        if (score >= 90 && score <= 100) submitAreaScore(6);
        if (score >= 70 && score <= 89) submitAreaScore(5);
        if (score >= 50 && score <= 69) submitAreaScore(4);
        if (score >= 30 && score <= 49) submitAreaScore(3);
        if (score >= 10 && score <= 29) submitAreaScore(2);
        if (score >= 1 && score <= 9) submitAreaScore(1);
        if (score === 0) submitAreaScore(0);

        // 超過 100 / 負數
        if (score > 100 || score < 0) {
            setText('');
            setAreaPoint(0);
        }

        // 中文文字 / 奇怪符號
        if (!score && score !== 0) {
            setText('');
            setAreaPoint(0);
        }
    };

    const onTextChange = event => {
        const percent = event;
        setText(percent);
    }

    const submitAreaScore = async score => {
        setAreaPoint(score);
        await setPatientArea({ areaScore: score, areaPercent: text});
        await calculatorBodyScore(props.title);
        await checkTabStatus(props.title);
    }

    const onTextSubmit = event => calculatePoint(text);

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
                    onEndEditing={onTextSubmit}
                    onChangeText={onTextChange}
                    value={text}
                />
                <CustomText color="#a77f7f" value="*Given each respective body region a score between 0 and 6 based on the estimated percentage involment." style={{ lineHeight: 20 }} />
                <SubTitle>EASI lesion severity atlas</SubTitle>
            </View>
            <SymptomProvider value={[symptomScore, updateSymptomScore, props.title]}>
                <Accordion defaultIndex={null} type="item">
                    {
                        symptomData.map(symptom => (
                            <AccordionItem
                                key={symptom.id} 
                                label={`${symptom.name}: ${symptomScore[symptom.name]}`}
                                index={symptom.id}
                            >
                                <Carousel
                                    ref={CarouselEl}
                                    data={symptom.data}
                                    renderItem={renderCard}
                                    sliderWidth={screenWidth}
                                    itemWidth={300}
                                    loop={false}
                                    inactiveSlideOpacity={1}
                                    inactiveSlideScale={1}
                                    activeSlideAlignment="start"
                                    slideStyle={{ marginRight: 15 }}
                                    onSnapToItem={(index) => setSlider1ActiveSlide(index)}
                                />
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </SymptomProvider>
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