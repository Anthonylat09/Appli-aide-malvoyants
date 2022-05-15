import React ,{Component} from "react";
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import eye from '../assets/eye.png';
import undrawPedestrian from '../assets/undraw_pedestrian_crossing_l-6-jv.png';
import {Button} from 'react-native-elements'
import HeaderComponent from '../components/HeaderComponent'
import *as auth from 'firebase/auth'
import { helpers, NearbyUsers, UpdateEvery, UpdateUserLocation } from "../services/useLocation";
import { getDest, ShareMyLocationTo } from "../services/useLocation";
class WelcomeForAssistants extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
          availablePepole : "Nombre de personnes disponibles pour aider : 255000",
          welcomeText: "En appuyant sur le bouton ci-dessous, ou en utilisant l’assistance vocale, vous pourrez faire appel à quelqu’un pour vous aider, soit par visio, soit en faisant appel à quelqu’un qui n’est pas loin de vous geographiquement parlant."
    }
  }
  componentDidMount () 
  {
    
   
      try {
           
        

        
              const uid = auth.getAuth().currentUser.uid;
             
             
            
            
             setTimeout(() => {  console.log("Entrain de chercher les personnes les plus proches..."); }, 10000);
             UpdateEvery(uid)

          
      } catch (error) {
          alert(error)
          
      }
  }


  render(){
    const handleSubmit = async () => {
       
        const uid =auth.getAuth().currentUser.uid
        ShareMyLocationTo(uid,uid)
        const location = null
        if(location === null) 
        {
            alert("Il n'y a pas de personne qui ait besoins \n d'aide dans votre")
        }
        else {
            this.props.navigation.navigate('MapView',
            {
                location : location

            })
        }
        
    }
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
                <Button title= "Venir en aide"
                        titleStyle = {{
                          fontSize: 32
                        }}

                        buttonStyle = {{
                          backgroundColor: '#430D78',
                          height: 100,
                          width: 290
                        }}
                        onPress = {handleSubmit}
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
          
export {WelcomeForAssistants}