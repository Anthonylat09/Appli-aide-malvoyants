import React ,{Component} from "react";
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import eye from '../assets/eye.png';
import undrawPedestrian from '../assets/undraw_pedestrian_crossing_l-6-jv.png';
import {Button} from 'react-native-elements'
import HeaderComponent from '../components/HeaderComponent'
class Welcome extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
          availablePepole : "Nombre de personnes disponibles pour aider : 255000",
          welcomeText: "En appuyant sur le bouton ci-dessous, ou en utilisant l’assistance vocale, vous pourrez faire appel à quelqu’un pour vous aider, soit par visio, soit en faisant appel à quelqu’un qui n’est pas loin de vous geographiquement parlant."
    }
  }

  render(){
      return (
          <>
          <View style = {styles.ContainerParent}>
             <HeaderComponent navigation = {this.props.navigation}
                              pageName = 'Accueil'/>

              <View style = {styles.FlexTexteAccueil}>
                <Text style = {styles.TexteAccueil}>{this.state.availablePepole}</Text>
                <Text style = {styles.TexteAccueil}>{this.state.welcomeText}</Text>
              </View>
             
              <View style = {styles.FlexAide}>
                <Button title= "Demander de   l'aide"
                        titleStyle = {{
                          fontSize: 32
                        }}

                        buttonStyle = {{
                          backgroundColor: '#430D78',
                          height: 100,
                          width: 290
                        }}
                        onPress = {() => this.props.navigation.navigate('Results')}
                        />
              </View>

              <View style = {styles.FlexIllustration}>
                <Image source = {undrawPedestrian} style = {styles.Illustration}/> 
              </View>
              
            </View>
            
          </>
      )
  }
}          
       
const styles = StyleSheet.create({
    ContainerParent: {
      flex: 1,
    },
    
  
  
  
    FlexTexteAccueil:{
      flex: 6,
      alignItems:'center',
      justifyContent: 'center',
     
    },
  
    TexteAccueil: {
      fontSize: 20,
      textAlign:'center'
    },
  
  
  
    FlexAide:{
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
  
  
    Aide:{
      fontSize: 25
    },
  
    
  
    FlexIllustration:{
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    Illustration: {
      height: 155,
      width: 286
    },
  
  
    
  })
          
export {Welcome}