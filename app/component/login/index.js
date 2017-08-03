import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Platform
} from 'react-native';
import { Container, Header, Form, Thumbnail, Item, Input, Label, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    componentWillMount(){
    AsyncStorage.getItem('token', (err, res) => {
        if(res){
            this.props.navigate('dashboard');
        }
    })
    }
    login = () => {
        AsyncStorage.getItem('user', (err, res) => {
            let user = JSON.parse(res);
            if (this.state.email == user.email && this.state.password == user.password) {
                alert("Congratulations!!");
                AsyncStorage.setItem('token', "1234Admin78910");
                this.props.navigate('dashboard');
            }
            else {
                alert("Failed Please try gain")
            }
        })
    }

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
                        <Title>Authentication</Title>
                    </Body>
                </Header>
                <Image style={Style.backImage} source={require("../../assets/back.png")}>
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
                            <Text onPress={()=>this.props.navigate('singup')} style={Style.notlogged}>
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
    headerStyle: {
        backgroundColor: (Platform.OS === 'ios') ? '#F8F8F8' : "#22a3d7",
    },
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
