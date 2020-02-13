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

    if(process.env.NODE_ENV !== 'production') {
        const cards = props.children.filter(item => item.type.name === 'Card');
        const items = props.children.filter(item => item.type.name === 'AccordionItem');
    } else {
        const cards = props.children;
        const items = props.children;
    }

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
