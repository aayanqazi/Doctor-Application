import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Platform
} from 'react-native';
import { Container, Header,Card,CardItem, Body, Footer, FooterTab, Icon, Text, Left, Button, Title, Content, Thumbnail } from 'native-base';
import Clock from "../clock/";
export default class Dashboard extends Component {

    logOut = () => {
        AsyncStorage.removeItem('token',()=>{
            this.props.navigation.navigate('login')
        })
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
                         <Card style={{marginTop:10}}>
                        <CardItem>                        
                               <Clock />
                        </CardItem>
                    </Card>
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
                            <Button onPress={()=>this.logOut()}>
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
        backgroundColor: (Platform.OS === 'ios' ) ? '#F8F8F8' : "#22a3d7",
    },
    backImage: {
        flex: 1, width: null, height: null
    }

}
