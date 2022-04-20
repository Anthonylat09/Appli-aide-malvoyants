import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Background_1 extends React.Component {
    constructor(props){
        super(props)
                    
        /* REMEMBER USE this.setState for update THIS  */
        this.state = {
            text: 'Hello from'
        }
    }

    render()
    {
      return ( 
        <View style={styles.container}>
         
          <View color ='#9D69FA' style={styles.Circle1} />
          <View style = {styles.Circle2} />        
        </View>
  
      );
    }
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E5d5E6",
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
export {Background_1}
