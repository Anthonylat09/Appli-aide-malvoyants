import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CardComponent extends React.Component {
    constructor(props){
        super(props)
                    
        this.state = {
            text: 'Hello from'
        }
    }

    render(){
        return (
            <View>
                <Text style={styles.text}>{this.props.user.title}</Text>
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

export default CardComponent
