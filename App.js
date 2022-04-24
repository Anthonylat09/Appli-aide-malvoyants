import { createStackNavigator, createAppContainer} from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Background_1} from './components/Background_1'
import {HomePage,App2} from './screens/HomePage'
import {ChoicesPage}  from './screens/ChoicesPage'
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './screens/Login';
import Background_2 from './components/Background_2';
let log= Login
let back = Background_1
let back2 = Background_2
let HP = HomePage
let choice = ChoicesPage
export   class App extends React.Component {
  render() {
  return <NavigationContainer> 
  <MyStack/>
</NavigationContainer>;}
    
}   
const Stack = createStackNavigator();
const MyStack = () => 
{
  return ( 
    <Stack.Navigator initialRouteName='Home' screenOptions={{ 
    headerShown: false,
    
  }}> 
      <Stack.Screen name = "Home" component = {HomePage}/>

      <Stack.Screen name = "Choices" component = {choice}/>
     

      <Stack.Screen name = "Login" component = {log}/>
    </Stack.Navigator>
  )
}
export  default back2
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 