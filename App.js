import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fbScreen from './fb'
import inScreen from './in'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
          )
  }
}
const TabNavigator = createBottomTabNavigator({
  fb: {screen:fbScreen}
  in: {screen:inScreen}
})
const AppContainer = createAppContainer(TabNavigator)