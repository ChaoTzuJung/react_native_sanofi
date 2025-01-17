import React, { useState, useContext } from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';
import SymptomContext from '../../context/SymptomContext';
import { usePatient } from 'models/patient';
import CustomText from 'components/Common/CustomText';
import Radio from 'components/Common/Radio';
import ResizeIcon from 'assets/resize.svg';
import InfoIcon from 'assets/info.svg';

const RadioCard = ({ name, index, label, image, info, imageWidth = '300px', isSelect, navigation }) => {

    const value = useContext(SymptomContext);
    const [symptomScore, updateSymptomScore, body] = value;
    const [, { setPatientSymptom, calculatorBodyScore, checkTabStatus }] = usePatient();

    onRadioChange = async id => {
        updateSymptomScore(() => ({
            ...symptomScore,
            [name]: id,
        }));
        await setPatientSymptom({ ...symptomScore, [name]: id });
        await calculatorBodyScore(body);
        await checkTabStatus(body);
    }

    return (
        <RadioCardContainer width={imageWidth}>
            <RadioCardTop height={imageWidth} onPress={() => navigation.navigate('MyModal', { id: index, name })}>
                <Image source={image} style={{ width: '100%', height: '100%' }}/>
                <ResizeIcon style={{ position: 'absolute', top: 20, right: 20 }} />
            </RadioCardTop>
            <RadioCardBottom>
                <Radio
                    id={index}
                    label={label}
                    size="24"
                    color="main"
                    style={{ marginRight: 12 }}
                    isSelect={symptomScore[name] === index}
                    onRadioChange={onRadioChange}
                />
                <CustomText font="normal" size="h5" color="#000000" value={label} style={{ marginRight: 'auto', marginTop: 4 }} />
                <InfoIcon />
            </RadioCardBottom>
        </RadioCardContainer>
    )
};

const RadioCardContainer  = styled.View`
    position: relative;
    width: ${props => props.width};
    height: 340px;
    margin: 0 20px;
`;

const RadioCardTop = styled.TouchableOpacity`
    width: 100%;
    height: ${props => props.height};
`;

const RadioCardBottom = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 13px;
    width: 100%;
    height: 24px;
`;

export default withNavigation(RadioCard);
