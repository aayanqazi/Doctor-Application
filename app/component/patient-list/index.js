import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Text,
    Platform,
    ListView,
    ScrollView
} from 'react-native';
import { Container, Header, Left, Body, Right, Thumbnail, Item, Icon, Input, Button, List, ListItem } from "native-base";

// import Header from "../header/";

const patientList = ({ navigation, data }) => {
    if (data) {
        data = JSON.parse(data);
    }
    return (<Container>
        <Image style={Style.backImage} source={require("../../assets/back.png")} >
            {/*<Header name="Patient List" iconName="arrow-back" clickEvent={() => navigation.goBack()} />*/}
            <Header searchBar style={Style.headerStyle} rounded>
                <Item style={{ backgroundColor: "rgba(255,255,255,0.8)" }}>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
            <ScrollView>
                {data ? <List>
                    {data.map((arr, indx) => {
                        return (<ListItem key={indx} avatar>
                            <Left>
                                <Thumbnail source={require("../../assets/avatar.png")} />
                            </Left>
                            <Body>
                                <Text>{arr.firstName +" "+ arr.lastName}</Text>
                                <Text note>{arr.age}</Text>
                                 <Text note>{"Disease: "+arr.disease}</Text>

                            </Body>
                            <Right>
                                <Text note>{arr.date}</Text>
                            </Right>
                        </ListItem>)

                    })}
                </List> : <Text>Loading</Text>}
                </ScrollView>
        </Image>
    </Container>)
}
const Style = StyleSheet.create({
                backImage: {
                flex: 1, width: null, height: null
    },
    headerStyle: {
                backgroundColor: (Platform.OS === 'ios') ? '#F8F8F8' : "#22a3d7",

    }
})
export default patientList;

