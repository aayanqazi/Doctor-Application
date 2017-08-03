import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Platform
} from 'react-native';
import { Container, Grid, Col, Row, Header, Card, CardItem, Body, Footer, FooterTab, Icon, Text, Left, Button, Title, Content, Thumbnail } from 'native-base';
import Main from "../main/";
export default class Dashboard extends Component {
    state = {
        value:0
    }
    logOut = () => {
        AsyncStorage.removeItem('token', () => {
            this.props.navigation.navigate('login')
        })
    }
    mainWindow = () => {
        switch(this.state.value){
            case 0:
            return <Main logout={this.logOut} navigation={this.props.navigation}/>;
            default:
            return "not found"
        }
        
    }
    render() {
        console.log(this.props)
        return (
            <Container>
                <Header style={Style.headerStyle}>
                    <Left>
                        <Button transparent>
                            <Icon name='md-more' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Tracking System</Title>
                    </Body>
                </Header>
                <Image style={Style.backImage} source={require("../../assets/back.png")}>
                    <Content>
                        {this.mainWindow()}
                    </Content>
                    <Footer footerDefaultBg="red">
                        <FooterTab>
                            <Button active>
                                <Icon name="apps" />
                                <Text>Main</Text>
                            </Button>
                            <Button>
                                <Icon name="person" />
                                <Text>Profile</Text>
                            </Button>
                            <Button>
                                <Icon name="ios-medkit" />
                                <Text>Patients</Text>
                            </Button>
                            <Button onPress={() => this.logOut()}>
                                <Icon name="ios-log-out" />
                                <Text>Logout</Text>
                            </Button>
                        </FooterTab>
                    </Footer>

                </Image>

            </Container>
        );
    }
}
const Style = {
    headerStyle: {
        backgroundColor: (Platform.OS === 'ios') ? '#F8F8F8' : "#22a3d7",
    },
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
