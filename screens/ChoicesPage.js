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
      <>
        
        <View style = {styles.container}>
        <Background_1 />
          <View style = {{flex: 1}}>
          </View>
          <View style = {{flex: 1,
                          justifyContent: 'center'}}>
          <Button titleStyle = {styles.buttons}
                  buttonStyle = {styles.choix1}
                  title= {this.state.HeaderText} 
                  onPress = {() => this.props.navigation.navigate('Login')}/>
          </View>

          <View style = {{flex: 1,
                          justifyContent: 'center'}}>
          <Button titleStyle = {styles.buttons}
                 buttonStyle = {styles.choix2}
                 title= {this.state.BottomText} 
                  onPress = {() => 
                  this.props.navigation.navigate('Login',
                  {
                    valid:true
                  })}/>
          </View>
          <View style = {{flex: 1}}/>
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

    buttons: {
      color : "white",
      fontSize : 32,
    },

    choix1: {
    backgroundColor: '#430D78',
    width:340,
    height:145,
    borderRadius: 10,
    justifyContent: "center",

   },

  choix2: {
    backgroundColor: '#430D78',
    width:340,
    height:145,
    borderRadius: 10,
    justifyContent: "center",

   },

   Circle1: {
    position: 'relative',
    width: 165,
    height: 165,
    borderRadius: 82.4,
    backgroundColor: '#7D00FA',
    opacity: 0.3
  },
  Circle2: {
    position: 'relative', 
    width: 165,
    height: 165,
    borderRadius: 82.4,
    backgroundColor: '#7D00FA',
    opacity: 0.3
  }

 
});
export {ChoicesPage}
