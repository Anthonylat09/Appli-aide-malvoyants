import React ,{Component} from "react";
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import eye from '../assets/eye.png';
import *as auth from 'firebase/auth'
import { helpers, NearbyUsers, UpdateEvery, UpdateUserLocation } from "../services/useLocation";
import {ref,getDatabase,set, onValue,val, child, DataSnapshot} from 'firebase/database'
import { Background_4 } from "../components/Background_4";
import UsersComponent from '../components/UsersComponent';
import CardComponent from "../components/CardComponent";
import HeaderComponent from "../components/HeaderComponent";

export const db = getDatabase()
class SearchResult extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
          listText : "Liste de personnes ayant actuellement besoin d’aide:",
    }
  
  }

  async componentDidMount () 
  {
    
   
      try {
           
        

        
              const uid = auth.getAuth().currentUser.uid;
             
             
            
             UpdateEvery(uid)
            
             console.log(helpers)
          
      } catch (error) {
          alert(error)
          
      }
  }

  render(){
    return (
        
   
        <View style = {styles.ContainerParent}>
          <Background_4/>
          <HeaderComponent navigation = {this.props.navigation}/>

            <View style = {styles.FlexTexteAccueil}>
              <Text style = {styles.TexteAccueil}>{this.state.listText}</Text>

            </View>
           
            <View style = {styles.FlexListe}>

             <UsersComponent/>
            </View>
            
        </View>
          
    )
}
}          
     
const styles = StyleSheet.create({
  ContainerParent: {
    flex: 1,
  },
  



  FlexTexteAccueil:{
    flex: 2,
    alignItems:'center',
    justifyContent: 'center',
   
  },

  TexteAccueil: {
    fontSize: 24,
    textAlign:'center'
  },



  FlexListe:{
    flex: 12,
    
  },


  Liste:{
    fontSize: 25
  },

  


  
})
export {SearchResult}
