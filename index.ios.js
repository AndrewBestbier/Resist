/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import NavigationBar from 'react-native-navbar';

class Resist extends Component {
  render() {
      var rightButtonConfig = {
      title: 'Next',
      handler: function onNext() {
        alert('hello!');
      }
    };

    return (
      <View style={{flex: 1}} >
        <NavigationBar
          title={{title: 'Resist', tintColor: 'white'}}
          leftButton={{title: 'Edit', tintColor: 'white'}}
          rightButton={{title: 'New', tintColor: 'white'}}
          tintColor='#4FA5F3'
          style={styles.navbar}
          />
        <View style={styles.container}>
          <View style={styles.listItem}>
            <View style={{flex: 5}}>
            <Text style={styles.title}>
              Buying Coffee from Starbucks
            </Text>
            <Text style={styles.subtitle}>
              £90.30 saved
            </Text>
            </View>
            <View style={styles.rightButton}>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#4FA5F3',
  },
  listItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderLeftColor: '#C9E25D',
    borderLeftWidth: 7,
    flexDirection: 'row'
  },
  title: {
    color: '#4A4A4A',
    paddingTop: 15,
    paddingLeft: 15
  },
  subtitle: {
    marginTop: 5,
    color: '#9B9B9B',
    paddingTop: 5,
    paddingLeft: 15,
    paddingBottom: 15
  },
  rightButton: {
    backgroundColor: '#C9E25D',
    flex: 1,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  }
});

AppRegistry.registerComponent('Resist', () => Resist);
