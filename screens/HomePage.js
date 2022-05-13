import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Button } from 'react-native-elements';
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
        Headertext: 'Avec NAIsee, voyez \nle monde\n différemment',
        BottomText: 'Vous êtes malvoyants ou vous\n voulez aider un mal voyant à se\n repérer? Cette application est\n faite pour vous.'
      }
    } 
    
    render() {
      return (
        
          
        <> 
        <View style = {styles.container}>
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

          <View style = {styles.BoutonCommencerContainer}>
                  
                  <Button buttonStyle = {styles.BoutonCommencer}
                          title = 'Commencer'
                          onPress = {() => this.props.navigation.navigate('Choices')} /> 
          </View>

          </View>

        </>
        
        
        
        
      
        
        

    
    );
  }
}


 const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
   },
    headerContainer: {
      flex: 6,
      justifyContent: "flex-end",
      alignItems: "center",
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
      flex: 4,
      justifyContent: "center",
      alignItems: "center",

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
      flex: 4,
      justifyContent: "center",
      alignItems: "center",
    },
    Eye: {
      width: 150,
      height: 150,
      resizeMode: 'stretch',
    },

    BoutonCommencerContainer: {
      flex: 2,
      justifyContent: "flex-start",
      alignItems: "center"
    },

    BoutonCommencer: {
      backgroundColor: '#430D78',
      width: 320,
      height: 40
    }
  
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