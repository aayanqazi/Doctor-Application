import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
} from "react-native";

import KeepAwake from "react-native-keep-awake";
import moment from "moment";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeText: {
        color: '#505050',
        fontSize: 40,
    },
    dateText: {
        color: '#505050',
        fontSize: 20,
    }
})

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().format("LTS"),
            date: moment().format("LL")
        };
    }
    render() {
        setTimeout(() => {
            this.setState({
                time: moment().format("LTS"),
                date: moment().format("LL")
            });
        }, 1000);

        return (
            <View style={styles.container}>
                <StatusBar style={{ backgroundColor: 'transparent' }} />
                <Text style={styles.timeText}>
                    {this.state.time}
                </Text>
                <Text style={styles.dateText}>
                    {this.state.date}
                </Text>

                <KeepAwake />
            </View>
        )
    }
}