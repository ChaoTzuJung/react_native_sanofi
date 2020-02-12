import React from 'react';
import styled from 'styled-components/native';
import CustomText from 'components/Common/CustomText';
import PlusIcon from 'assets/plus.svg';
import MinusIcon from 'assets/minus.svg';
import CheckedMainIcon from 'assets/checked-main.svg';
import { usePatient } from 'models/patient';
import { useRoute } from 'models/route';

const AccordionItem = ({ index, label, isCollapsed, handleClick, children }) => {
    const [{ route }] = useRoute();
    const [{ patient }] = usePatient();
    const symptomName = label.split(':')[0];

    return (
        <AccordionItemWrapper>
            <AccordionButton onPress={() => handleClick()}>
                {route.query !== 'Result' && patient[route.query].symptom[symptomName] !== '0' ? <CheckedMainIcon width={20} height={20} style={{ marginRight: 12 }}/> : (
                    <CircleOrder>
                        <CustomText size="h7" color="#525ca3" value={index} />
                    </CircleOrder>
                )}
                <CustomText size="h6" color="#000000" value={label} style={{ marginRight: 'auto' }}/>
                {isCollapsed ? <PlusIcon /> : <MinusIcon />}
            </AccordionButton>
            <CollapseContent isCollapsed={isCollapsed}>
                {children}
            </CollapseContent>
        </AccordionItemWrapper>
    )
};

export default AccordionItem;

const AccordionItemWrapper = styled.View`
    margin-bottom: 20px;
`

const AccordionButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    width: 100%;
    height: 44px;
    border-top-color: #d8d8d8;
    border-bottom-color: #d8d8d8;
    border-top-width: 0.5px;
    border-bottom-width: 0.5px;
    background-color: #fff;
`;

const CircleOrder = styled.View`
    display: flex
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.second};
`;

const CollapseContent = styled.View`
    display: ${props => props.isCollapsed ? 'none' : 'flex'}
    margin: 20px 0;
`;
