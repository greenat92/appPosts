import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView
} from 'react-native';

export default class appPosts extends Component {
  render() {
    return (
      <View styel={styles.container}>
        <Text>appPosts</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('appPosts', () => appPosts);
