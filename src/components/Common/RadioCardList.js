import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import RadioCard from 'components/Common/RadioCard';

import { getScrollPosition } from 'actions/calculator';

const RadioCardList = ({ listData, currentScore, onChangeRadioCardList, calculator, getScrollPosition }) => {

    const ScrollViewRef = React.useRef();
    const [selectedIndex, setRadioSelected] = useState(currentScore);

    // 點擊完 Radio，會re-render整個component，所以要記上次的位置
    React.useEffect(() => {
        ScrollViewRef.current.scrollTo({x: calculator.scrollPosition.x, y: 0, animated: true})
    }, [])

    const handleRadioCardChange = index  => {
        onChangeRadioCardList(index);
        setRadioSelected(index);
    }

    const handleScrollChange = event => {
        console.log(event.nativeEvent.contentOffset);
        getScrollPosition(event.nativeEvent.contentOffset);
    }

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} ref={ScrollViewRef} onScroll={handleScrollChange} scrollEventThrottle={1}>
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

// TODO: 用 useSelector, useDispatch  取代
const mapStateToProps = ({ calculator }) => ({
	calculator,
});

const mapDispatchToProps = dispatch => ({
	getScrollPosition: position => dispatch(getScrollPosition(position)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RadioCardList);
