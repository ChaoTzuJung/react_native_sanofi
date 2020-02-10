import React, { useState, useEffect } from 'react';
import { View , Text, Slider, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { usePatient } from 'models/patient';
import CustomText from 'components/Common/CustomText';
const TextReportLayout = props => {
    const [{ patient }] = usePatient()
    const Infomation = ['Patient', 'Age', 'Gender', 'Report date', 'EASI score', 'BSA', 'Interpretation', 'IGA', ];
    const BodyRegions = {};
    return (
        <TextReportContainer>
            <Section> 
                <CustomText font="medium" size="h5" color="#030303" value="" />
                <Row>
                    <CustomText font="normal" size="h6" color="#000" style={{ opacity: 0.5 }} value={`${key}: `} />
                    <CustomText font="normal" size="h6" color="#333" value={value} />
                </Row>
            </Section>
            <Section> 
                <CustomText font="medium" size="h5" color="#030303" value="Body Regions" />
            </Section>
        </TextReportContainer>
    )
};

export default TextReportLayout;

const TextReportContainer = styled.View`
`

const Section = styled.View`
    margin-bottom: 24px;
`