import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Platform
} from 'react-native';
import Header from "../header/";

import { Container, Form, Thumbnail, Item, Input, Label, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Signup extends Component {
    state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null
    }
    signUp = () => {
        if (this.state.email && this.state.password && this.state.firstName && this.state.lastName) {
            this.props.signup({ email: this.state.email, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName });
        }
        else {
            alert("Required fill all feild")
        }
    }
    componentWillReceiveProps(newProps) {
        if (newProps.userData.isRegistered) {
            this.props.navigation.goBack();
        }
    }
    render() {
        return (
            <Container>
                <Header name="Authentication" iconName="arrow-back" clickEvent={()=>this.props.navigation.goBack()}/>
                <Image style={Style.backImage} source={require("../../assets/back.png")}>
                    <Content>
                        <View style={Style.imageStyle}>
                            <Thumbnail
                                style={Style.imageThumbnail}
                                source={require("../../assets/doctor.png")}
                            />
                            <Form style={Style.loginContainer}>
                                <Item floatingLabel>
                                    <Label style={Style.loginContainer}>First Name</Label>
                                    <Input onChangeText={(value) => this.setState({ firstName: value })} />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Last Name</Label>
                                    <Input onChangeText={(value) => this.setState({ lastName: value })} />
                                </Item>
                                <Item floatingLabel>
                                    <Label style={Style.loginContainer}>Email</Label>
                                    <Input onChangeText={(value) => this.setState({ email: value })} />
                                </Item>
                                <Item floatingLabel>
                                    <Label style={Style.loginContainer}>Password</Label>
                                    <Input secureTextEntry onChangeText={(value) => this.setState({ password: value })} />
                                </Item>
                                <Button style={Style.loginButton} onPress={() => this.signUp()} full info>
                                    <Text>Register</Text>
                                </Button>
                            </Form>
                        </View>
                    </Content>
                </Image>
            </Container>
        );
    }
}
const Style = {
    imageThumbnail: {
        width: 200,
        height: 200
    },
    imageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backImage: {
        flex: 1, width: null, height: null
    },
    loginContainer: {
        width: "90%"
    },
    loginButton: {
        width: "95%",
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 20
    }

}
