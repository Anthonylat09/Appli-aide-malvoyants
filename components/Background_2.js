import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import eye from '../assets/eye.png'
import menuImg from '../assets/MenuImg.png'


class Background_2 extends Component 
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
      
        <View style = {styles.choix1}/> 
        <SafeAreaView  style = {{ position: 'absolute',                          
                          flex: 1,
                          
                  
                          alignItems: "center",flexDirection: 'row', justifyContent: 'center',
                          }}>
                            <TouchableOpacity onPress={()=> {alert("woyy")}}> 
          <Image source = {menuImg} style ={styles.littleEye2} />
        </TouchableOpacity>
        <Text  adjustsFontSizeToFit={true} alignContent='center'style = {{ fontSize:32,
        }}> Bienvenue ! </Text>
        <Image source = {eye} style = {styles.littleEye}/> 
        
        </SafeAreaView>
        
        </>
    );   
  }
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: "#E4d5E5",
    },
    choix1: 
  {
    position: 'absolute',
    width:"100%",
    height:"15%",
    backgroundColor: '#8659B4',
    justifyContent: "center",
    padding: 16,
    
    alignItems: "center"

  },
  littleEye2 :
  { 
    
    width: "%",
    height: "100%",
    left:-75,
    marginLeft:100
    
  },
  littleEye : 
  {
    width: "13%",
    height: "95%",
    left:50,
    marginRight:100
  }
 
});
export {Background_2}