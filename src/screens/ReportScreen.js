import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import styled from 'styled-components/native';
import { useRoute } from 'models/route';
import { usePatient } from 'models/patient';

import TextReportLayout from '../layouts/TextReportLayout';
import FullReportLayout from '../layouts/FullReportLayout';
import MailLayout from '../layouts/MailLayout';
import CustomText from 'components/Common/CustomText';
import Footer from 'components/Common/Footer';

const submitAction = () => {};

const ReportScreen = ({ navigation }) => {
    const scrollEl = React.useRef();
    const title = navigation.getParam('type');
    const [type, setType] = React.useState(title);
    const [mailIsShow, setMailIsShow] = React.useState(false);

    const [, { setRouteChange }] = useRoute();
    const [, { setPatientInformation }] = usePatient();

    const showMailSection = () => {
        setMailIsShow(!mailIsShow);
        if(!mailIsShow) scrollEl.current.scrollToEnd({ animated: true, duration: 500 });
    };

    const switchType = () => {                    
        if(type === 'Text Report') setType('Full Report');
        else setType('Text Report');
        scrollEl.current.scrollTo({x: 0, y: 0, animated: true, duration: 500 })
    };

    const buttonTitle = () => type   === 'Text Report' ? 'Full Report' : 'Text Report';
    const handleLayout = () => type === 'Text Report' ? <TextReportLayout />  : <FullReportLayout />;
    return (
        <ScrollView ref={scrollEl}>
            <NavigationEvents onDidFocus={payload => setRouteChange({path: payload.state.routeName})} />
            <ScreenTitle>{title}</ScreenTitle>
            <ReportContainer> 
                <ReportButton onPress={showMailSection}>
                    <CustomText font="medium" size="h6" color="#ffffff" value="Mail me the report" />
                </ReportButton>
                <ReportButton outline onPress={switchType}>
                    <CustomText font="medium" size="h6" color="#bcbc1c" value={`View the ${buttonTitle()}`} />
                </ReportButton>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CustomText font="medium" size="h5" color="rgba(0, 0, 0, 0.5)" value="Back to patient information" style={{ textAlign: 'center' }} />
                </TouchableOpacity>
                <HorizonLine />
                {handleLayout()}
                {mailIsShow && <MailLayout />}
            </ReportContainer> 
            <Footer />
        </ScrollView>
    )
}

ReportScreen.navigationOptions = ({ navigation }) => {
    const c = navigation.state.params || {};

    return {
        headerTitle: () => <CustomText font="normal" size="h6" color="#333333" value="Report" />
    };
};

export default ReportScreen;
const ReportContainer = styled.View`
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

const ReportButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 20px;
    width: 235px;
    height: 50px;
    border-radius: 32px;
    background-color: ${props => props.outline ? '#fff' : props.theme.main};
    border-color: ${props => props.outline ? props.theme.main : 'transparent'};
    border-width: ${props =>  props.outline ? '2px' : '0px'};
`

const HorizonLine = styled.View`
    width: 100%;
    height: 2px;
    background-color: #eeeeee;
    margin: 20px 0;
`