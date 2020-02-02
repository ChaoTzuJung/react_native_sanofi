import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
// import { withNavigation } from 'react-navigation';

import Tabs from './Tabs';

const TabItem = props => <View {...props} />;

const Carousel = ({ data, navigation }) => {
  if (!data.length) {
    return null;
  }

  return (
    <Tabs defaultIndex="1" horizontal={true} onTabClick={console.log}>
        {
            data.map(item => (
                <TabItem label={item.title} index={item.id} key={item.id}>
                </TabItem>
            ))
        }
    </Tabs>
  );
};

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 15,
//     marginBottom: 5
//   },
//   container: {
//     marginBottom: 10
//   }
// });

// export default withNavigation(Carousel);

export default Carousel;