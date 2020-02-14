import React from 'react';
import { View, Text, Dimensions, Platform, ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import Tabs from 'components/Common/Tabs';
import CloseIcon from 'assets/close2.svg';
import { symptomData, symptomImage } from 'utils/resources/static';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

const TabItem = props => <View {...props} />;

const ModalScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const ModalTitle = navigation.getParam('name');
    const [slider1ActiveSlide, setSlider1ActiveSlide] = React.useState(SLIDER_1_FIRST_ITEM);
    const CarouselEl = React.useRef(null);
    const { width: screenWidth } = Dimensions.get("window");
    const _renderItem = ({item, index}) => {
        return <Image source={item}  style={{ width: screenWidth, height: screenWidth }} />
    };

    return (
        <ModalContainer>
            <CloseButton onPress={() => navigation.goBack()}>
                <CloseIcon fill={"#FFF"} />
            </CloseButton>
            <ScreenTitle>{ModalTitle}</ScreenTitle>
            <Tabs defaultIndex={`${id + 1}`} onTabClick={console.log} type="image">
                {
                    symptomData.map(symptom => (
                        <TabItem
                            key={symptom.id}
                            label={ModalTitle}
                            index={symptom.id}
                        >
                            <Carousel
                                ref={CarouselEl}
                                data={symptomImage[ModalTitle][symptom.id - 1]}
                                renderItem={_renderItem}
                                sliderWidth={screenWidth}
                                itemWidth={screenWidth}
                                firstItem={SLIDER_1_FIRST_ITEM}
                                loop={false}
                                onSnapToItem={(index) => setSlider1ActiveSlide(index)}
                            />
                        </TabItem>
                    ))
                }
            </Tabs>
        </ModalContainer>
    )
};

export default ModalScreen;

const ScreenTitle = styled.Text`
    margin-top: 60px;
    margin-bottom: 30px;
    color: #000000;
    text-align: center;
    font-family: 'ITCAvantGardeProBk';
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.5px;
`;

const ModalContainer = styled.View`
    padding: 40px 0;
`

const CloseButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40px;
    right: 0;
    width: 40px;
    height: 40px;
    background-color: #525CA3;
`
