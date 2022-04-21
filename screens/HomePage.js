import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import {Background_1} from '../components/Background_1'
import { createStackNavigator, createAppContainer} from '@react-navigation/stack';
import { ChoicesPage } from './ChoicesPage';
import { NavigationContainer } from '@react-navigation/native';
let ch = ChoicesPage

class HomePage extends Component {
    constructor(props)
    {
      super(props)
      this.state = {
        Headertext: 'Avec NAIsee, voyez \nle monde différemment',
        BottomText: 'Vous êtes malvoyants ou vous voulez aider un mal voyant à se repérer? Cette application est faite pour vous.'
      }
    } 
    
    render() {
      return (
        
          
        <> 
        <Background_1/>


        <Text style={styles.headerText}>{this.state.Headertext }</Text>
        <Text style = {styles.bottomText} > {this.state.BottomText } </Text>
         <View style = {{ position:'absolute',
                width:319,
                height:41,
                left:36,
                top:733,    
                backgroundColor: '#240071F5',
                borderRadius: 10}}>
                <Button color = "#fff" title = "Commencer" onPress = {() => this.props.navigation.navigate('Choices')} /> 
                </View>
        </>
        
        
        
        
      
        
        

    
    );
  }
}


 const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      position: 'absolute',
      width:325,
      height:165,
      left:33,
      top:125,
      fontStyle: 'normal',
      fontSize: 32,
      textAlign: "center",
      fontWeight: "bold",
      textAlign: 'center',
      lineHeight: 48
    }, 
    bottomText: {
      position: 'absolute',
      width:332,
      height:175,
      left:32,
      top:475,
      fontStyle: 'normal',
      fontWeight:700,
      width:320, 
      fontSize: 23,
      textAlign: "center",
      fontWeight: "bold",
      lineHeight:36,
      textAlign: 'center'
      
      
    },
    Eye: {
      width: 150,
      height: 150,
      resizeMode: 'stretch',
      top: -30,
    },
  
  });
  function App2 ()
  {
    return (
      <NavigationContainer> 
        <MyStack/>
      </NavigationContainer>
    )
  }
  export { HomePage}