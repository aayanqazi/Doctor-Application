import React from "react";
import { Text, View, StyleSheet ,Platform} from "react-native";
import { Header, Left, Button, Icon, Title, Body } from "native-base";

const Headers = ({name,iconName,clickEvent=null}) => {
    return (<Header style={Style.headerStyle}>
        <Left>
            <Button transparent>
                <Icon name={iconName} onPress={clickEvent}/>
            </Button>
        </Left>
        <Body>
            <Title>{name}</Title>
        </Body>
    </Header>)
}

const Style = StyleSheet.create({
    headerStyle: {
        backgroundColor: (Platform.OS === 'ios') ? '#F8F8F8' : "#22a3d7",
    },
})

export default Headers;


