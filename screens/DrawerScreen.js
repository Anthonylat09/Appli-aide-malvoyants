import { createStackNavigator, createAppContainer} from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HomePage,App2} from '../screens/HomePage'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Background_2 } from '../components/Background_2';
const Drawer = createDrawerNavigator()
export class DrawerScreen extends React.Component {
    render() {
    return <NavigationContainer>
    <Drawer.Navigator
      drawerContentOptions={{
        itemStyle: { marginVertical: 5 },


      }} screenOptions={{
        headerShown: false
        
      }}>
      <Drawer.Screen
        name="Accueil"
        options={{ drawerLabel: 'First page Option' }}
        component={Background_2} />
      
    </Drawer.Navigator>
  </NavigationContainer> ;}
      
  }