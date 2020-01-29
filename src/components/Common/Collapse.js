import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Svg, { Line } from 'react-native-svg';

const Collapse = props => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <View>
            <CollapseButton onPress={() => setIsCollapsed(!isCollapsed)}>
                <CollapseTitle>{props.name}</CollapseTitle>
                <Svg style={{ height: '28px', width: '28px' }} viewBox="0 0 100 100">
                    <Line x1="22.5" y1="50" x2="77.5" y2="50" strokeWidth="7.5" stroke="white"></Line>
                    { isCollapsed && <Line x1="50" y1="22.5" x2="50" y2="77.5" strokeWidth="7.5" stroke="white"></Line> }
                </Svg>
            </CollapseButton>
            <CollapseContent aria-expanded={isCollapsed} isCollapsed={isCollapsed}>
                {props.children}
            </CollapseContent>
        </View>
    );
}

const CollapseButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
`

const CollapseTitle = styled.Text`
	font-family: 'ITCAvantGardeProBk';
	font-size: 12px;
	line-height: 20px;
	color: ${props => props.theme.white};
`

const CollapseContent = styled.View`
    display: ${props => props.isCollapsed ? "none" : "flex"};
`

export default Collapse;
