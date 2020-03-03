import React, { Framgent } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import LogoTitle from 'components/Common/LogoTitle';
import Banner from 'components/Common/Banner';
import Button from 'components/Common/Button';
import BodySection from 'components/Common/BodySection';
import CustomText from 'components/Common/CustomText';
import Footer from 'components/Common/Footer';
import Tabs from 'components/Common/Tabs';

import { bodyData } from 'utils/resources/static';

const TabItem = props => <View {...props} />;

const HomeScreen = ({ navigation }) => (
    <ScrollView>
        <Banner>
            <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                <BannerHeader>EASI<Text style={{ fontFamily: 'ITCAvantGardeProMd' }}>score</Text></BannerHeader>
                <BannerText>Quickly calculate the eczema area and severity index to determine atopic dermatitis severity.</BannerText>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View>
                        <Button size="medium" color="main" navigation={navigation} path="Calculator">Tutorial Version</Button>
                        <CustomText size="h7" color='#fff' value="Step by step guide" style={{ width: 157, textAlign: 'center', marginTop: 8, lineHeight: 22 }}/>
                    </View>
                    <View>
                        <Button size="medium" color="second" navigation={navigation}>Quick Version</Button>
                        <CustomText size="h7"color='#fff' value="Faster calculation" style={{ width: 157, textAlign: 'center', marginTop: 8, lineHeight: 22 }} />
                    </View>
                </View>
            </View>
        </Banner>
        <Section>
            <Heading numberOfLines={1}>Click START to begin EASI score calculation.</Heading>
            <Tabs defaultIndex="1" type='bodys'>
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
)

HomeScreen.navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
        headerTitle: () => <LogoTitle />,
    };
};


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
    opacity: 0.5;
`;

export default HomeScreen;