import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Modal = ({ isVisible = false, title, content, onClose }) => {
    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    function keydownHandler({ key }) {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    }

    return !isVisible ? null : (
        <ModalContainer onPress={onClose}>
            <ModalDialog onPress={e => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                    <ModalClose onPress={onClose}>
                        &times;
                    </ModalClose>
                </ModalHeader>
                <ModalBody>
                    <ModalContent>{content}</ModalContent>
                </ModalBody>
            </ModalDialog>
        </ModalContainer>
    );
}

export default Modal;

const ModalContainer = styled.TouchableWithoutFeedback`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.25);
    animation-name: appear;
    animation-duration: 300ms;
`
const ModalDialog = styled.View`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 20px;
    text-align: left;
    width: 100%;
    max-width: 550px;
    max-height: calc(100vh - 40px);
    background: white;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: slide-in;
    animation-duration: 0.5s;
`

const ModalHeader = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-bottom: 1px solid #dbdbdb;
`
const ModalClose = styled.TouchableOpacity`
    padding: 24px;
    margin: -24px -24px -24px auto;
`

const ModalTitle = styled.Text`

`

const ModalBody = styled.View`
    overflow: auto;
`

const ModalContent = styled.View`
    padding: 24px;
`

// @keyframes appear {
//     from {
//         opacity: 0;
//     }
//     to {
//         opacity: 1;
//     }
// }

// @keyframes slide-in {
//     from {
//         transform: translateY(-150px);
//     }
//     to {
//         transform: translateY(0);
//     }
// }

    //Add the component to the render function
    // function App() {
    //     const [isModal, setModal] = React.useState(false);

    //     return (
    //         <React.Fragment>
    //             <button onClick={() => setModal(true)}>Click Here</button>
    //                 <Modal
    //                     isVisible={isModal}
    //                     title="Modal Title"
    //                     content={<p>Add your content here</p>}
    //                     footer={<button>Cancel</button>}
    //                     onClose={() => setModal(false)}
    //                 />
    //         </React.Fragment>
    //     );
    // }
