import React, { useState, useEffect } from 'react';
import { Text, Animated } from 'react-native';
import styled from 'styled-components/native';

const Notification = props => {
    const [isShown, setIsShown] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);

    let timeoutId = null;

    useEffect(() => {
        setIsShown(true);
        return () => {
            clearTimeout(timeoutId);
        }
    }, [props.isShown, props.timeout, timeoutId]);

    const closeNotification = () => {
        setIsLeaving(true);
        timeoutId = setTimeout(() => {
            setIsLeaving(false);
            setIsShown(false);
        }, 250)
    }

    return isShown && (
        <Alert type={props.type}>
            <CloseButton onPress={closeNotification}>
                <Text style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>x</Text>
            </CloseButton>
            <Text>{props.message}</Text>
        </Alert>
    )
}

const handleAlertType = type => {
    switch (type) {
        case "error":
            return "color: #721c24; background-color: #f8d7da; border: 1px solid #f5c6cb;";
        case "warning":
            return "color: #856404; background-color: #fff3cd; border: 1px solid #ffeeba;";
        default:
            return "color: #333333; background-color: #ffffff; border: 1px solid #222222;";
    }
};

const Alert = styled.View`
    position: relative;
    margin-bottom: 8px;
    padding: 12px 8px;
    padding-right: 40px;
    text-align: left;
    background-color: #ffffff;
    border: 1px solid #333333;
    border-radius: 4px;
    font-size: 16px;
    ${props => handleAlertType(props.type)};

`;

// height 100% not work in react native
const CloseButton = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 0
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    border: 0;
    height: 42px;
    color: #333;
    font-weight: 600;
    font-size: 16px;
`;

export default Notification;

/* <Notification type="info" message="This is info" /> */