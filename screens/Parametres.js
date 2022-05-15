import React ,{Component} from "react";
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import eye from '../assets/eye.png';
import undrawPedestrian from '../assets/undraw_pedestrian_crossing_l-6-jv.png';
import {Button} from 'react-native-elements'
import rightarrow from '../assets/right-arrow.png'
class Parametres extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      HeaderText : "Envoyez nous vos commentaires",
    }
  }


  render(){
    return (
        <>
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
                  <Text style = {{fontSize: 24,
                                  }}>Paramètres</Text>
                </View>

                <View style = {styles.FlexEye}>
                  <Image source = {eye} style = {styles.Eye}/> 
                </View>
              </View>
            

            </View>

            <View style = {styles.FlexParametres}>
                <TouchableOpacity style = {{
                    borderWidth: 1,
                    flexDirection: 'row',
                    padding: 15
                }}> 
                    <Text style = {{
                        fontSize: 20,
                        flexDirection: 'row',
                        flex:1,
                    }}>Envoyez nous vos commentaires</Text>
                    <Image source = {rightarrow}
                     style = {{
                        height: 20,
                        width: 20
                     }}/>
                </TouchableOpacity>

                <TouchableOpacity style = {{
                    borderWidth: 1,
                    flexDirection: 'row',
                    padding: 15
                }}> 
                    <Text style = {{
                        fontSize: 20,
                        flexDirection: 'row',
                        flex:1,
                    }}>Langue</Text>
                    <Image source = {rightarrow}
                     style = {{
                        height: 20,
                        width: 20
                     }}/>
                </TouchableOpacity>
                  
            </View>

            <View style = {styles.FlexVersion}>
              <View style = {styles.FlexVersionAndNumber}>
              <Text style = {{
                    flexDirection: 'row',
                    flex: 1
                }}>
                    Version
                </Text>
                <Text style = {{
                    flexDirection: 'row',
                    alignItems:'flex-end',
                }}>
                    1.0.0
                </Text>
              </View>
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
  
  
  
    FlexParametres:{
      flex: 12,

    },
  
    FlexVersion: {
        flex: 2,
        justifyContent: 'center'

    },
    
    FlexVersionAndNumber: {
        flexDirection: 'row',
    }
    
  })

  export {Parametres}