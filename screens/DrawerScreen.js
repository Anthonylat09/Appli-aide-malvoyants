import { createStackNavigator, createAppContainer} from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HomePage,App2} from '../screens/HomePage'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator()
export class DrawerScreen extends React.Component {
    render() {
    return <NavigationContainer>
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}>
      <Drawer.Screen
        name="Home"
        options={{ drawerLabel: 'First page Option' }}
        component={HomePage} />
      
    </Drawer.Navigator>
  </NavigationContainer> ;}
      
  }