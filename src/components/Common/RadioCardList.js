import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import RadioCard from 'components/Common/RadioCard';
import { symptomContext } from '../../layouts/CalculatorLayout';

const RadioCardList = ({ listData, name }) => {
    const ScrollViewRef = React.useRef();
    const [symptomScore, updateSymptomScore] = useContext(symptomContext);

    console.log(symptomScore);
    // 設定父元件，每個AccrodionItem的分數
    handleRadioChange = id => {
        console.log('handleRadioChange',id);
        updateSymptomScore(() => ({
            ...symptomScore,
            [name]: id,
        }));
    }

    // isSelect 決定哪張卡要被點選亮起
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} ref={ScrollViewRef}>
            {
                listData.map((item, index) => (
                    <RadioCard
                        key={item.info}
                        id={index}
                        label={`${item.label}: ${item.score}`}
                        image={item.image}
                        info={item.info}
                        isSelect={symptomScore[name] === index}
                        onRadioChange={handleRadioChange}
                    />
                ))
            }
        </ScrollView>
    )
};

export default RadioCardList;
