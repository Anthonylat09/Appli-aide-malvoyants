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
        <View style = {styles.container}>


        <Text style={styles.headerText}>{this.state.Headertext }</Text>
        <Image source = {eye} style = {styles.Eye}></Image>
        <Text style = {styles.bottomText} > {this.state.BottomText } </Text>
         <View style = {{ position:'absolute',
                width:319,
                height:41,
                top:-150,    
                backgroundColor: '#240071F5',
                borderRadius: 10}}>
                <Button color = "#fff" title = "Commencer" onPress = {() => this.props.navigation.navigate('Choices')} /> 
                </View>
                </View>
        </>
        
        
        
        
      
        
        

    
    );
  }
}


 const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#E4d5E5",
    },
    headerText: {
      position: 'absolute',
      width:325,
      height:165,
      top:-650,
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
<<<<<<< HEAD
      height:175,
      top:-350,
=======
      height:176,
      left:32,
      top:475,
>>>>>>> featureBackground3
      fontStyle: 'normal',
      fontWeight:700,
      width:320, 
      fontSize: 22,
      textAlign: "center",
      fontWeight: "bold",
      lineHeight:36,
      textAlign: 'center'
      
      
    },
    Eye: {
      position:'absolute',
      width: 150,
      height: 150,
      resizeMode: 'stretch',
      top: -500,
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