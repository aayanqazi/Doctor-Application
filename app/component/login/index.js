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
import { NavigationActions } from "react-navigation";

import { Container, Form, Thumbnail, Item, Input, Label, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Login extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    state = {
        email: "",
        password: ""
    }
    componentWillMount() {
        AsyncStorage.getItem('token', (err, result) => {
            if (result) {
                this.props.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'dashboard' })] }))
            }
        })
    }
    componentWillReceiveProps(newProps) {
        if (newProps.user.isAuthenticated) {
            this.props.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'dashboard' })] }))
            AsyncStorage.setItem('token', "1234Admin78910");
        }
        else if(newProps.user.isError){
            alert("Invalid username and password");
        }
    }
    login = () => {
        this.props.login({ email: this.state.email, password: this.state.password });
        // AsyncStorage.getItem('user', (err, res) => {
        //     let user = JSON.parse(res);
        //     if (this.state.email == user.email && this.state.password == user.password) {
        //         alert("Congratulations!!");
        //         AsyncStorage.setItem('token', "1234Admin78910");
        //         this.props.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'dashboard' })] }))

        //     }
        //     else {
        //         alert("Failed Please try gain")
        //     }
        // })
    }

    render() {
        return (
            <Container>
                <Image style={Style.backImage} source={require("../../assets/back.png")}>
                    <Header name="Authentication" iconName="menu" />
                    <Content>
                        <View style={Style.imageStyle}>
                            <Thumbnail
                                style={Style.imageThumbnail}
                                source={require("../../assets/doctor.png")}
                            />
                            <Form style={Style.loginContainer}>
                                <Item floatingLabel>
                                    <Label style={Style.loginContainer}>Email</Label>
                                    <Input onChangeText={(value) => this.setState({ email: value })} />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Password</Label>
                                    <Input onChangeText={(value) => this.setState({ password: value })} secureTextEntry />
                                </Item>
                                <Button style={Style.loginButton} onPress={() => this.login()} full info>
                                    <Text>Login</Text>
                                </Button>
                            </Form>
                            <Text onPress={() => this.props.navigation.navigate('singup')} style={Style.notlogged}>
                                No account yet? Create one
                                </Text>
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
        width: "90%",
    },
    loginButton: {
        width: "95%",
        marginLeft: 15,
        marginTop: 20,
    },
    notlogged: {
        color: "white",
        fontWeight: "bold",
        marginTop: 13,
    }

}
