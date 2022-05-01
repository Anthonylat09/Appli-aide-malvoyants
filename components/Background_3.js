import React from 'react';
import { StatusBar,StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

class Background_3 extends React.Component {
    constructor(props){
        super(props)

    }

    render()  
    {
      return ( 
        <LinearGradient colors = {['#FFFFFF', '#430D78']} style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.Circle1} />
            <View style = {styles.Circle2} />        
        </LinearGradient>
  
      );
    }
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E4D5E4",
      },
      Circle1: {
        position: 'absolute',
        left: 41,
       
        top : -100,
        width: 165,
        height: 165,
        left:10,
        borderRadius: 82.4,
        backgroundColor: '#9D69FA',
        opacity: 0.7
      },
      Circle2: {
        position: 'absolute',       
        top : -40,
        width: 165,
        height: 165,
        left:-50,
        borderRadius: 82.4,
        backgroundColor: '#9D69FA',
        opacity: 0.7
      }
});
export {Background_3}
