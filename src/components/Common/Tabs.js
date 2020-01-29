import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Tabs = props => {
    const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);
    const changeTab = newIndex => {
        if (typeof props.onTabClick === 'function') props.onTabClick(newIndex);
        setBindIndex(newIndex);
    };
    const items = props.children.filter(item => item.type.name === 'TabItem');

    return (
        <View>
            <TabMenu>
                {items.map(({ props: { index, label, color } }) => (
                    <TabMenuItem
                        focus={bindIndex === index}
                        index={index}
                        color={color}
                        key={label}
                        onPress={() => changeTab(index)} 
                    >
                        <TabItemText focus={bindIndex === index}>{label}</TabItemText>
                    </TabMenuItem>
                ))}
            </TabMenu>
            <TabView>
                {items.map(({ props }) => (
                    <TabViewItem
                        {...props}
                        key={props.index}
                        show={bindIndex === props.index}
                    />
                ))}
            </TabView>
        </View>
    );
}

const handleShadow = focus => focus ? `boxShadow: 0 2px 5px rgba(0, 0, 0, 0.2)` : `boxShadow: 0 2px 5px rgba(0, 0, 0, 0.1)`

const TabMenu = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
`

const TabMenuItem = styled.TouchableOpacity`
    width: 157px;
    height: 52px;
    margin-right: ${props => props.index % 2 ? '21px' : 0 };
    margin-bottom: 10px;
    padding: 15px 16px;
    background: white;
    border-style: solid;
    border-left-width: 2px;
    border-left-color: ${props => props.theme[props.color]};
    ${props => handleShadow(props.focus)};
`

const TabItemText = styled.Text`
    color: #000000;
    font-family: Arial;
    font-size: 14px;
    line-height: 22px;
    font-weight: ${props => props.focus ? 'bold' : 'normal'};
`

const TabView = styled.View`

`

const TabViewItem = styled.View`
    display: ${props => props.show ? 'flex' : 'none'};
`
export default Tabs;