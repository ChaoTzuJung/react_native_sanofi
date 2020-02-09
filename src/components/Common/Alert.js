import React from 'react';
import styled from 'styled-components/native';

const Alert = ({ value, style }) => (
    <RedText style={style}>{value}</RedText>
)

const RedText = styled.Text`
    font-family: Arial;
    font-size: 14px;
    color: ${props => props.theme.warn}
}
`

export default Alert;