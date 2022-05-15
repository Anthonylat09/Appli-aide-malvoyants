import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import rightarrow from '../assets/right-arrow.png';
class CardComponent extends React.Component {
    constructor(props){
        super(props)
                    
        this.state = {
            text: 'Hello from'
        }
    }

    render(){
        return (
            <>
                <TouchableOpacity style = {{
                    borderWidth: 1,
                    flexDirection:'row',
                    padding: 15
                }}> 
                    <Text style = {{
                        fontSize: 20,
                        flexDirection: 'row',
                        flex:1,
                    }}>{this.props.user.name}</Text>
                    <Image source = {rightarrow}
                     style = {{
                        height: 20,
                        width: 20
                     }}/>
                </TouchableOpacity>
                </>
        )
    }
}

const styles = StyleSheet.create({
    text: {
      backgroundColor: "red",
      color: "white",
      fontSize: 20
    },
});

export default CardComponent
