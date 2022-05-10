import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Background_4 from '../components/Background_4'
import LoginImg from '../assets/LoginImg.png'
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
              <View style = {styles.BackgroundHeader}/>

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
                    onPress = {() => this.props.navigation.navigate('Login')}/>

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  BackgroundHeader:{
    flex:2,
  },

  FlexPhotoProfil:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  PhotoProfil: {
    height: 200,
    width: 200
  },



  FlexNomUtilisateur:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },


  NomUtilisateur:{
    fontSize: 25
  },

  

  FlexInfosUtilisateur:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  InfosUtilisateur: {
    fontSize : 13,
    color: 'white'
  },

  FlexStatsUtilisateur:{
    flex: 4,
    backgroundColor: 'red'

  },
  FlexSupprimerCompte: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  SupprimerCompte: {
    fontSize : 25,
  },
})