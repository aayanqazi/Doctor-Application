import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Router from './config/router';
export default class App extends Component {
  render() {
    return (
        <Router />
    );
  }
}
