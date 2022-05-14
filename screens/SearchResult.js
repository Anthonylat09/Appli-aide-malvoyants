import React ,{Component} from "react";
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import eye from '../assets/eye.png';
import *as auth from 'firebase/auth'
import {ref,getDatabase,set, onValue,val, child, DataSnapshot} from 'firebase/database'
import { useLocation } from "../services/useLocation";
import { Background_4 } from "../components/Background_4";
import UsersComponent from '../components/UsersComponent';
import CardComponent from "../components/CardComponent";

export const db = getDatabase()
class SearchResult extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
          listText : "Liste de personnes ayant actuellement besoin d’aide:"
    }
  }
  /*
  async componentDidMount () 
  {
      try {
        let db = getDatabase()

        
              const uid = auth.getAuth().currentUser.uid;
              let users =[];
              let  reference = ref(db,'users');
              console.log(reference)

             await onValue(reference, (datasnapshot) => {
                datasnapshot.forEach((child) => {
                  console.log(child.val().name)
                if(child.val().uid=== uid)
                {
                  console.log('yesss')
                    
                }
                else {
                  users.push ({
                    userName:child.val().name
                })
                console.log('yess')
                console.log(useLocation())
                }
            }
                )
                

             })
             console.log(users)
             this.setState({
               results:users
             })
          
      } catch (error) {
          alert(error)
          
      }
  }
*/
  render(){
    return (
        <>
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
              <Text style = {styles.TexteAccueil}>{this.state.listText}</Text>

            </View>
           
            <View style = {styles.FlexListe}>

             <UsersComponent/>
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
    fontSize: 24,
    textAlign:'center'
  },



  FlexListe:{
    flex: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3
    
  },


  Liste:{
    fontSize: 25
  },

  


  
})
export {SearchResult}
