import React ,{Component} from "react";
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import eye from '../assets/eye.png';
import undrawPedestrian from '../assets/undraw_pedestrian_crossing_l-6-jv.png';
import {Button} from 'react-native-elements'
import rightarrow from '../assets/right-arrow.png';
import HeaderComponent from "../components/HeaderComponent";
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
        <HeaderComponent navigation = {this.props.navigation}
                         pageName = 'Paramètres'/>

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