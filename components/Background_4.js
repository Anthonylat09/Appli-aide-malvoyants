import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import eye from '../assets/eye.png'
import menuImg from '../assets/MenuImg.png'
import Icon from 'react-native-vector-icons/FontAwesome5';

class Background_4 extends React.Component {
    constructor(props){
        super(props)
                    
        /* REMEMBER USE this.setState for update THIS  */
        this.state = {
            text: 'Hello from'
        }
    }

    render(){
        return (
            <>
        <View style = {styles.container}/>
        <View style = {styles.choix1}/> 
        <SafeAreaView  style = {{ position: 'absolute',
                                  alignItems: "center",
                                  flexDirection: 'row', 
                                  justifyContent: 'center',
                                  top:30
                                }}>
           <TouchableOpacity style = {styles.littleEye2} 
                             onPress={()=> this.props.navigation.openDrawer()}> 
           <Icon name="bars" size={32} />
           </TouchableOpacity>
           <Image source = {eye} style = {styles.littleEye}/> 

        
        </SafeAreaView>
        
        </>
        )
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
    choix1: 
  {
    position: 'absolute',
    width:"20000%",
    height:"13.75%",
    backgroundColor: '#8659B4',
    

  },
  littleEye2 :
  { 
    
    width: 40,
    height: 38,
    right:-18,
    
  },
  littleEye : 
  {
    width: 40,
    height: 38,
    left:275,
  }
 
});

export default Background_4
