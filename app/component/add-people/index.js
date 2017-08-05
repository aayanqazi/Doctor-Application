import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import { Container, Button, Text, Grid, Col, Row, Icon, Form, Item, Input, Label } from "native-base";

import Header from "../header/";

const addPeople = ({ navigation }) => {
    return (<Container>
        <Image style={Style.backImage} source={require("../../assets/back.png")} >
            {/*<Header name="Add Patient" iconName="arrow-back" clickEvent={()=>navigation.goBack()}/>*/}
            <Row style={Style.buttonTop}>
                <Col><Button onPress={() => navigation.goBack()} full info>
                    <Icon name='md-close' />
                    <Text>Cancel</Text>
                </Button></Col>
                <Col><Button full info>
                    <Icon name='md-checkmark' />
                    <Text>Save</Text>
                </Button></Col>
            </Row>
            <View style={Style.formStyle}>
                <Form>
                    <Item>
                        <Icon name="ios-person" />
                        <Input placeholder="First Name" />
                    </Item>
                    <Item>
                        <Icon name="ios-person" />
                        <Input placeholder="Last Name" />
                    </Item>
                    <Item>
                        <Icon name="ios-man" />
                        <Input placeholder="Age" />
                    </Item>
                    <Item>
                        <Icon name="ios-call"/>
                        <Input placeholder="Mobile Number" />
                    </Item>
                    <Item>
                        <Icon name="ios-calendar" />
                        <Input placeholder="Date" />
                    </Item>
                    <Item>
                        <Icon name="md-medkit" />
                        <Input placeholder="Disease" />
                    </Item>
                </Form>
            </View>
        </Image>
    </Container>)
}
const Style = StyleSheet.create({
    backImage: {
        flex: 1, width: null, height: null
    },
    buttonTop: {
        height: 45
    },
    formStyle: {
        flex: 7
    }
})
export default addPeople;

