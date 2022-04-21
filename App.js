import { createStackNavigator, createAppContainer} from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Background_1} from './components/Background_1'
import {HomePage,App2} from './screens/HomePage'
import {ChoicesPage}  from './screens/ChoicesPage'
import { NavigationContainer } from '@react-navigation/native';

let back = Background_1
let HP = HomePage
let choice = ChoicesPage
export  default class App extends React.Component {
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
