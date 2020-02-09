import React from 'react';
import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';

const BSASlider = () => {
    return (
        <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
        />       
    )
}

export default BSASlider;
