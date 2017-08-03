import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Platform
} from 'react-native';
import Clock from "../clock/";
import {Grid, Col, Row, Header, Card, CardItem, Body, Footer, FooterTab, Icon, Text, Left, Button, Content } from 'native-base';

const Main = ({logout}) => {
    console.log(logout)
    return (<View>
            <Card style={{ marginTop: 10, backgroundColor: "transparent" }}>
                <CardItem style={{ backgroundColor: "rgba(255,255,255,0.3)" }}>
                    <Clock />
                </CardItem>
            </Card>
            <Grid style={Style.mainWindow}>
                <Row>
                    <Col style={Style.leftTopGrid}>
                        <View style={{ alignItems: "center" }}>
                            <Image style={Style.icon} source={require("../../assets/add.png")} />
                            <Text>Add Patient</Text>
                        </View>
                    </Col>
                    <Col style={Style.rightTopGrid}>
                        <View style={{ alignItems: "center" }}>
                            <Image style={Style.icon} source={require("../../assets/search.png")} />
                            <Text>Search Patient</Text>
                        </View>

                    </Col>
                </Row>
                <Row>
                    <Col style={Style.leftBottomGrid}>
                        <View style={{ alignItems: "center" }}>
                            <Image style={Style.icon} source={require("../../assets/emergency.png")} />
                            <Text>Emergency Numbers</Text>
                        </View>
                    </Col>
                    <Col style={Style.rightBottomGrid}>
                        <View style={{ alignItems: "center" }}>
                            <Image style={Style.icon} source={require("../../assets/logout.png")} />
                            <Text>LogOut</Text>
                        </View>

                    </Col>
                </Row>
            </Grid>
        </View>)
}
const Style = {
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

export default Main;