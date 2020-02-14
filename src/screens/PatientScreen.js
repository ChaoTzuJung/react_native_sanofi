import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import styled from 'styled-components/native';
import { useRoute } from 'models/route';
import { usePatient } from 'models/patient';

import CustomText from 'components/Common/CustomText';
import Input from 'components/Common/Input';
import Radio from 'components/Common/Radio';
import Footer from 'components/Common/Footer';

const ages = ['0-5', '6-11', '12-17', '18-30', '30-40', '40-50', '50-60', '60+', 'unknown'];
const genders =['Male', 'Female', 'Unknown'];
const PatientScreen = ({ navigation }) => {

    const [name, setName] = React.useState('');
    const [ageIndex, setAgeIndex] = React.useState(null);
    const [genderIndex, setGenderIndex] = React.useState(null);
    const [isOnCheck, setChecking] = React.useState(false);
    const [, { setRouteChange }] = useRoute();
    const [, { setPatientInfomation }] = usePatient();

    const navigateToReportScreen = type => {
        setPatientInfomation({
            name,
            age: ageIndex !== null ? ages[ageIndex] : 'unknown',
            gender: genderIndex !== null ? genders[genderIndex] : 'Unknown',
        });
        navigation.navigate('Report', { type });
    }

    const submitAction = type => {
        setChecking(true);
        if(name.length <= 0) return;
        else navigateToReportScreen(type);
    }

    const onRadioChange = (id, name) => {
        if(name === 'age') setAgeIndex(id);
        else setGenderIndex(id);
    }

    return (
        <ScrollView>
            <NavigationEvents onDidFocus={payload => setRouteChange({path: payload.state.routeName})} />
            <ScreenTitle>Patient Information</ScreenTitle>
            <PatientContainer> 
                <Row>
                    <CustomText size="h6" color="#333333" value="Patient Identifier/Number:" style={{ marginBottom: 10 }} />
                    <Input
                        invalid={name.length <= 0 && isOnCheck}
                        onInputChange={(value) => setName(value)}
                    />
                </Row>
                <Row>
                    <CustomText size="h6" color="#333333" value="Patient Age: " style={{ marginBottom: 20 }} />
                    <Answer>
                        {ages.map((key, idx) => (
                            <RadioItem key={key}>
                                <Radio
                                    id={idx}
                                    size="20"
                                    color="second"
                                    style={{ marginRight: 8 }}
                                    isSelect={ageIndex === idx}
                                    onRadioChange={(id) => onRadioChange(id, 'age')}
                                />  
                                <CustomText size="h7" color="#333" value={key} />
                            </RadioItem>
                        ))}
                    </Answer>
                </Row>
                <Row>
                    <CustomText size="h6" color="#333333" value="Gender" style={{ marginBottom: 16 }} />
                    <Answer>
                    {genders.map((key, idx) => (
                        <RadioItem key={key}>
                            <Radio
                                id={idx}
                                size="20"
                                color="second"
                                style={{ marginRight: 8 }}
                                isSelect={genderIndex === idx}
                                onRadioChange={(id) => onRadioChange(id, 'gender')}
                            />  
                            <CustomText size="h7" color="#333" value={key} />
                        </RadioItem>
                    ))}
                </Answer>
                </Row>
                <ResultButton onPress={() => submitAction('Full Report')}>
                    <CustomText font="medium" size="h5" color="#ffffff" value="Generate the full report" />
                </ResultButton>
                <ResultButton outline onPress={() => submitAction('Text Report')}>
                    <CustomText font="medium" size="h5" color="#bcbc1c" value="Generate the text report" />
                </ResultButton>
            </PatientContainer> 
            <Footer />
        </ScrollView>
    )
}

PatientScreen.navigationOptions = ({ navigation }) => {
    const c = navigation.state.params || {};

    return {
        headerTitle: () => <CustomText font="normal" size="h6" color="#333333" value="Patient" />
    };
};

export default PatientScreen;

const Row = styled.View`
    margin-bottom: 40px;
`;

const RadioItem = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    width: 25%;
`

const Answer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`

const PatientContainer = styled.View`
    padding: 0 20px;
    margin-bottom: 60px;
`

const ScreenTitle = styled.Text`
    margin: 40px 0;
    padding: 0 20px;
    height: 32px;
    color: #000000;
    text-align: center;
    font-family: 'ITCAvantGardeProBk';
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.5px;
`;

const ResultButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 20px;
    width: 275px;
    height: 56px;
    border-radius: 32px;
    background-color: ${props => props.outline ? '#fff' : props.theme.main};
    border-color: ${props => props.outline ? props.theme.main : 'transparent'};
    border-width: ${props =>  props.outline ? '2px' : '0px'};
`