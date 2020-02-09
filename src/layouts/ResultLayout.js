import React, { useState } from 'react';
import { View , Text } from 'react-native';
import styled from 'styled-components/native';
import { usePatient } from 'models/patient';
import Alert from 'components/Common/Alert';
import CustomText from 'components/Common/CustomText';
import Radio from 'components/Common/Radio';
import BSASlider from 'components/Common/BSASlider';
import QuestionIcon from 'assets/question.svg';
const bodyLabel = ['Head & Neck', 'Upper extremities', 'Trunk', 'Lower extremities'];
const igaLabel = ['0 - Clear', '1 - Almost Clear', '2 - Mild', '3 - Moderate', '4 - Severe'];

const ResultLayout = props => {
    const [IGA, setIGA] = useState(null);
    const [{ patient }] = usePatient();

    const onRadioChange = id => setIGA(id);
    return (
        <ResultContainer> 
            <EasiSection>
                <Row>
                    <CustomText font="normal" size="h4" color="#000" style={{ opacity: 0.5 }} value="EASI score" />
                    <CustomText font="normal" size="h3" color="#333" value="11.40" />
                </Row>
                <Row>
                    <CustomText font="normal" size="h6" color="#000" style={{ opacity: 0.5 }} value="Interpretation" />
                    <CustomText font="normal" size="h5" color="#333" value="Moderate" />
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
                    <QuestionIcon />
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
                <Alert value="*Required fields." style={{ marginTop: 8 }} />
            </IGASection>
            <BSASection>
                <CustomText size="h6" color="#333" value="BSA（Body Surface Area）: 41％" style={{ marginBottom: 14 }} />
                <BSASlider />
            </BSASection>
        </ResultContainer>
    )
};

export default ResultLayout;


const ResultContainer = styled.View`
    padding: 0 20px;
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

const BSASection = styled.View`

`

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