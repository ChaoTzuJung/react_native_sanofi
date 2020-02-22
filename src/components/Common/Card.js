import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { usePatient } from 'models/patient';
import CustomText from 'components/Common/CustomText';
import PlusIcon from 'assets/plus.svg';
import MinusIcon from 'assets/minus.svg';

const Card = ({ label, isCollapsed, handleClick, children, color, ...props }) => {
    const [{ patient }] = usePatient();
    return (
        <CardWrapper isCollapsed={isCollapsed}>
            <CardButton onPress={() => handleClick()}>
                    <CustomText font="bold" size="h6" color={color} value={label} />
                    {isCollapsed ? <PlusIcon /> : <MinusIcon />}
            </CardButton>
            <CollapseContent isCollapsed={isCollapsed}>
                {children}
            </CollapseContent>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CustomText font="medium" size="h7" color="#333" value="Score per body region:" style={{ marginRight: 8 }} />
                <CustomText font="normal" size="h5" color="#000" value={patient[label].score}  style={{ marginTop: 8 }} />
            </View>
        </CardWrapper>
    )
};

export default Card;

const CardWrapper = styled.View`
    padding: 16px 24px;
    margin-bottom: 20px;
    width: 100%;
    height: ${props => props.isCollapsed ? '86px' : 'auto'};
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    elevation: 2;
`

const CardButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const CollapseContent = styled.View`
    display: ${props => props.isCollapsed ? 'none' : 'flex'}
    margin-top: 8px;
`;