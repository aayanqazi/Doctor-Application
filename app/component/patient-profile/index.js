import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Platform,
    Linking
} from 'react-native';
import { Container, Card, CardItem, Content, Left, Text, Body, Right, Thumbnail, Item, Icon, Button, List, ListItem } from "native-base";

import Header from "../header/";

const patientProfile = (props) => {
    const profileData = props.navigation.state.params.data;
    return (<Container>
        {/*<Image style={Style.backImage} source={require("../../assets/back.png")} >*/}
        <Header name="Patient Profile" iconName="arrow-back" clickEvent={() => props.navigation.goBack()} />
        <Content>
            <Image style={Style.avatar} source={require("../../assets/bg.jpg")}>
                <View>
                    <Thumbnail source={require("../../assets/avatar.png")} circle large />
                </View>
                <View>
                    <Text style={Style.name}>{profileData.firstName + " " + profileData.lastName}</Text>
                    <Text onPress={() => Linking.openURL("tel:" + profileData.mobile_number)} style={Style.name}>{profileData.mobile_number}</Text>
                </View>
            </Image>
            {/*<View style={{ justifyContent: "center", alignItems: "center", marginTop: 15 }}>
                    <Text>{profileData.firstName}</Text>
                    
                </View>*/}
            <Card>
                <List>
                    <ListItem>
                        <Left>
                            <Text>First Name </Text>
                        </Left>
                        <Right>
                            <Text>
                                {profileData.firstName}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Last Name </Text>
                        </Left>
                        <Right>
                            <Text>
                                {profileData.lastName}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Age</Text>
                        </Left>
                        <Right>
                            <Text>
                                {profileData.age}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Disease</Text>
                        </Left>
                        <Right>
                            <Text>
                                {profileData.disease}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Date of arrival</Text>
                        </Left>
                        <Right>
                            <Text>
                                {profileData.date}
                            </Text>
                        </Right>
                    </ListItem>

                </List>
            </Card>

        </Content>
        {/*</Image>*/}
    </Container>)
}
const Style = StyleSheet.create({
    backImage: {
        flex: 1, width: null, height: null
    },
    headerStyle: {
        backgroundColor: (Platform.OS === 'ios') ? '#F8F8F8' : "#22a3d7",
    },
    avatar: {
        flex: 1, justifyContent: "flex-start", paddingTop: 10,
        alignItems: "center", height: 150, width: "100%"
    },
    name: {
        color: "white",
        textAlign: "center"
    }
})
export default patientProfile;

