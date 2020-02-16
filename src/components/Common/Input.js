import React, { Fragment, useState, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components/native';
import Alert from 'components/Common/Alert';

const Input = forwardRef(({ invalid = false, style, onInputChange, onInputSubmit }, ref) => {
    const [text, setText] = useState('');

    const handleInputChange = val => {
        setText(val);
        onInputChange(val);
    }

    const clearInput = () => setText('');

    useImperativeHandle(ref, () => {
        return {
            clearInput: clearInput,
            setText: setText
        };
    });

    return (
        <Fragment>
            <Field 
                invalid={invalid}
                onEndEditing={onInputSubmit}
                onChangeText={handleInputChange}
                autoCapitalize="none"
                value={text}
                style={style}
            />
            {invalid && <Alert value="*Required fields." style={{ marginTop: 8, marginBottom: 8 }} />}
        </Fragment>
    )
});

const Field = styled.TextInput`
    padding: 8px 16px;
    width: 100%;
    height: 38px;
    color: #333333;
    font-family: 'Arial';
    font-size: 14px;
    border: ${props => props.invalid ? props.theme.warn : 'rgba(0, 0, 0, 0.2)'}
    background-color: #fff;
`;

export default Input;
