import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Button } from 'react-native-elements';
import {Background_4} from '../components/Background_4'
import LoginImg from '../assets/LoginImg.png'
import { createDrawerNavigator } from '@react-navigation/drawer';
import eye from '../assets/eye.png';

class ProfilePage extends Component 
{  
  constructor(props)
  {
    super(props)
    this.state = {
      
    }
  }

  render(){
      return(
          <>
            
            <Background_4/>
            
            <View style = {styles.ContainerParent}>
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
                                    }}>Profil</Text>
                  </View>

                  <View style = {styles.FlexEye}>
                    <Image source = {eye} style = {styles.Eye}/> 
                  </View>
                </View>
              

              </View>

              <View style = {styles.FlexPhotoProfil}>
                <Image source = {LoginImg} style = {styles.PhotoProfil}/>
              </View>
             
              <View style = {styles.FlexNomUtilisateur}>
                <Text style = {styles.NomUtilisateur}>Rew</Text>
              </View>

              <View style = {styles.FlexInfosUtilisateur}>
                <View style = {{
                  backgroundColor: '#8659B4',  
                  width:271,
                  height:110,
                }}>
                <Text style = {styles.InfosUtilisateur}>Rew</Text>
                <Text style = {styles.InfosUtilisateur}></Text>
                <Text style = {styles.InfosUtilisateur}>Rew</Text>
                <Text style = {styles.InfosUtilisateur}></Text>
                <Text style = {styles.InfosUtilisateur}>Rew</Text>
                <Text style = {styles.InfosUtilisateur}></Text>
                <Text style = {styles.InfosUtilisateur}>Rew</Text>
                  </View>
                
              </View>

              <View style = {styles.FlexStatsUtilisateur}>

              </View>
              <View style = {styles.FlexSupprimerCompte}>
                <Button titleStyle = {styles.SupprimerCompte}
                    buttonStyle = {{
                      backgroundColor: '#430D78',  
                      width:271,
                      height:55,
                    }}
                    title= "Supprimer le compte"
                    onPress = {() => this.props.navigation.navigate('Welcome')}/>

              </View>
            </View>
            
          </>
      )
  }
}
export {ProfilePage}

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

  FlexText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },



  FlexPhotoProfil:{
    flex: 4,
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 3
   
  },

  PhotoProfil: {
    height: 200,
    width: 200
  },



  FlexNomUtilisateur:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3
    
  },


  NomUtilisateur:{
    fontSize: 25
  },

  

  FlexInfosUtilisateur:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3
  },

  InfosUtilisateur: {
    fontSize : 13,
    color: 'white'
  },

  FlexStatsUtilisateur:{
    flex: 4,
    borderWidth: 3,

  },
  FlexSupprimerCompte: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  SupprimerCompte: {
    fontSize : 25,
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
  }
})