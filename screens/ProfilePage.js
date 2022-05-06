import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Background_4 from '../components/Background_4'
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
              
              <View style = {styles.PhotoProfil}>

              </View>
             
              <View style = {styles.NomUtilisateur}>

              </View>

              <View style = {styles.InfosUtilisateur}>

              </View>

              <View style = {styles.StatsUtilisateur}>

              </View>
              <View style = {styles.SupprimerCompte}>
                <Button titleStyle = {styles.BoutonSupprimer}
                    buttonStyle = {{
                      backgroundColor: '#430D78',
                      justifyContent: 'center',
                      alignItems: 'center',
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
    flex: 1
  },
  BoutonSupprimer: {
    color : "red",
    fontSize : 25,
  },

  PhotoProfil:{
    flex: 3,
  },

  NomUtilisateur:{
    flex: 1,
    
  },

  InfosUtilisateur:{
    flex: 1,
  },

  StatsUtilisateur:{
    flex: 1,

  },
  SupprimerCompte: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})