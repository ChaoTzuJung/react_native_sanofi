import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { usePatient } from 'models/patient';
import Alert from 'components/Common/Alert';
import CustomText from 'components/Common/CustomText';
import CheckedMainIcon from 'assets/checked-main.svg';

const TAB_MAP = {
    1: 'Head & Neck',
    2: 'Upper extremities',
    3: 'Trunk',
    4: 'Lower extremities',
    5: 'Result',
}

const Tabs = props => {
    const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);
    const [{ patient }] = usePatient();
    const changeTab = newIndex => {
        if (typeof props.onTabClick === 'function') props.onTabClick(newIndex);
        setBindIndex(newIndex);
    };
    const items = props.children.filter(item => item.type.name === 'TabItem');

    if (props.horizontal) {
        return (
            <View>
                <TabMenuHorizontal horizontal={true} showsHorizontalScrollIndicator={false} >
                    {items.map(({ props: { index, label, score } }) => (
                        <TabMenuHorizontalItem
                            focus={bindIndex === index}
                            index={index}
                            key={label}
                            invalid={patient[TAB_MAP[index]].completed && index !== '5' && props.checkFlag}
                            onPress={() => changeTab(index)} 
                        >
                            {patient[TAB_MAP[index]].completed ? <CheckedMainIcon width={16} height={16}/> : (
                                <CircleOrder focus={bindIndex === index}>
                                    <CustomText color={bindIndex === index ? "#525ca3" : "#7c7c7c"} value={index} style={{ fontSize: 10 }} />
                                </CircleOrder>
                            )}
                            <CustomText size="h7" color={bindIndex === index ? "#000000" : "#a77f7f"} value={label} style={{ lineHeight: 22 }} />
                            {score !== null && <CustomText size="h6" color={bindIndex === index ? "#000000" : "rgba(0, 0, 0, 0.5)"} value={`Score: ${score}`} style={{ lineHeight: 24 }} />}
                            {patient[TAB_MAP[index]].completed && index !== '5' && props.checkFlag && <Alert value="*Required fields." style={{ marginTop: 20 }} />}
                        </TabMenuHorizontalItem>
                    ))}
                </TabMenuHorizontal>
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
    } else {
        return (
            <View>
                <TabMenu>
                    {items.map(({ props: { index, label, color } }) => (
                        <TabMenuItem
                            focus={bindIndex === index}
                            index={index}
                            color={color || 'white'}
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
}

const handleShadow = focus => focus ? `boxShadow: 0 2px 5px rgba(0, 0, 0, 0.2)` : `boxShadow: 0 2px 5px rgba(0, 0, 0, 0.1)`;

const CircleOrder = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border-style: solid;
    border-width: 0.8px;
    border-color: ${props => props.focus ? props.theme.second : '#d4d4d4'};
`;

const TabMenu = styled.View`
    display: flex;
    flex-wrap: ${props => props.horizontal ? 'nowrap' : 'wrap'};
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
`

const TabMenuHorizontal = styled.ScrollView.attrs({
    contentContainerStyle: props => {
        return {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        }
    },
})`
    padding-left: 10px;
`

const TabItem = styled.TouchableOpacity`
    height: auto;
    height: auto;
    background: white;
    ${props => handleShadow(props.focus)};
`;

const TabMenuItem = styled(TabItem)`
    width: 157px;
    height: 52px;
    margin-right: ${props => props.index % 2 ? '21px' : 0 };
    margin-bottom: 10px;
    padding: 15px 16px;
    border-style: solid;
    border-left-width: 2px;
    border-left-color: ${props => props.theme[props.color]};
`

const TabMenuHorizontalItem = styled(TabItem)`
    width: 145px;
    height: 90px;
    margin-top: 20px;
    margin-right: 8px;
    margin-bottom: 40px;
    margin-left:  8px;
    padding: 8px;
    border-width: 1px;
    border-color: ${props => props.invalid ? props.theme.warn : 'transparent'}
`

const TabItemText = styled.Text`
    color: ${props => props.horizontal ? props.theme.brown : props.theme.black };
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