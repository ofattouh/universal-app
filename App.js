import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Device from './utils/Device';

export default class App extends Component {
  renderMaster() {
    return (
      <Text>Render on phone and tablets.</Text>
    );
  }

  renderDetail() {
    if (Device.isTablet()) {
      return (
        <Text>Render on tablets only.</Text>
      );
    }
  }

  render() {
    return (
      <View style={styles.content}>
        {this.renderMaster()}
        {this.renderDetail()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 40,
    flex: 1,
    flexDirection: 'row',
  },
});

// expo init my-app
// expo start
