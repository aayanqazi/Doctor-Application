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
    { name: "Ambulance", num: 115 },
    { name: "Edhi Trust", num: 32310066 },
    { name: "Bomb Disposal", num: 32416626 },
    { name: "Civil Defence", num: 37728311 },
    { name: "Sui Gas Complaints", num: 4934881 },
    { name: "Police Emergency", num: 15 },
    { name: "News Agency(APP)", num: 3210281 },
    { name: "Hospital Civil(casualties)", num: 37729719 },
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
                <Header name="Emergency Number" iconName="arrow-back" clickEvent={() => this.props.navigation.goBack()} />
                <Content style={{ backgroundColor: "white" }}>
                    {/*<ListView style={{ flex: 1 }} dataSource={this.state.dataSource} renderRow={(rowData) => <Text>{rowData.name}: {rowData.num}</Text>} />*/}
                    <List
                        dataSource={this.state.dataSource}
                        renderRow={data =>
                            <ListItem>
                                <Text> {data.name} </Text>
                            </ListItem>}
                        renderLeftHiddenRow={data =>
                            <Button full onPress={() => alert(data.num)}>
                                <Icon active name="information-circle" />
                            </Button>}
                        disableLeftSwipe={true}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger>
                                <Icon active name="trash" />
                            </Button>}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
                </Content>
            </Container>
        )
    }
}
const Style = StyleSheet.create({
    backImage: {
        flex: 1, width: null, height: null
    }
})