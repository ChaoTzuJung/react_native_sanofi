import React, { Framgent } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Button } from 'react-native';
import styled from 'styled-components/native';


const content = () => <Text>Add your content here</Text>

const CalculatorScreen = ({ navigation }) => {
    const [isModal, setModal] = React.useState(false);

    return (
        <View>
            <Button title="Click Here" onPress={() => navigation.navigate('MyModal')}></Button>
        </View>
    )
};

export default CalculatorScreen;