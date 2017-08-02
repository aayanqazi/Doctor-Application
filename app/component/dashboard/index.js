import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image
} from 'react-native';
import { Actions } from "react-native-router-flux";
import { Container, Header, Body, Footer, FooterTab, Icon, Text, Left, Button, Title, Content, Thumbnail } from 'native-base';

export default class Dashboard extends Component {

    render() {
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

                    </Content>
                    <Footer style={Style.headerStyle}>
                        <FooterTab>
                            <Button>
                                <Icon name="apps" />
                                <Text>Main</Text>
                            </Button>
                            <Button>
                                <Icon name="person" />
                                <Text>Profile</Text>
                            </Button>
                            <Button active>
                                <Icon name="ios-medkit" />
                                <Text>Patients</Text>
                            </Button>
                            <Button>
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
        backgroundColor: "#22a3d7",
    },
    backImage: {
        flex: 1, width: null, height: null
    }

}
