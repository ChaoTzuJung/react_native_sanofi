import React, { useEffect } from 'react';
import { View , Text, Dimensions, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import uuidv4 from 'uuid/v4';
import { usePatient } from 'models/patient';
import CustomText from 'components/Common/CustomText';
import Input from 'components/Common/Input';
import CloseIcon from 'assets/close.svg';

const MailLayout = props => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [isOnCheck, setChecking] = React.useState(false);
    const [showValidMessage, setShowValidMessage] = React.useState(false);
    const [users, setUsers] = React.useState([]);
    const InputNameEl = React.useRef(null);
    const InputMailEl = React.useRef(null);
    const [,{ resetPatientData }] = usePatient();
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm
    const addUser = type => {
        setChecking(true);
        // 狀況ㄧ: 直接 Submit tag 而且input目前為空
        if(type === 'submit' && users.length > 0 && email == '') {
            setChecking(false);
            showDialog();
        // 狀況二: 沒有tag且不知道要按下 Add recipient，就直接 submit
        } else if(type === 'submit' && users.length <= 0 && email.match(emailRegex)) {
            setUsers([...users, {name, email, id: uuidv4()}]);
            InputNameEl.current.clearInput();
            InputMailEl.current.clearInput();
            setName('');
            setEmail('');
            setChecking(false);
            showDialog();
        } else if(type === 'submit' && users.length > 0 && email.match(emailRegex)) {
            // 狀況三: 有tag且input有email同時submit input跟tag的值
            setUsers([...users, {name, email, id: uuidv4()}]);
            InputNameEl.current.clearInput();
            InputMailEl.current.clearInput();
            setName('');
            setEmail('');
            setChecking(false);
            showDialog();
        } else if(type === 'add' && email.match(emailRegex)) {
            // 狀況四: 直接 Add recipient 而且input目前為空 or 有tag 而且 input有值想一起送出
            setUsers([...users, {name, email, id: uuidv4()}]);
            InputNameEl.current.clearInput();
            InputMailEl.current.clearInput();
            setName('');
            setEmail('');
            setChecking(false);
        } else {
            setShowValidMessage(true)
        }
    }

    const deleteUser = id => {
        const result = users.filter(user => user.id !== id);
        setUsers([...result]);
    };

    const backToHome = () => {
        resetPatientData();
        props.navigation.popToTop();
    };

    const showDialog = () => {
        setShowValidMessage(false);
        console.log(`Pass data to back-end.`);
        console.log(`Loading`);
        console.log(`Clear tag(users)`);
        console.log(`Show Dialog`);
        Alert.alert(
            'Reloading this page will lose your data.',
            'Are you sure you want to start the next calculation?',
            [
                {text: 'Next Calculation', onPress: () => backToHome()},
                {text: 'Stay on this Page', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            {cancelable: false},
        );
    }

    const handleMailSubmit = () => addUser('submit');

    return (
        <MailContainer>
            <HorizonLine />
            <Section> 
                <CustomText size="h6" color="#333" value="Your Name: " style={{ marginBottom: 10 }} />
                <Input
                    onInputChange={(value) => setName(value)}
                    style={{ marginBottom: 20 }}
                    ref={InputNameEl}
                />
                <CustomText size="h6" color="#333" value="Email Address: " style={{ marginBottom: 10 }} />
                <Input
                    invalid={showValidMessage && isOnCheck}
                    onInputChange={(value) => setEmail(value)}
                    style={showValidMessage && isOnCheck ? { marginBottom: 0 } : { marginBottom: 20 }}
                    ref={InputMailEl}
                />
                {users && users.map((user, idx) => (
                    <Tag key={`${user.email} - ${idx}`}>
                        <CustomText size="h7" color="#000" value={user.name ? `${user.name}, ${user.email}` : user.email} style={{ marginRight: 11 }} />
                        <TouchableOpacity onPress={() => deleteUser(user.id)}><CloseIcon /></TouchableOpacity>
                    </Tag>
                ))}
                <AddRecipient onPress={() => addUser('add')}>
                    <CustomText size="h7" color="#000" value="+ add recipient" />
                </AddRecipient>
                <Button onPress={() => handleMailSubmit()}>
                    <CustomText size="h6" color="#fff" value="Submit" />
                </Button>
            </Section>
        </MailContainer>
    )
};

export default MailLayout;

const MailContainer = styled.View`

`

const Tag = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: flex-start;
    margin-bottom: 8px;
    padding: 8px 20px;
    width: auto;
    height: 38px;
    border-radius: 19px;
    border: solid 1px #525ca3;
    background-color: rgba(82, 92, 163, 0.3);
`

const AddRecipient = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    margin-bottom: 40px;
    padding: 8px 20px;
    height: 38px;
    border-radius: 19px;
    border: solid 1px #bcbc1c;
    background-color: rgba(188, 188, 28, 0.3);
`

const Section = styled.View`
    margin: 24px 0;
`

const HorizonLine = styled.View`
    width: 100%;
    height: 2px;
    background-color: #eeeeee;
`

const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 235px;
    height: 56px;
    border-radius: 32px;
    background-color: ${props => props.theme.main};
`