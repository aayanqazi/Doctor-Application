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
import Clock from "../clock/";

import { Grid, Col, Row, Header, Card, CardItem, Body, Footer, FooterTab, Icon, Text, Left, Button, Content } from 'native-base';

const Main = ({ logout, navigation }) => {
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
                    <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate('AddPeople')}>
                        <Image style={Style.icon} source={require("../../assets/add.png")} />
                        <Text>Add Patient</Text>
                    </TouchableOpacity>
                </Col>
                <Col style={Style.rightTopGrid}>
                    <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate('PatientList')}>
                        <Image style={Style.icon} source={require("../../assets/search.png")} />
                        <Text>Patient List</Text>
                    </TouchableOpacity>
                </Col>
            </Row>
            <Row>
                <Col style={Style.leftBottomGrid}>
                    <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate('emergency')}>
                        <Image style={Style.icon} source={require("../../assets/emergency.png")} />
                        <Text>Emergency Numbers</Text>
                    </TouchableOpacity>
                </Col>
                <Col style={Style.rightBottomGrid}>
                    <TouchableOpacity style={{ alignItems: "center" }} onPress={logout}>
                        <Image style={Style.icon} source={require("../../assets/logout.png")} />
                        <Text>LogOut</Text>
                    </TouchableOpacity>

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