import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import {Container} from "native-base";
import Header from "../header/";



export default class Emergency extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Image style={Style.backImage} source={require("../../assets/back.png")} >
                    <Header name="Emergency Number" iconName="arrow-back" clickEvent={()=>this.props.navigation.navigate('Home')}/>
                    <Text>Emergency Numbers</Text>
                </Image>
            </Container>
        )
    }
}
const Style = StyleSheet.create({
    backImage: {
        flex: 1, width: null, height: null
    }
})