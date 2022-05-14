import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Background_1 extends React.Component {
    constructor(props){
        super(props)
    }

    render()  
    {
      return ( 
        <View style={styles.container}>
         
          <View style={styles.Circle1} />
          <View style = {styles.Circle2} />        
        </View>
  
      );
    }
    
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: "#E5d5E6",
      },
      Circle1: {
        position: 'absolute',  
        top : -100,
        left:10,
        width: 165,
        height: 165,
        borderRadius: 82.4,
        backgroundColor: '#7D00FA',
      opacity: 0.3
      },
      Circle2: {
        position: 'absolute',       
        top : -40,
        left:-50,
        width: 165,
        height: 165,
        borderRadius: 82.4,
        backgroundColor: '#7D00FA',
        opacity: 0.3
      }
});
export {Background_1}
