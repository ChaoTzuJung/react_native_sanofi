import React from 'react';
import { View, Text, Dimensions, Platform, ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import CustomText from 'components/Common/CustomText';
import CloseIcon from 'assets/close2.svg';
import { Table, TableWrapper, Row, Rows, Cell } from 'react-native-table-component';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

const TabItem = props => <View {...props} />;

const TableModalScreen = ({ navigation }) => {
    const { width: screenWidth } = Dimensions.get("window");
    const [tableHead, setTableHead] = React.useState(['Score', 'Morphological Description']);
    const [tableData, settableData] = React.useState(
        [
            ['0 – Clear', 'No inflammatory signs of atopic dermatitis (no erythema, no induration/papulation, no lichenification, no oozing/crusting). Post-inflammatory hyperpigmentation and/or hypopigmentation may be present.'],
            ['1 – Almost clear', 'Barely perceptible erythema, barely perceptible induration/papulation, and/or minimal lichenification. No oozing or crusting.'],
            ['2 – Mild', 'Slight but definite erythema (pink), slight but definite induration/papulation, and/or slight but definite lichenification. No oozing or crusting.'],
            ['3 – Moderate', 'Clearly perceptible erythema (dull red), clearly perceptible induration/papulation, and/or clearly perceptible lichenification. Oozing and crusting may be present.'],
            ['4 – Severe', 'Marked erythema (deep or bright red), marked induration/papulation, and/or marked lichenification. Disease is widespread in extent. Oozing or crusting may be present.'],
          ]
    );
    const [widthArr, setWidthArr] = React.useState([(screenWidth - 32) * 0.4, (screenWidth - 32) * 0.6])

    return (
        <ModalContainer>
            <CloseButton onPress={() => navigation.goBack()}>
                <CloseIcon fill={"#FFF"} />
            </CloseButton>
            <ScreenTitle>Investigator Global{"\n"}Assessment scale</ScreenTitle>
            <CustomText size="h6" color="#000" value="The IGA score is selected using the descriptors below that best describe the overall appearance of the lesions at a given time point. It is not necessary that all characteristics under Morphological Description be present." style={{ lineHeight: 24, marginBottom: 36 }} />
            <Table borderStyle={{borderColor: 'transparent'}} style={{ height: '65%' }}>
                <Row data={tableHead} style={styles.head} textStyle={styles.headText} widthArr={widthArr} />
                <ScrollView showsVerticalScrollIndicator={false}>
                {tableData.map((rowData, index) => (
                    <TableWrapper key={index} style={index % 2 ? styles.grayRow : styles.whiteRow}>
                    {
                      rowData.map((cellData, cellIndex) => (
                        <Cell key={cellIndex} data={cellData} textStyle={styles.text} style={cellIndex % 2 ? {width: (screenWidth - 32) * 0.6} : {width: (screenWidth - 32) * 0.4}} />
                      ))
                    }
                    </TableWrapper>
                ))}
                </ScrollView>
            </Table>
        </ModalContainer>
    )
};

export default TableModalScreen;

const styles = StyleSheet.create({
    head: {height: 42, backgroundColor: '#525ca3'},
    headText: { fontFamily: 'Arial', fontSize: 14, color: '#ffffff', marginLeft: 16 },
    text: { fontFamily: 'Arial', fontSize: 14, color: '#000000', marginLeft: 16, marginRight: 16, marginTop: 10, marginBottom: 10 },
    whiteRow: { flexDirection: 'row', backgroundColor: '#ffffff', alignItems: 'flex-start'},
    grayRow: { flexDirection: 'row', backgroundColor: '#eeeeee', alignItems: 'flex-start' },
  });

const ScreenTitle = styled.Text`
    margin: 40px 0 10px 0;
    color: #000000;
    text-align: center;
    font-family: 'ITCAvantGardeProBk';
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.5px;
`;

const ModalContainer = styled.View`
    padding: 40px 16px;
`

const CloseButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40px;
    right: 0;
    width: 40px;
    height: 40px;
    background-color: #525CA3;
`
