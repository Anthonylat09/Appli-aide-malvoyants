import { createStackNavigator, createAppContainer} from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HomePage,App2} from '../screens/HomePage'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Background_2 } from '../components/Background_2';
import { ProfilePage } from '../screens/ProfilePage';
import CustomDrawer from '../components/CustomDrawer'
import { Welcome } from '../screens/Welcome';

const Drawer = createDrawerNavigator()
class DrawerScreen extends React.Component {
    render() {
    return <NavigationContainer independent = {true}>
    <Drawer.Navigator
      
      drawerContent={props => <CustomDrawer {...props} />}
      drawerContentOptions={{
        itemStyle: { marginVertical: 5},
      }} screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#8659B4',
        drawerActiveTintColor: '#fff',
        drawerInactiveBackgroundColor: '#fff',
        drawerInactiveTintColor: '#000'
      }}>
        
      <Drawer.Screen
        name="Welcome"
        options={{ drawerLabel: 'Accueil' }}
        component={Welcome} />

      <Drawer.Screen
        name="Profil"
        options={{ drawerLabel: 'Profil' }}
        component={ProfilePage} />
      
    </Drawer.Navigator>
  </NavigationContainer> ;}
      
  }

  export {DrawerScreen}