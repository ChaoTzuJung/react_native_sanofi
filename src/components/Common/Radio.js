import React, { useState, useEffect } from 'react';
import styled, { withTheme }  from 'styled-components/native';

import CheckedMainIcon from 'assets/checked-main.svg';
import CheckedSecondIcon from 'assets/checked-second.svg';

const Radio = ({ index, symptom, size, color, style, isChecked = false, changeRadio }) => {
    // TODO: 有什麼好作法?
    // const [selected, setRadioSelected] = useState(false);

    // useEffect(() => {
    //     setRadioSelected(true);
    //  }, [isChecked]);

    return (
        <RadioButton 
            size={size}
            color={color}
            selected={isChecked}
            style={style}
            onPress={() => changeRadio(symptom, index)}
        >
            {
                color === 'main' && isChecked ? <CheckedMainIcon />
                : color === 'second' && isChecked ? <CheckedSecondIcon />
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
