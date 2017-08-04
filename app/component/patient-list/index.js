import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import { Container } from "native-base";

import Header from "../header/";

const patientList = ({ navigation }) => {
    return (<Container>
        <Image style={Style.backImage} source={require("../../assets/back.png")} >
            <Header name="Patient List" iconName="arrow-back" clickEvent={() => navigation.navigate("Home")} />
            <Text>PATIENT's</Text>
        </Image>
    </Container>)
}
const Style = StyleSheet.create({
    backImage: {
        flex: 1, width: null, height: null
    }
})
export default patientList;

