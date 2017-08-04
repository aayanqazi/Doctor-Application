import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import Router from './config/router';
import Store from "./store/";
import { Provider } from "react-redux";

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
          <Router />
        </Provider>
        );
  }
}

