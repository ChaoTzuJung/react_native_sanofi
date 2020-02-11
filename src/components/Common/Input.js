import React from 'react';
import styled from 'styled-components/native';
import Alert from 'components/Common/Alert';

const Input = ({ onInputChange, onInputSubmit, invalid = false, style }) => {
    const { text, setText } = React.useState('');

    return (
        <React.Fragment>
            <Field 
                invalid={invalid}
                onEndEditing={onInputSubmit}
                onChangeText={onInputChange}
                value={text}
                style={style}
            />
            {invalid && <Alert value="*Required fields." style={{ marginTop: 8 }} />}
        </React.Fragment>
    )
};

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
