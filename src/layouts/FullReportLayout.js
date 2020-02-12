import React, { useState, useEffect } from 'react';
import { View , Text, Slider, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { usePatient } from 'models/patient';
import Accordion from 'components/Common/Accordion';
import Card from 'components/Common/Card';
import CustomText from 'components/Common/CustomText';

const FullReportLayout = props => {
    const [{ patient }] = usePatient();
    const personKey = ['BSA', 'Interpretation', 'IGA', 'Gender', 'Age'];
    const personValue = {
        'BSA': patient.BSA + ' %',
        'Interpretation': patient.interpretation.toUpperCase(),
        'IGA': patient.IGA,
        'Gender': patient.gender,
        'Age': patient.age,
    };
    const cards = ['Head & Neck', 'Trunk', 'Upper extremities', 'Lower extremities'];

    const CARD_MAP = body => {
        const { symptom,area } = patient[body];
        return {
            'Redness/Erythema': symptom.Erythema,
            'Edema/Papulation': symptom.Erythema,
            'Scratching/Excoriation': symptom.Erythema,
            'Lichenification': symptom.Erythema,
            'Region score': `${area.areaScore}(${area.areaPercent})`,
        }
    }

    return (
        <FullReportContainer>
            <CustomText font="normal" size="h7" color="#030303" value="Report date:" style={{ textAlign: 'right', opacity: 0.5, lineHeight: 22 }} />
            <CustomText font="normal" size="h7" color="#030303" value={patient.reportDate} style={{ textAlign: 'right', opacity: 0.5, lineHeight: 22 }} />
            <CustomText font="normal" size="h6" color="#030303" value="Hello" style={{ lineHeight: 24 }} />
            <CustomText font="normal" size="h6" color="#030303" value="This is the report of patient" style={{ lineHeight: 24, marginBottom: 5 }} />
            <CustomText font="bold" size="h5" color="#030303" value={patient.patientName} style={{ lineHeight: 30, marginBottom: 5 }} />
            <Section>
                {personKey.map(key => (
                    <Row key={key}>
                        <CustomText font="normal" size="h5" color="#000" style={{ opacity: 0.5, lineHeight: 38 }} value={`${key}:`} />
                        <CustomText font="normal" size="h4" color="#000" value={personValue[key]} style={{ lineHeight: 36 }} />
                    </Row>
                ))}
            </Section>
            <Accordion defaultIndex={null} onItemClick={console.log}>
                {
                    cards.map((card, idx) => (
                        <Card
                            key={patient[card].id}
                            index={patient[card].id} 
                            label={card}
                            color={patient[card].color}
                        >
                            {Object.entries(CARD_MAP(card)).map((array, idx) => (
                                <CardRow key={`${array[1]} - ${idx}`}>
                                    <CustomText font="normal" size="h7" color="#66757d" style={{ lineHeight: 22, marginBottom: 4 }} value={`${array[0]}:`} />
                                    <CustomText font="normal" size="h7" color="#000000" style={{ lineHeight: 22 }} value={array[1]} />
                                </CardRow>
                            ))}
                        </Card>
                    ))
                }
            </Accordion>
            <Row>
                <CustomText font="normal" size="h5" color="#000" style={{ opacity: 0.5, lineHeight: 38 }} value="EASI score:" />
                <CustomText font="normal" size="h4" color="#000" value={patient.EASI} style={{ lineHeight: 36 }} />
            </Row>
        </FullReportContainer>
    )
};

export default FullReportLayout;


const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const FullReportContainer = styled.View``

const Row  = styled.View`
    width: 50%;
    margin-bottom: 20px;
`

const Section = styled.View`
    margin: 40px 0;
    flex-direction: row;
    flex-wrap: wrap;
`
