import React ,{Component} from "react";
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import eye from '../assets/eye.png';
import undrawPedestrian from '../assets/undraw_pedestrian_crossing_l-6-jv.png';
import {Button} from 'react-native-elements';
import HeaderComponent from "../components/HeaderComponent";
class Apropos extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      HeaderText : "NAIsee est une application développée par 3 jeunes étudiants en école d’ingénieur\n• NDIAYE Antoine Latgrand \n• MBOUP Issa \n• EL HABCHAOUI Nawfal\n D’où son nom NAIsee (Nawfal, Antoine, Issa). Elle a été développée dans le but de venir en aide aux personnes malvoyantes dans leur taches quotidiennes, en les mettant en rapport avec une personne géographiquement proche d’elles, ou s’il n’y a personne de relativement proche en déclanchant un appel avec un bénévole pour donner des indications. Nous espérons que votre expérience avec notre application sera agréable, cordialement, l’équipe NAIsee.",
    }
  }


  render(){
    return (
        <>
        <View style = {styles.ContainerParent}>
          <HeaderComponent navigation = {this.props.navigation}
                           pageName = 'À propos'/>

            <View style = {styles.FlexTexteAccueil}>
              <Text style = {styles.TexteAccueil}>{this.state.HeaderText}</Text>
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
      flex: 14,

    },
  
    TexteAccueil: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    
  
    
  })

  export {Apropos}