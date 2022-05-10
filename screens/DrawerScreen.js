import { createStackNavigator, createAppContainer} from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HomePage,App2} from '../screens/HomePage'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Background_2 } from '../components/Background_2';
import { ProfilePage } from './ProfilePage';
const Drawer = createDrawerNavigator()
class DrawerScreen extends React.Component {
    render() {
    return <NavigationContainer independent = {true}>
    <Drawer.Navigator
      drawerContentOptions={{
        itemStyle: { marginVertical: 5 },


      }} screenOptions={{
        headerShown: false
        
      }}>
      <Drawer.Screen
        name="Accueil"
        options={{ drawerLabel: 'Accueil' }}
        component={Background_2} />

      <Drawer.Screen
        name="Profil"
        options={{ drawerLabel: 'Profil' }}
        component={ProfilePage} />
      
    </Drawer.Navigator>
  </NavigationContainer> ;}
      
  }

  export {DrawerScreen}