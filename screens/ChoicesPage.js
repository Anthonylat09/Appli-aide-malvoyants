import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Background_1 } from '../components/Background_1';

class ChoicesPage extends Component 
{  
  constructor(props)
  {
    super(props)
    this.state = {
      HeaderText : "Vous avez besoin\n d’assistance visuelle",
      BottomText: "Vous voulez aider\n un malvoyant"

    }
  }
  render() 
  {
    return ( 
      <><Background_1 />
        <View style = {styles.choix1}>
        <Button color ="#fff" title= {this.state.BottomText} onPress = {() => this.props.navigation.navigate('Login')}/>
        <Button titleStyle = {styles.buttons}
                buttonStyle = {{
                  backgroundColor: "",
                }}
                title= {this.state.HeaderText} 
                onPress = {() => this.props.navigation.navigate('Login')}/>
        </View>

        <View style = {styles.choix2}>
        <Button titleStyle = {styles.buttons}
                buttonStyle = {{
                  backgroundColor: "",
                }}
                title= {this.state.BottomText} 
                onPress = {() => this.props.navigation.navigate('Login')}/>
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
      backgroundColor: "#E4d5E5",
    },

    buttons: {
      color : "white",
      fontSize : 32,
    },

    choix1: {
    position: 'absolute',
    width:340,
    height:145,
    left:21,
    top:210,
    backgroundColor: '#430D78',
    borderRadius: 10,
    justifyContent: "center",
    padding: 16

   },

  choix2: {
    position: 'absolute',
    width:340,
    height:145,
    left:21,
    top:465,
    backgroundColor: '#430D78',
    borderRadius: 10,
    justifyContent: "center",
    padding: 16

   },

 
});
export {ChoicesPage}
