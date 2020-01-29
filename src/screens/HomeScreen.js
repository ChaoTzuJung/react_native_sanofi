import React, { Framgent } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Banner from '../components/Common/Banner';
import Button from '../components/Common/Button';
import BodySection from '../components/Common/BodySection';
import Tabs from '../components/Common/Tabs';
import Footer from '../components/Common/Footer';

import { bodyData } from '../models/body';

const TabItem = props => <View {...props} />;

const HomeScreen = () => (
    <ScrollView>
        <Banner>
            <View style={{ paddingVertical: 20, paddingHorizontal: 40 }}>
                <BannerHeader>EASI<Text style={{ fontFamily: 'ITCAvantGardeProMd' }}>score</Text></BannerHeader>
                <BannerText>Quickly calculate the eczema area and severity index to determine atopic dermatitis severity.</BannerText>
                <Button size="large">Start</Button>
            </View>
        </Banner>
        <Section>
            <Heading>Click START to begin EASI score calculation.</Heading>
            <Tabs defaultIndex="1" onTabClick={console.log}>
                <TabItem label="Head & Neck" index="1" color="yellow">
                    {
                        bodyData['Head & Neck'].map(item => (
                            <BodySection
                                key={item.title}
                                title={item.title}
                                value1={item.value1}
                                value2={item.value2}
                                color1={item.color1}
                                color2={item.color2}
                                component={item.component}
                            />
                        ))
                    }
                </TabItem>
                <TabItem label="Upper extremities" index="2" color="green">
                    {
                        bodyData['Upper extremities'].map(item => (
                            <BodySection
                                key={item.title}
                                title={item.title}
                                value1={item.value1}
                                value2={item.value2}
                                color1={item.color1}
                                color2={item.color2}
                                component={item.component}
                            />
                        ))
                    }
                </TabItem>
                <TabItem label="Trunk" index="3" color="orange">
                    {
                        bodyData['Trunk'].map(item => (
                            <BodySection
                                key={item.title}
                                title={item.title}
                                value2={item.value2}
                                color2={item.color2}
                                component={item.component}
                            />
                        ))
                    }
                </TabItem>
                <TabItem label="Lower extremities" index="4" color="lightGreen">
                    {
                        bodyData['Lower extremities'].map(item => (
                            <BodySection
                                key={item.title}
                                title={item.title}
                                value1={item.value1}
                                value2={item.value2}
                                value3={item.value3}
                                color1={item.color1}
                                color2={item.color2}
                                color3={item.color3}
                                component={item.component}
                            />
                        ))
                    }
                </TabItem>
            </Tabs>
        </Section>
        <Footer />
    </ScrollView>
);


const BannerHeader = styled.Text`
    font-family: 'ITCAvantGardeProBold';
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 1px;
    color: #ffffff;
`;

const BannerText = styled.Text`
    margin-top: 5px;
    margin-bottom: 20px;
    color: #ffffff;
    font-family: 'ITCAvantGardeProBk';
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.4px;
`;

const Section = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 0 20px;
    text-align: center;
    margin-bottom: 55px;
`;

const Heading = styled.Text`
    margin: 25px 0;
    color: #000000;
    font-family: 'ITCAvantGardeProBk';
    font-size: 16px;
    line-height: 24px;
    opacity: 0.5;
`;

export default HomeScreen;