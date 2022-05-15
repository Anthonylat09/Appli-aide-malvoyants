import React from 'react';
import { FlatList,StyleSheet, Text, View } from 'react-native';
import CardComponent from './CardComponent'
import { helpers } from '../services/useLocation';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '12674a0f-3da1-471f-bd96-145571e29d72',
        title: 'fourth Item',
    },
  ];

class UsersComponent extends React.Component {

    

    constructor(props){
        super(props)
                    
        this.state = {
            users: []
        }
    }

    
    

    proxyStatelessComponent(props) {
        return (
            <CardComponent user = {props.item}/>
        )
    }

    render(){
        return (
            <View>
                <FlatList
                    data = {DATA}
                    renderItem={this.proxyStatelessComponent.bind(this)}
                    keyExtractor= {(item, email) => email.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
      backgroundColor: "blue",
      color: "white",
      fontSize: 20
    },
});

export default UsersComponent
