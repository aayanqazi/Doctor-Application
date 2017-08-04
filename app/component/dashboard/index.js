import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Platform,
    TouchableOpacity
} from 'react-native';
import Home from "../main/";
import Header from "../header/";
import { Container, Grid, Col, Row, Card, CardItem, Body, Footer, FooterTab, Icon, Text, Left, Button, Title, Content, Thumbnail } from 'native-base';
export default class Dashboard extends Component {
    static navigationOptions = {
        tabBarLabel: 'Main',
    };
    state = {
        value: 0
    }
    logOut = () => {
        AsyncStorage.removeItem('token', () => {
            this.props.navigation.navigate('login')
        })
    }
    render() {
        return (
            <Container>
                <Image style={Style.backImage} source={require("../../assets/back.png")}>
                    <Header name="Tracking System" iconName="menu" />
                    <Content>
                        <Home logout={this.logOut} navigation={this.props.navigation} />
                    </Content>
                </Image>
            </Container>
        );
    }
}

const Style = {
    backImage: {
        flex: 1, width: null, height: null
    },
    mainWindow: {
        flex: 1,
        display: "flex",
    },
    icon: { width: 40, height: 40 },
    leftTopGrid: { backgroundColor: "rgba(255,255,255,0.3)", justifyContent: "center", alignItems: "center", height: 100, borderRightWidth: 1, borderBottomWidth: 1 },
    rightTopGrid: { backgroundColor: "rgba(255,255,255,0.3)", justifyContent: "center", alignItems: "center", height: 100, borderBottomWidth: 1 },
    leftBottomGrid: { backgroundColor: "rgba(255,255,255,0.3)", justifyContent: "center", alignItems: "center", height: 100, borderRightWidth: 1 },
    rightBottomGrid: { backgroundColor: "rgba(255,255,255,0.3)", justifyContent: "center", alignItems: "center", height: 100 }
}
