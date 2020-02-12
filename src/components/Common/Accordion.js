import React, { useState } from 'react';
import { View } from 'react-native';
import AccordionItem from 'components/Common/AccordionItem';
import Card from 'components/Common/Card';

const Accordion = (props) => {
    const [bindIndex, setBindIndex] = useState(props.defaultIndex);

    const changeItem = itemIndex => {
        if (typeof props.onItemClick === 'function') props.onItemClick(itemIndex);
        if (itemIndex !== bindIndex) setBindIndex(itemIndex);
    };

    const cards = props.children.filter(item => item.type.name === 'Card');
    const items = props.children.filter(item => item.type.name === 'AccordionItem');

    const renderCard = props => (
        <Card
            key={props.label}
            index={props.index}
            label={props.label}
            children={props.children}
            isCollapsed={bindIndex !== props.index}
            handleClick={() => changeItem(props.index)}
            {...props} // color
        />
    )

    const renderItem = props => (
        <AccordionItem
            key={props.label}
            index={props.index}
            label={props.label}
            children={props.children}
            isCollapsed={bindIndex !== props.index}
            handleClick={() => changeItem(props.index)}
            {...props}
        />
    )

    return (
        <View>
            {items && items.map(({ props }) => renderItem(props))}
            {cards && cards.map(({ props }) => renderCard(props))}
        </View>
    );
}

export default Accordion;
