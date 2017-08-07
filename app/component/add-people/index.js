import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import { Container, Button, Text, Grid, Col, Row, Icon, Form, Item, Input, Label } from "native-base";
import Header from "../header/";
import DateTimePicker from 'react-native-modal-datetime-picker';

const addPeople = ({ navigation, getValues, add, patient, values }) => {
    return (<Container>
        <Image style={Style.backImage} source={require("../../assets/back.png")} >
            {/*<Header name="Add Patient" iconName="arrow-back" clickEvent={()=>navigation.goBack()}/>*/}
            <Row style={Style.buttonTop}>
                <Col><Button onPress={() => navigation.goBack()} full info>
                    <Icon name='md-close' />
                    <Text>Cancel</Text>
                </Button></Col>
                <Col><Button full info onPress={add}>
                    <Icon name='md-checkmark' />
                    <Text>Save</Text>
                </Button></Col>
            </Row>
            <View style={Style.formStyle}>
                <Form>
                    <Item>
                        <Icon name="ios-person" />
                        <Input placeholder="First Name" value={values.firstName} onChangeText={(value) => getValues("firstName", value)} />
                    </Item>
                    <Item>
                        <Icon name="ios-person" />
                        <Input placeholder="Last Name" value={values.lastName} onChangeText={(value) => getValues("lastName", value)} />
                    </Item>
                    <Item>
                        <Icon name="ios-man" />
                        <Input placeholder="Age" value={values.age} onChangeText={(value) => getValues("age", value)} />
                    </Item>
                    <Item>
                        <Icon name="ios-call" />
                        <Input placeholder="Mobile Number" value={values.mobile_number} onChangeText={(value) => getValues("mobile_number", value)} />
                    </Item>
                    <Item>
                        <Icon name="ios-calendar" />
                        <Input placeholder="Date" value={values.date} onChangeText={(value) => getValues("date", value)} />
                        
                    </Item>

                    <Item>
                        <Icon name="md-medkit" />
                        <Input placeholder="Disease" value={values.disease} onChangeText={(value) => getValues("disease", value)} />
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

