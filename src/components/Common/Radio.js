import React, { useState, useEffect } from 'react';
import styled, { withTheme }  from 'styled-components/native';

import CheckedMainIcon from 'assets/checked-main.svg';
import CheckedSecondIcon from 'assets/checked-second.svg';

const Radio = ({ index, label, value, size, color, style, onRadioChange }) => {
    // TODO: 有什麼好作法?
    const [checked, setRadioChecked] = useState(value);
    const handleRadioPress = () => {
       onRadioChange(index);
       setRadioChecked(index);
    }

    return (
        <RadioButton 
            size={size}
            color={color}
            selected={checked === index}
            style={style}
            onPress={() => handleRadioPress()}
        >
            {
                color === 'main' && checked === index ? <CheckedMainIcon />
                : color === 'second' && checked === index ? <CheckedSecondIcon />
                : null
            }
        </RadioButton>
    )
};

const radioData = [
    {label: 'None: 0', value: 0 },
    {label: 'Mild: 1', value: 1 },
    {label: 'Moderate: 2', value: 3 },
    {label: 'Severe: 3', value: 4 },
];

export const RadioGroup = ({ radioData, defaultIndex, size, color, RadioStyle }) => {
    const [bindIndex, setBindIndex] = useState(defaultIndex);

    const changeRadio = newIndex => {
        if (typeof props.onRadioClick === 'function') props.onRadioClick(newIndex);
        setBindIndex(newIndex);
    };
      
    radioData.map((item, idx) => (
        <Radio
            key={idx}
            size={size}
            color={color}
            isSelected={bindIndex === idx}
            label={item.label}
            value={item.value}
            styles={RadioStyle}
            onPress={() => changeRadio(idx)}
        />
    ));
};

const RadioButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: ${props => props.size + 'px'};
    height: ${props => props.size + 'px'};
    border-Width: 2px;
    border-radius: ${props => (props.size / 2)  + 'px'};
    border-color: ${props => props.theme[props.color]};
    background-color: #FFF;
`

export default Radio;
