import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Button = ({ children, onClick, size, navigation }) => {
    const [coords, setCoords] = React.useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = React.useState(false);

    React.useEffect(
        () => {
            if (coords.x !== -1 && coords.y !== -1) {
                setIsRippling(true);
                setTimeout(() => setIsRippling(false), 1200);
            } else setIsRippling(false);
        },
        [coords]
    );

    React.useEffect(
        () => {
            if (!isRippling) setCoords({ x: -1, y: -1 });
        },
        [isRippling]
    );

    return (
        <ButtonContainer
            onPress={e => {
                // var rect = e.target.getBoundingClientRect();
                // var x = e.clientX - rect.left;
                // var y = e.clientY - rect.top;
                // setCoords({ x, y });
                onClick && onClick(e);
                navigation.navigate('Calculator');
            }}
        >
            {isRippling ? (
                <Ripple
                    style={{
                        left: coords.x + 10,
                        top: coords.y
                    }}
                />
            ) : (
                null
            )}
            <ButtonText>{children}</ButtonText>
        </ButtonContainer>
    );
}

const handleSize = size => {
    if(size === 'large') {
        return 'width: 295px; height: 50px;'
    }


    return 'width: 295px; height: 50px;'
}

const ButtonContainer = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: auto;
    text-align: center;
    background: ${props => props.theme.main};
    border-radius: 32px;
    color: #ffffff;
    overflow: hidden;
    ${props => handleSize(props.size)}
}
`

const Ripple = styled.View`
    display: flex;
    position: absolute;
    width: 20px;
    height: 20px;
    background: #63a4ff;
    border-radius: 9999px;
    opacity: 1;
    /* animation: 1.2s ease 1 forwards ripple-effect; */
`

const ButtonText = styled.Text`
    position: relative;
    color: ${props => props.theme.white};
    font-family: 'ITCAvantGardeProMd';
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    z-index: 2;
}
`

// <RippleButton onClick={e => console.log(e)}>Click me</RippleButton>,

// const styles = StyleSheet.create({
//     transformX: {
//         transform: [{translateX: -60}]
//     },
//     transformXY: {
//         transform: [{translateX: -60}, {translateY: 25}]
//     },
// });

// @keyframes ripple-effect {
//     0% {
//       transform: scale(1);
//       opacity: 1;
//     }
//     50% {
//       transform: scale(10);
//       opacity: 0.375;
//     }
//     100% {
//       transform: scale(35);
//       opacity: 0;
//     }
//   }

export default Button;