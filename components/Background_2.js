import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import eye from '../assets/eye.png';
import menuImg from '../assets/MenuImg.png';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Background_2 extends Component {  
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render() 
  { 
    return ( 
      
      <>
        <View style = {styles.choix1}/> 
        
        </>
    );   
  }
}

const styles = StyleSheet.create({
  choix1: 
{
  position: 'absolute',
  width:"100%",
  height:"12.5%",
  backgroundColor: '#8659B4',
}
 
});
export {Background_2}