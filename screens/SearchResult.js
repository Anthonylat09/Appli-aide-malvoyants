import React ,{Component} from "react";
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import eye from '../assets/eye.png';
import *as auth from 'firebase/auth'
import { helpers, NearbyUsers, UpdateEvery, UpdateUserLocation } from "../services/useLocation";
import {ref,getDatabase,set, onValue,val, child, DataSnapshot} from 'firebase/database'
import { Background_4 } from "../components/Background_4";
export const db = getDatabase()
class SearchResult extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
          helpers : []
      
    }
  
  }

  async componentDidMount () 
  {
    
   
      try {
           
        

        
              const uid = auth.getAuth().currentUser.uid;
              NearbyUsers(uid)
              console.log(helpers)
            
             UpdateEvery(uid)
            
             
          
      } catch (error) {
          alert(error)
          
      }
  }

  render(){
    return (
        
   
        <View style = {styles.ContainerParent}>
          <Background_4/>
            <View style = {styles.BackgroundHeader}>
              <View style = {styles.EyeBarsAndText}>
                <View style = {styles.FlexBars}>
                  <TouchableOpacity style = {styles.Bars} 
                                    onPress={()=> this.props.navigation.openDrawer()}> 
                    <Icon name="bars" size={32} />

                  </TouchableOpacity>
                </View>

                <View style = {styles.FlexText}>
                  <Text style = {{fontSize: 32,
                                  }}></Text>
                </View>

                <View style = {styles.FlexEye}>
                  <Image source = {eye} style = {styles.Eye}/> 
                </View>
              </View>
            

            </View>

            <View style = {styles.FlexTexteAccueil}>

            </View>
           
            <View style = {styles.FlexAide}>

             
              

            </View>
            
        </View>
          
    )
}
}          
     
const styles = StyleSheet.create({
  ContainerParent: {
    flex: 1,
  },
  
  BackgroundHeader:{
    flex:2,
    borderWidth: 3
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



  FlexTexteAccueil:{
    flex: 2,
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 3
   
  },

  TexteAccueil: {
    height: 200,
    width: 200
  },



  FlexAide:{
    flex: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3
    
  },


  Aide:{
    fontSize: 25
  },

  


  
})
export {SearchResult}
