import React ,{Component} from "react";
import { Background_2 } from "../components/Background_2";
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View } from "react-native-web";
class Welcome extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
      
    }
  }

  render(){
      return (
          <>
          <Background_2 navigation = {this.props.navigation}/>
          </>
      )
  }
}          
          
          
export {Welcome}