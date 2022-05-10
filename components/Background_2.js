import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import eye from '../assets/eye.png'
import menuImg from '../assets/MenuImg.png'
import Icon from 'react-native-vector-icons/FontAwesome5';

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
        <View  style = {{ position: 'absolute',
                                  alignItems: "center",
                                  flexDirection: 'row', 
                                  justifyContent: 'center',
                                  top: '7.5%'
                                }}>
           <TouchableOpacity style = {styles.littleEye2} 
                             onPress={()=> this.props.navigation.openDrawer()}> 
           <Icon name="bars" size={32} />
           </TouchableOpacity>
           <Image source = {eye} style = {styles.littleEye}/> 

        
        </View>
        
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
  

},
littleEye2 :
{ 
  
  width: 40,
  height: 38,
  left: '30%'
  
},
littleEye : 
{
  width: 40,
  height: 38,
  left: '750%',
}
 
});
export {Background_2}