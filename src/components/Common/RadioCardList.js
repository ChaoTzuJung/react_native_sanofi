import React, { useState } from 'react';
import { FlatList } from 'react-native';
import RadioCard from 'components/Common/RadioCard';

const RadioCardList = ({ listData, currentScore, onChangeRadioCardList }) => {

    const [selectedIndex, setRadioSelected] = useState(currentScore);
    console.log('[state]:', selectedIndex);
    const handleRadioCardChange = index  => {
        onChangeRadioCardList(index);
        setRadioSelected(index);
    }

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={listData}
            keyExtractor={listData => listData.info}
            renderItem={({ item }) => (
                <RadioCard
                    defaultIndex={item.score}
                    label={`${item.label}: ${item.score}`}
                    value={selectedIndex}
                    image={item.image}
                    info={item.info}
                    onRadioCardChange={handleRadioCardChange}
                />
            )}
        />
    )
};

export default RadioCardList;
