import React from 'react';
import { View } from 'react-native';
import Tabs from 'components/Common/Tabs';
import { usePatient } from 'models/patient';

const TabItem = props => <View {...props} />;

const Carousel = ({ data, navigation, children, render }) => {
  if (!data.length) {
    return null;
  }
  const [{ patient }, { setPatientName }] = usePatient();

  return (
    <Tabs defaultIndex="1" horizontal={true} onTabClick={console.log}>
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
