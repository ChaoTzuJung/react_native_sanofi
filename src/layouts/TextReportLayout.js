import React, { useState, useEffect } from 'react';
import { View , Text, Slider, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { usePatient } from 'models/patient';
import CustomText from 'components/Common/CustomText';
const TextReportLayout = props => {
    const [{ patient }] = usePatient()
    const informationKey = ['Patient', 'Age', 'Gender', 'Report date', 'EASI score', 'BSA', 'Interpretation', 'IGA' ];
    const informationValue = {
        'Patient': patient.patientName,
        'Age': patient.age,
        'Gender': patient.gender,
        'Report date': patient.reportDate,
        'EASI score': patient.EASI,
        'BSA': patient.BSA,
        'Interpretation': patient.interpretation,
        'IGA': patient.IGA,
    };

    const formatBodyData = (bodyName) => {
        const { area, symptom, score } = patient[bodyName];
        return `Er: ${symptom.Erythema} / Ed: ${symptom['Edema / papulation']} / Ex:${symptom.Excoriation} / Li: ${symptom.Lichenification} / Region: ${area.score} (${area.areaPercent}%) / Body: ${score}`
    };

    const bodyRegionsKey = ['H', 'U', 'T', 'L'];
    const bodyRegionsValue = {
        H: formatBodyData('Head & Neck'),
        U: formatBodyData('Upper extremities'),
        T: formatBodyData('Trunk'),
        L: formatBodyData('Lower extremities'),
    };

    return (
        <TextReportContainer>
            <Section> 
                <CustomText font="medium" size="h5" color="#030303" value="Information" style={{ opacity: 0.5, marginBottom: 16 }} />
                {informationKey.map(key => (
                    <Row key={key}>
                        <CustomText font="normal" size="h6" color="#000" style={{ opacity: 0.5, marginRight: 8 }} value={`${key}:`} />
                        <CustomText font="normal" size="h6" color="#333" value={informationValue[key]} />
                    </Row>
                ))}
            </Section>
            <Section> 
                <CustomText font="medium" size="h5" color="#030303" value="Body Regions" style={{ opacity: 0.5, marginBottom: 16 }} />
                {bodyRegionsKey.map(key => (
                    <Row key={key}>
                        <CustomText font="normal" size="h6" color="#000" style={{ opacity: 0.5, marginRight: 8 }} value={`${key}:`} />
                        <CustomText font="normal" size="h6" color="#333" value={bodyRegionsValue[key]} />
                    </Row>
                ))}
                <Row>
                    <CustomText font="normal" size="h6" color="#333" value="EASI score: " style={{ opacity: 0.5, marginRight: 8, marginTop: 12 }}/>
                    <CustomText font="normal" size="h6" color="#333" value={patient.EASI} style={{ marginTop: 12 }}/>
                </Row>
            </Section>
        </TextReportContainer>
    )
};

export default TextReportLayout;

const Row  = styled.View`
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 12px;
`

const TextReportContainer = styled.View`

`

const Section = styled.View`
    margin-bottom: 24px;
`