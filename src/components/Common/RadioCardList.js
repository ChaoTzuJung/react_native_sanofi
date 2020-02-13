import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import RadioCard from 'components/Common/RadioCard';

const RadioCardList = ({ listData, name }) => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {listData.map((item, index) => (
                <RadioCard
                    key={item.info}
                    name={name}
                    index={index}
                    label={`${item.label}: ${item.score}`}
                    image={item.image}
                    info={item.info}
                />
            ))}
        </ScrollView>
    )
};

export default RadioCardList;
