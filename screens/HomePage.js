import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import {Background_1} from '../components/Background_1'
import { createStackNavigator, createAppContainer} from '@react-navigation/stack';
import { ChoicesPage } from './ChoicesPage';
import { NavigationContainer } from '@react-navigation/native';
import eye from '../assets/eye.png'

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
        
        <View style={styles.headerContainer}>

        <Text style = {styles.headerText}>{this.state.Headertext }</Text>

        </View>

        <View style = {styles.eyeContainer}>

        <Image source = {eye} style = {styles.Eye}></Image>

        </View>

        <View style = {styles.bottomContainer}>

        <Text style = {styles.bottomText}> {this.state.BottomText } </Text>

        </View>

         <View style = {{ 
                  position:'absolute',
                  width:319,
                  height:41,
                  left: 36,
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
    headerContainer: {
      position: 'absolute',
      justifyContent: "center",
      alignItems: "center",
      width:325,
      height:165,
      left:32,
      top:135,
    },
    headerText: {
      
      fontStyle: 'normal',
      fontSize: 32,
      textAlign: "center",
      fontWeight: "bold",
      textAlign: 'center',
      lineHeight: 48
    }, 
    
    bottomContainer:{
      position: 'absolute',
      width:332,
      height:176,
      left:32,
      top:500,
      textAlign: 'center'
    },
    bottomText: {
      position: 'absolute', 
      fontStyle: 'normal',
      fontWeight:700,
      fontSize: 22,
      textAlign: "center",
      fontWeight: "bold",
      lineHeight:36,
      textAlign: 'center'
      
      
    },

    eyeContainer:{
      position:'absolute',
      top: 319,
      left: 120,
    },
    Eye: {
      width: 150,
      height: 150,
      resizeMode: 'stretch',
    },
  
  });
  export { HomePage}