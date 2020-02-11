import React, { useState, useEffect } from 'react';
import { View , Text, Slider, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { usePatient } from 'models/patient';
import Accordion from 'components/Common/Accordion';
import CustomText from 'components/Common/CustomText';
import PlusIcon from 'assets/plus.svg';
import MinusIcon from 'assets/minus.svg';

export const AccordionItem = props => (
    <View style={{ paddinghorizontal: 16, paddingVertical: 24, backgroundColor: '#fff', width: '100%',  shadowColor: '#000', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.2, shadowRadius: 4 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <CustomText font="bold" size="h6" color={props.color} value={props.label} />
            {props.isCollapsed ? <PlusIcon /> : <MinusIcon />}
        </View>
    </View>
)


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
    const cards = [];
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
                    cards.map(card => (
                        <AccordionItem 
                            key={card.id}
                            index={card.id} 
                            label={symptom.name}
                        >
                            
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </FullReportContainer>
    )
};

export default FullReportLayout;

const FullReportContainer = styled.View``

const Row  = styled.View`
    width: 50%;
`

const Section = styled.View`
    margin: 40px 0;
    flex-direction: row;
    flex-wrap: wrap;
`