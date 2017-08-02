import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image
} from 'react-native';
import { Actions } from "react-native-router-flux";
import { Container, Header, Body, Icon, Text, Left, Button, Title, Content, Thumbnail } from 'native-base';

export default class Dashboard extends Component {

    render() {
        return (
            <Container>
                <Header style={Style.headerStyle}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Tracking System</Title>
                    </Body>
                </Header>
                <Image style={Style.backImage} source={require("../../assets/back.png")}>
                    <Content>

                    </Content>
                </Image>
            </Container>
        );
    }
}
const Style = {
    headerStyle: {
        backgroundColor: "#22a3d7",
    },
    backImage: {
        flex: 1, width: null, height: null
    }

}
