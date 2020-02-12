import React, { useState } from 'react';
import Tabs from 'components/Common/Tabs';
import { usePatient } from 'models/patient';
import { useRoute } from 'models/route';
const TabItem = props => <View {...props} />;

const Carousel = ({ data, navigation, render }) => {
  if (!data.length) {
    return null;
  }

  const [checkFlag, setCheckFlag] = useState(false);
  const [{ patient }, { setPatientName }] = usePatient();
  const [, { setRouteChange }] = useRoute();

  const onTabClick = newIndex => {
    setRouteChange({path: 'Calculator', query: newIndex});
    if(newIndex === '5') setCheckFlag(true);
  }

  return (
    <Tabs defaultIndex="1" horizontal={true} onTabClick={(newIndex) => onTabClick(newIndex)}>
        {
            data.map(item => (
              <TabItem
                key={item.id}
                label={item.title}
                index={item.id}
                score={patient[item.title] ? patient[item.title].score : null}
                checkFlag={checkFlag}
              >
                {render(item)}
              </TabItem>
            ))
        }
    </Tabs>
  );
};

export default Carousel;
