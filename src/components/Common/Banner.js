import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Banner = ({ children }) => (
    <ImageBackground source={require('../../../assets/banner.png')} style={styles.bannerStyle}>
        {children}
    </ImageBackground>
);

const styles = StyleSheet.create({
    bannerStyle: {
        width: '100%',
        height: 245,
    },
});

export default Banner;