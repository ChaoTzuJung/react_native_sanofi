import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const BodySection = ({ title, value1, value2, value3, color1, color2, color3, component }) => (
    <BodyContainer>
        <Title>{title}</Title>
        {component && (
            <BodyImage>
                {color1 &&
                    <Circle color={color1} style={transform(color1)}>
                        <CircleText>{value1}</CircleText>
                    </Circle>
                }
                {component()}
                <View>
                    {value3 && 
                        <Circle color={color3} style={{ top: 105 }}>
                            <CircleText>{value3}</CircleText>
                        </Circle>
                    }
                    <Circle color={color2}>
                        <CircleText>{value2}</CircleText>
                    </Circle>
                </View>
            </BodyImage>
        )}
    </BodyContainer>
);

const styles = StyleSheet.create({
    transformX: {
        transform: [{translateX: -60}]
    },
    transformXY: {
        transform: [{translateX: -60}, {translateY: 25}]
    },
});

const transform = option => option === '#f7ee7f' ? [styles.transformXY] : [styles.transformX];

const handlePosition = color => {
    switch (color) {
        case "#f0dd00" || "#f7ee7f":
            return 'top: 0' 
        case "#00a590":
            return 'top: 35%'
        case "#fbba00":
            return 'top: 17%'
        case "#bcbc1c" || "#dddd8d":
            return 'top: 60%'
        default:
            return 'top: 0'
    }
}

const BodyContainer = styled.View`
    display: flex;
    align-items: center;
`;

const Title = styled.Text`
    color: #000000;
    font-family: 'ITCAvantGardeProBk';
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.5px;
`;

const BodyImage = styled.View`
    display: flex;
    flex-direction: row;
    position: relative;
    margin-top: 20px;
    margin-bottom: 25px;
`;

const Circle = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    ${props => handlePosition(props.color)}
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${props => props.color || 'white'};
`;

const CircleText = styled.Text`
    color: #000000;
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
`;

export default BodySection;