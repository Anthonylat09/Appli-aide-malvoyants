import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import eye from '../assets/eye.png';
import menuImg from '../assets/MenuImg.png';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Background_4 extends Component {
  constructor(props){
      super(props)
      this.state = {
           
      }
  }

  render(){
        return (
            <>
        <View style = {styles.container}/>
        
        </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      alignItems: "center",
      backgroundColor: "#E4d5E5",
      width:"100%",
      height:"100%",
    },

 
});

export  {Background_4}
