import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ListView
} from "react-native";
import { Container, Content, Button, Icon, List, ListItem } from "native-base";
import Header from "../header/";
const datas = [
    'Ambulance: 115',
    'Edhi Trust: 32310066',
    'Bomb Disposal: 32416626',
    'Civil Defence: 37728311',
    'Sui Gas Complaints: 4934881',
    'Police Emergency: 15',
    'News Agency(APP): 3210281',
    'Hospital Civil(casualties): 37729719'
];
export default class Emergency extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic: true,
            dataSource: ds.cloneWithRows(datas),
        };
    }
    render() {

        return (
            <Container>
                <Image style={Style.backImage} source={require("../../assets/back.png")} >
                    <Header name="Emergency Number" iconName="arrow-back" clickEvent={() => this.props.navigation.goBack()} />
                    <Content >
                        <ListView style={{flex:1}} dataSource={this.state.dataSource} renderRow={(rowData) => <Text>{rowData}</Text>} />
                    </Content>
                </Image>
            </Container>
        )
    }
}
const Style = StyleSheet.create({
    backImage: {
        flex: 1, width: null, height: null
    }
})