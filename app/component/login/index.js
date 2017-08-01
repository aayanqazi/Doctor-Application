import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Container, Header,Form,Item,Input, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header>
            <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
             <Body>
            <Title>Authentication</Title>
            </Body>
            </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Email" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>

    );
  }
}