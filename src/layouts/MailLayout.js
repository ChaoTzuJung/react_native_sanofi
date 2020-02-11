import React, { useState, useEffect } from 'react';
import { View , Text, Slider, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import CustomText from 'components/Common/CustomText';
import Input from 'components/Common/Input';

const MailLayout = props => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [isOnCheck, setChecking] = React.useState(false);

    return (
        <MailContainer>
            <HerizonLine />
            <Section> 
                <CustomText size="h6" color="#333" value="Your Name: " style={{ marginBottom: 10 }} />
                <Input
                    invalid={name.length <= 0 && isOnCheck}
                    onInputChange={(value) => setName(value)}
                    style={{ marginBottom: 20 }}
                />
                <CustomText size="h6" color="#333" value="Email Address: " style={{ marginBottom: 10 }} />
                <Input
                    invalid={name.length <= 0 && isOnCheck}
                    onInputChange={(value) => setEmail(value)}
                    style={{ marginBottom: 20 }}
                />
                <Button onPress={() => setMailIsShow(!mailIsShow)}>
                    <CustomText font="medium" size="h6" color="#ffffff" value="Submit" />
                </Button>
            </Section>
        </MailContainer>
    )
};

export default MailLayout;

const Row  = styled.View`
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 12px;
`

const MailContainer = styled.View`

`

const Section = styled.View`
    margin: 24px 0;
`

const HerizonLine = styled.TouchableOpacity`
    width: 100%;
    height: 2px;
    background-color: #eeeeee;
`

const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 235px;
    height: 56px;
    border-radius: 32px;
    background-color: ${props => props.theme.main};
`