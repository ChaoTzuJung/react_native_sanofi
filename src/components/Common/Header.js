import React from 'react';
import styled from 'styled-components/native';
import Logo from '../../../assets/logo.svg';
import SubLogo from '../../../assets/sub-logo.svg';

const Header = () => (
    <HeaderContainer>
        <Logo />
        <HorizonLine />
        <SubLogo />
    </HeaderContainer>
);

const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
	width: 100%;
	height: 48px;
	padding: 17px 20px;
    margin-top: 33px;
	background-color: ${props => props.theme.white};
`;

const HorizonLine = styled.View`
    width: 0;
    height: 14px;
    border: 0.5px solid rgba(82, 92, 163, 0.5);
    margin: 0 10px;
`;

export default Header;