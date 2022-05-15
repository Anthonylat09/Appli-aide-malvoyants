import { createStackNavigator, createAppContainer} from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Background_1} from './components/Background_1'
import {HomePage} from './screens/HomePage'
import {ChoicesPage}  from './screens/ChoicesPage'
import {ProfilePage}  from './screens/ProfilePage'
import { Welcome } from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './screens/Login';
import { Background_2 } from './components/Background_2';
import { Registration } from './screens/RegistrationPage';
import { DrawerScreen } from './navigation/DrawerScreen';
import{ DrawerForAssistants} from './navigation/DrawerForAssistants'
import {SearchResult} from './screens/SearchResult';
import {Apropos} from './screens/Apropos'
import {Parametres} from './screens/Parametres'
import {Map} from './screens/Map'


export default  class App extends React.Component {
  render() {
    return  <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  }  
}   

const Stack = createStackNavigator();
const MyStack = () => 
{
  return ( 
    <Stack.Navigator initialRouteName = 'Home' screenOptions={{
    headerShown: false
    
  }}> 
      <Stack.Screen name = "Home" component = {HomePage}/>

      <Stack.Screen name = "Choices" component = {ChoicesPage}/>
     
      <Stack.Screen name = "Login" component = {Login}/>

      <Stack.Screen name = "Sign Up" component = {Registration}/>


      <Stack.Screen name = "Results" component = {SearchResult}/>


      <Stack.Screen name = "Drawer" component = {DrawerScreen}/>
      
      <Stack.Screen name = "DrawerForAssistants" component = {DrawerForAssistants} />


    </Stack.Navigator>
  ) 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {MyStack}
