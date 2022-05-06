import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
              <View style = {styles.Header}/>

              <View style = {styles.PhotoProfil}>

              </View>
             
              <View style = {styles.NomUtilisateur}>
                <Text style = {styles.NomTexte}>{this.props.name}</Text>
              </View>

              <View style = {styles.InfosUtilisateur}>
                <View style = {{
                  backgroundColor: '#8659B4',  
                  width:271,
                  height:120,
                }}/>

              </View>

              <View style = {styles.StatsUtilisateur}>

              </View>
              <View style = {styles.SupprimerCompte}>
                <Button titleStyle = {styles.BoutonSupprimer}
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
  
  Header:{
    flex:2,
  },

  PhotoProfil:{
    flex: 3,
  },

  NomTexte:{
    fontSize: 25
  },

  NomUtilisateur:{
    flex: 1,
  },

  InfosUtilisateur:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  StatsUtilisateur:{
    flex: 3,
    backgroundColor: 'red'

  },
  SupprimerCompte: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  BoutonSupprimer: {
    color : "red",
    fontSize : 25,
  },
})