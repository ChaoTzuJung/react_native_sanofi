import React from 'react';
import {
  View,
} from 'react-native';
// import { withNavigation } from 'react-navigation';

import Tabs from 'components/Common/Tabs';

const TabItem = props => <View {...props} />;

const Carousel = ({ data, navigation, children, render }) => {
  if (!data.length) {
    return null;
  }

  return (
    <Tabs defaultIndex="1" horizontal={true} onTabClick={console.log}>
        {
            data.map(item => (
              <TabItem label={item.title} index={item.id} key={item.id}>
                {render(item)}
              </TabItem>
            ))
        }
    </Tabs>
  );
};

// export default withNavigation(Carousel);

export default Carousel;
