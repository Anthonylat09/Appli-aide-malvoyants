import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Background_2 extends React.Component {
    constructor(props){
        super(props)
                    
        /* REMEMBER USE this.setState for update THIS  */
        this.state = {
            text: 'Hello from'
        }
    }

    render(){
        return (
            <View>
                <Text style={styles.text}>{this.state.text} Background_2 component</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
      backgroundColor: "blue",
      color: "white",
      fontSize: 20
    },
});

export default Background_2
