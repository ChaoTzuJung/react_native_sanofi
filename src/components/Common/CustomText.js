import React from 'react';
import styled from 'styled-components/native';

const CustomText = ({ font, size, color, value, style }) => (
    <MyText font={font} size={size} color={color} style={style}>{value}</MyText>
)

const handleFont = font => {
    switch(font) {
        case 'normal':
            return 'font-family: ITCAvantGardeProBk;';
        case 'medium':
            return 'font-family: ITCAvantGardeProBk;';
        case 'bold':
            return 'font-family: ITCAvantGardeProBk;';
        default:
            return 'font-family: Arial;';
    }
}

const handleSize = size => {
    switch(size) {
        case 'h1':
            return 'font-size: 40px;';
        case 'h2':
            return 'font-size: 36px;';
        case 'h3':
            return 'font-size: 32px;';
        case 'h4':
            return 'font-size: 24px;';
        case 'h5':
            return 'font-size: 20px;';
        case 'h6':
            return 'font-size: 16px;';
        case 'h7':
            return 'font-size: 14px;';
        default:
            return 'font-size: 12px;';
    }
}

const MyText = styled.Text`
    ${props => handleFont(props.font)}
    ${props => handleSize(props.size)}
    color: ${props => props.color || '#000000'}
}
`

export default CustomText;