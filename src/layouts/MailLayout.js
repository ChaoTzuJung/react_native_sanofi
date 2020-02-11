import React from 'react';
import { View , Text, Slider, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import CustomText from 'components/Common/CustomText';
import Input from 'components/Common/Input';
import CloseIcon from 'assets/close.svg';

const MailLayout = props => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [isOnCheck, setChecking] = React.useState(false);
    const [users, setUsers] = React.useState([]);
    const InputNameEl = React.useRef(null);
    const InputMailEl = React.useRef(null);

    const addUser = () => {
        setUsers([...users, {name, email}]);
        InputNameEl.current.clearInput();
        InputMailEl.current.clearInput();
        setName('');
        setEmail('');
    };
    const deleteUser = email => {
        const result = users.filter(user => user.email !== email);
        setUsers([...result]);
    }



    return (
        <MailContainer>
            <HorizonLine />
            <Section> 
                <CustomText size="h6" color="#333" value="Your Name: " style={{ marginBottom: 10 }} />
                <Input
                    invalid={name.length <= 0 && isOnCheck}
                    onInputChange={(value) => setName(value)}
                    style={{ marginBottom: 20 }}
                    ref={InputNameEl}
                />
                <CustomText size="h6" color="#333" value="Email Address: " style={{ marginBottom: 10 }} />
                <Input
                    invalid={name.length <= 0 && isOnCheck}
                    onInputChange={(value) => setEmail(value)}
                    style={{ marginBottom: 20 }}
                    ref={InputMailEl}
                />
                {users && users.map((user, idx) => (
                    <Tag key={`${user.email} - ${idx}`}>
                        <CustomText size="h7" color="#000" value={user.name ? `${user.name}, ${user.email}` : user.email} style={{ marginRight: 11 }} />
                        <TouchableOpacity onPress={() => deleteUser(user.email)}><CloseIcon /></TouchableOpacity>
                    </Tag>
                ))}
                <AddRecipient onPress={addUser}>
                    <CustomText size="h7" color="#000" value="+ add recipient" />
                </AddRecipient>
                <Button onPress={() => console.log('Submit')}>
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