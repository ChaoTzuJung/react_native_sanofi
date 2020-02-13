import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import AccordionItem from 'components/Common/AccordionItem';
import CloseIcon from 'assets/close2.svg';

const ModalScreen = ({ navigation }) => (
    <ModalContainer>
        <CloseButton onPress={() => navigation.goBack()}>
            <CloseIcon fill={"#FFF"} />
        </CloseButton>
    </ModalContainer>
);

export default ModalScreen;

const ModalContainer = styled.View`
    padding: 40px 0;
`

const CloseButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40px;
    right: 0;
    width: 40px;
    height: 40px;
    background-color: #525CA3;
`