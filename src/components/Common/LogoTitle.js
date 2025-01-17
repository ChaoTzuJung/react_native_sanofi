import React from 'react';
import styled from 'styled-components/native';
import Logo from 'assets/logo.svg';
import SubLogo from 'assets/sub-logo.svg';
import { IS_ANDROID } from '../../../config/device';

const LogoTitle = () => (
    <HeaderContainer isAndroid={IS_ANDROID}>
        <Logo />
        <HorizonLine />
        <SubLogo />
    </HeaderContainer>
);

const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: ${props => props.isAndroid ? 'flex-start' : 'center'};
	width: 100%;
	height: auto;
    /* padding: ${props => props.isAndroid ? '16px 0' : '12px 0'}; */
    padding: 16px 0px;
	background-color: ${props => props.theme.white};
`;

const HorizonLine = styled.View`
    width: 0;
    height: 14px;
    border: 0.5px solid rgba(82, 92, 163, 0.5);
    margin: 0 10px;
`;

export default LogoTitle;