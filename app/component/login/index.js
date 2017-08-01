import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image
} from 'react-native';
import { Container, Header, Form, Thumbnail, Item, Input, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Authentication</Title>
                    </Body>
                </Header>
                <Image style={Style.backImage} source={ require("../../assets/back.png")  }>
                <Content>
                    <View style={Style.imageStyle}>
                        <Thumbnail
                            style={Style.imageThumbnail}
                            source={ require("../../assets/doctor.png")}
                        />
                    </View>
                    <Form>
                        <Item>
                            <Input placeholder="Email" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                    </Form>
                </Content>
                </Image>
            </Container>

        );
    }
}
const Style = {
    imageThumbnail: {
        width: 200,
        height: 200,
        alignItems: 'center'
    },
    imageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backImage: {
       flex: 1, width: null, height: null 
    }
}
