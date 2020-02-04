import React, { useState } from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import styled, { withTheme }  from 'styled-components/native';
import CustomText from 'components/Common/CustomText';
import PlusIcon from 'assets/plus.svg';
import MinusIcon from 'assets/minus.svg';

export const AccordionItem = (props) => (
    <AccordionItemWrapper>
        <AccordionButton onPress={() => props.handleClick()}>
            <CircleOrder>
                <CustomText size="h7" color="#525ca3" value={props.index} />
            </CircleOrder>
            <CustomText size="h6" color="#000000" value={props.label} style={{ marginRight: 'auto' }}/>
            {props.isCollapsed ? <PlusIcon /> : <MinusIcon />}
        </AccordionButton>
        <CollapseContent isCollapsed={props.isCollapsed}>
            {props.children}
        </CollapseContent>
    </AccordionItemWrapper>
);

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

const CollapseContent = styled.View`
    display: ${props => props.isCollapsed ? 'none' : 'flex'}
    margin: 20px 0;
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


const Accordion = (props) => {
    const [bindIndex, setBindIndex] = useState(props.defaultIndex);

    const changeItem = itemIndex => {
        if (typeof props.onItemClick === 'function') props.onItemClick(itemIndex);
        if (itemIndex !== bindIndex) setBindIndex(itemIndex);
    };

    const items = props.children.filter(item => item.type.name === 'AccordionItem');

    return (
        <View>
            {items.map(({ props }) => (
                <AccordionItem
                    key={props.label}
                    index={props.index}
                    isCollapsed={bindIndex !== props.index}
                    label={props.label}
                    handleClick={() => changeItem(props.index)}
                    children={props.children}
                />
            ))}
        </View>
    );
}

export default Accordion;
