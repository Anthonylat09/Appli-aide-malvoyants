import { createStackNavigator, createAppContainer} from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HomePage,App2} from '../screens/HomePage'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Background_2 } from '../components/Background_2';
import { ProfilePage } from '../screens/ProfilePage';
import { Apropos } from '../screens/Apropos';
import { Parametres } from '../screens/Parametres';
import CustomDrawer from '../components/CustomDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SearchResult } from '../screens/SearchResult';
import { WelcomeForAssistants } from '../screens/WelcomeForAssistants';
const Drawer = createDrawerNavigator()

const Stack = createStackNavigator();
let  search= SearchResult
class DrawerForAssistants extends React.Component {
    render() {
    return (
      <>
    <Drawer.Navigator
      
      drawerContent={props => <CustomDrawer {...props} />}

      drawerContentOptions={{
        itemStyle: { marginVertical: 5},
      }} 
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#8659B4',
        drawerActiveTintColor: '#fff',
        drawerInactiveBackgroundColor: '#fff',
        drawerInactiveTintColor: '#000',
      }}>
      <Drawer.Screen
        name="Welcome"
        options={{ drawerLabel: 'Accueil',
                   drawerIcon: ({color}) => (
                     <Ionicons name = "home-outline" size = {22} color = {color}/>
                   )}}
        component={WelcomeForAssistants} />

      <Drawer.Screen
        name="Profil"
        options={{ drawerLabel: 'Profil',
                   drawerIcon: ({color}) => (
                    <Ionicons name = "person-outline" size = {22} color = {color}/>
        )}
       }
        component={ProfilePage} />

      <Drawer.Screen
        name="Parametres"
        options={{ drawerLabel: 'Paramètres',
                   drawerIcon: ({color}) => (
                    <Ionicons name = "settings-outline" size = {22} color = {color}/>
        )}
       }
        component={Parametres} />

      <Drawer.Screen
        name="Apropos"
        options={{ drawerLabel: 'À propos',
                   drawerIcon: ({color}) => (
                     <Ionicons name = "md-information-circle-outline" size = {22} color = {color}/>
                   )}}
        component={Apropos} />
        <Stack.Screen name = "Results" component = {search}/>

      

    </Drawer.Navigator>
    </>
   )}
      
  }

  export {DrawerForAssistants}