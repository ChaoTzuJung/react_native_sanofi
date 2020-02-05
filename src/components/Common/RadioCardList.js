import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import RadioCard from 'components/Common/RadioCard';

const RadioCardList = ({ listData, currentScore, onChangeRadioCardList }) => {

    const ScrollViewRef = React.useRef();
    const [selectedIndex, setRadioSelected] = useState(currentScore);
    const [scrollViewPosX, setScrollViewPosX] = useState(0);

    // 點擊完Radio，會rerender整個component，所以要記上次的位置
    React.useEffect(() => {
        ScrollViewRef.current.scrollTo({x: scrollViewPosX, y: 0, animated: true})
    }, [])

    const handleRadioCardChange = index  => {
        onChangeRadioCardList(index);
        setRadioSelected(index);
    }

    const handleScrollChange = event => {
        dispatch('GET_SCROLLVIEW_POSITION', event.nativeEvent.contentOffset.x)
    }
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} ref={ScrollViewRef} onScroll={handleScrollChange}>
            {
                listData.map(item => (
                    <RadioCard
                        key={item.info}
                        defaultIndex={item.score}
                        label={`${item.label}: ${item.score}`}
                        value={selectedIndex}
                        image={item.image}
                        info={item.info}
                        onRadioCardChange={handleRadioCardChange}
                    />
                ))
            }
        </ScrollView>
    )
};

const mapStateToProps = ({ calculator }) => ({
	calculator,
});

const mapDispatchToProps = dispatch => ({
	patientTest: () => dispatch(patientAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RadioCardList);
