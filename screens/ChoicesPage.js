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
      <View style = {styles.container}>
        <View style = {styles.choix1}>
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

    buttons: {
      color : "white",
      fontSize : 32,
    },

    choix1: {
    position: 'absolute',
    top:-600,
    width:300,
    backgroundColor: '#430D78',
    borderRadius: 10,
    justifyContent: "center",
    padding: 16

   },

  choix2: {
    position: 'absolute',
    top:-250,
    width:300,
    backgroundColor: '#430D78',
    borderRadius: 10,
    justifyContent: "center",
    padding: 16

   },

 
});
export {ChoicesPage}
