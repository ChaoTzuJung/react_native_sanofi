import React from 'react';
import Tabs from 'components/Common/Tabs';
import { usePatient } from 'models/patient';
import { useRoute } from 'models/route';
const TabItem = props => <View {...props} />;

const Carousel = ({ data, navigation, render }) => {
  if (!data.length) {
    return null;
  }
  const [{ patient }, { setPatientName }] = usePatient();
  const [, { setRouteChange }] = useRoute();

  return (
    <Tabs defaultIndex="1" horizontal={true} onTabClick={(newIndex) => setRouteChange({query: newIndex})}>
        {
            data.map(item => (
              <TabItem
                key={item.id}
                label={item.title}
                index={item.id}
                score={patient[item.title] ? patient[item.title].score : null}
              >
                {render(item)}
              </TabItem>
            ))
        }
    </Tabs>
  );
};

export default Carousel;
