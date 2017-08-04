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

const addPeople = ({navigation}) => {
    return (<Container>
        <Image style={Style.backImage} source={require("../../assets/back.png")} >
        <Header name="Add Patient" iconName="arrow-back" clickEvent={()=>navigation.navigate('Home')}/>
        <Text>ADD PATIENT</Text>
        </Image>
    </Container>)
}
const Style = StyleSheet.create({
    backImage: {
        flex: 1, width: null, height: null
    }
})
export default addPeople;

