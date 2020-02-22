import React, { useState, useEffect } from 'react';
import { View , Text, Slider, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { usePatient } from 'models/patient';
import Alert from 'components/Common/Alert';
import CustomText from 'components/Common/CustomText';
import Radio from 'components/Common/Radio';
import QuestionIcon from 'assets/question.svg';

const bodyLabel = ['Head & Neck', 'Upper extremities', 'Trunk', 'Lower extremities'];
const igaLabel = ['0 - Clear', '1 - Almost Clear', '2 - Mild', '3 - Moderate', '4 - Severe'];

const ResultLayout = props => {
    const [{ patient }, { setPatientIGA, setPatientBSA }] = usePatient();
    const [IGA, setIGA] = useState(null);
    const [BSA, setBSA] = useState(0);
    const [slideValue, changeSlideValue] = useState(0);

    // NOTE: ResultLayout 只會在Calculator Screen render 實作第一次的 componentDidMount，切換Calculator 與 Result 的 Layout是不會重新render的
    useEffect(() => {
        setBSA(patient.BSA); // 負責把值給store
        changeSlideValue(patient.BSA); // 負責顯示畫面的值
    }, [patient.BSA])


    const onRadioChange = id => setIGA(id);
    const onValueChange = val => changeSlideValue(Math.floor(val));

    const navigateToPatientScreen = () => {
        if(IGA === null) return alert('Please fill in IGA field!');
        setPatientBSA(BSA);
        setPatientIGA(IGA);
        props.navigation.navigate('Patient');
    }

    const navigateToHead = () => console.log('navigateToHead');
    return (
        <ResultContainer> 
            <EasiSection>
                <Row>
                    <CustomText font="normal" size="h4" color="#000" style={{ opacity: 0.5 }} value="EASI score" />
                    <CustomText font="normal" size="h3" color="#333" value={patient.EASI} />
                </Row>
                <Row>
                    <CustomText font="normal" size="h6" color="#000" style={{ opacity: 0.5 }} value="Interpretation" />
                    <CustomText font="normal" size="h5" color="#333" value={patient.interpretation} />
                </Row>
            </EasiSection>
            <PreScoreSection>
                <CustomText font="medium" size="h6" color="#333" value="Score per body region:" style={{ marginTop: 20, marginBottom: 24 }} />
                {bodyLabel.map(key => (
                    <Row key={key}>
                        <CustomText font="bold" size="h7" color="#333" value={key} />
                        <CustomText font="normal" size="h4" color="#333" value={patient[key].score} />
                    </Row>
                ))}
            </PreScoreSection>
            <IGASection>
                <Title>
                    <CustomText size="h6" color="#333" value="IGA ( Investigator Global Assessment)" style={{ marginRight: 16 }} />
                    <TouchableOpacity onPress={() => props.navigation.navigate('TableModal')}>
                        <QuestionIcon />
                    </TouchableOpacity>
                </Title>
                <Answer>
                    {igaLabel.map((key, idx) => (
                        <RadioItem key={key}>
                            <Radio
                                id={idx}
                                size="20"
                                color="second"
                                style={{ marginRight: 8 }}
                                isSelect={IGA === idx}
                                onRadioChange={onRadioChange}
                            />  
                            <CustomText size="h7" color="#333" value={key} />
                        </RadioItem>
                    ))}
                </Answer>
                {IGA === null && <Alert value="*Required fields." style={{ marginTop: 8 }} />}
            </IGASection>
            <BSASection>
                <CustomText size="h6" color="#333" value={`BSA（Body Surface Area）: ${slideValue}％`} style={{ marginBottom: 14 }} />
                <SliderLabels>
                    <CustomText font="normal" size="h7" color="#333" value="0%"  />
                    <CustomText font="normal" size="h7" color="#333" value="25%" />
                    <CustomText font="normal" size="h7" color="#333" value="50%" />
                    <CustomText font="normal" size="h7" color="#333" value="75%" />
                    <CustomText font="normal" size="h7" color="#333" value="100%" />
                </SliderLabels>
                <Slider
                    maximumValue={100}
                    onValueChange={onValueChange}
                    value={slideValue}
                    thumbTintColor="#525ca3"
                    minimumTrackTintColor="#eeeeee"
                    maximumTrackTintColor="#eeeeee"
                    style={{ height: 10, borderRadius: 5, backgroundColor: "#eeeeee", marginTop: 10, marginBottom: 50 }}
                />
            </BSASection>
            <ResultButton onPress={navigateToPatientScreen}>
                <CustomText font="medium" size="h5" color="#ffffff" value="Generate the report" />
            </ResultButton>
            <ResultButton outline onPress={navigateToHead} onPress={() => navigateToHead()}>
                <CustomText font="medium" size="h5" color="#bcbc1c" value="Back to calculator" />
            </ResultButton>
        </ResultContainer>
    )
};

export default ResultLayout;

const SliderLabels = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10px;
`

const ResultContainer = styled.View`
    padding: 0 20px;
    margin-bottom: 60px;
`

const EasiSection = styled.View`
    border-bottom-width: 2px;
    border-bottom-color: ${props => props.theme.lightGray};
`

const PreScoreSection = styled.View`
    border-bottom-width: 2px;
    border-bottom-color: ${props => props.theme.lightGray};
`

const IGASection = styled.View`
    margin-bottom: 40px;
`

const Title = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 10px ;
`

const Answer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`

const BSASection = styled.View``

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
const RadioItem = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    margin-right: 8px;
    width: 32%;
`

const ResultButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 20px;
    width: 235px;
    height: 56px;
    border-radius: 32px;
    background-color: ${props => props.outline ? '#fff' : props.theme.main};
    border-color: ${props => props.outline ? props.theme.main : 'transparent'};
    border-width: ${props =>  props.outline ? '2px' : '0px'};
`