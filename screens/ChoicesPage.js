import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
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
        <Button color ="#fff" title= {this.state.BottomText}/>
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
    choix1: 
  {
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
