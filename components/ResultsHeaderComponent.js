import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import eye from '../assets/eye.png';
class ResultsHeaderComponent extends React.Component {
    constructor(props){
        super(props)
                    
        /* REMEMBER USE this.setState for update THIS  */
        this.state = {
            text: 'Hello from'
        }
    }

    render(){
        return (
            <View style = {styles.BackgroundHeader}>
                <View style = {styles.EyeBarsAndText}>
                  <View style = {styles.FlexBars}>
                    <TouchableOpacity style = {styles.Bars} 
                                      onPress={()=> this.props.navigation.goBack()}> 
                      <Icon name="times" size={32} />

                    </TouchableOpacity>
                  </View>

                  <View style = {styles.FlexText}>
                    <Text style = {{fontSize: 24,
                                    }}>{this.props.pageName}</Text>
                  </View>

                  <View style = {styles.FlexEye}>
                    <Image source = {eye} style = {styles.Eye}/> 
                  </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    BackgroundHeader:{
        flex:2,
      },
    
      EyeBarsAndText: {
        backgroundColor: '#8659B4',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    
      },
    
      FlexBars: {
        flex: 1,
        flexDirection: 'row',
    
      },
    
      FlexEye: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
  
      Bars :
      {  
        width: 40,
        height: 38,
      },
    
      Eye : 
      {
        width: 40,
        height: 38,
      },
    
      FlexText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      },
});

export default ResultsHeaderComponent
