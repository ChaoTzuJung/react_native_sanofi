import React, { Fragment } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Collapse from './Collapse';
import LogoFooter from '../../../assets/footer-logo-sm.svg';

const data = [
	{
		name: 'References',
		context: 'EASI <br> Hanifin, J. M., Thurston, M., Omoto, M., Cherill, R., Tofte, S. J., Graeber, M., ... & Easi, T. (2001). The eczema area and severity index (EASI): assessment of reliability in atopic dermatitis. Experimental dermatology, 10(1), 11-18.'
	},
	{
		name: 'Disclaimer',
		context: 'This free online tool aims to help physicians and patients in the computation of EASI. These materials have been prepared for medical and scientific information sharing/exchange purposes and not intended to encourage the use of any products.'
	}
];

const Footer = props => (
	<FooterContainer>
		{data.map(item => (
			<Fragment key={item.name}>
				<Collapse name={item.name}>
					<FooterContent>{item.context}</FooterContent>
				</Collapse>
				<FooterHerizon />
			</Fragment>
		))}
		<LogoFooter />
		<FooterText>Copyright © 2019 EASIscore. All rights reserved</FooterText>
	</FooterContainer>
);

const FooterContainer = styled.View`
	width: 100%;
	height: auto;
	min-height: 226px;
	padding: 20px;
	background-color: ${props => props.theme.dark};
`;

const FooterContent = styled.Text`
	margin-bottom: 20px
	font-family: 'ITCAvantGardeProBk';
	font-size: 12px;
	line-height: 20px;
	color: ${props => props.theme.white};
	opacity: 0.3;
`

const FooterHerizon = styled.View`
	margin-bottom: 20px;
	width: 100%;
	height: 1px;
	background-color: #a77f7f;
`

const FooterText = styled.Text`
	margin-top: 10px;
	color: ${props => props.theme.white};
	line-height: 20px;
	font-size: 12px;
	font-family: 'ITCAvantGardeProBk';
`;

export default Footer;