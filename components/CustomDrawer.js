import React from "react";
import {View, Text,Image, ImageBackground} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
const CustomDrawer = (props) => {
    return (
        <View style = {{flex:1}}>

            <DrawerContentScrollView {...props}
                contentContainerStyle={{backgroundColor: '#8659B4'}}>
                    <ImageBackground source = {require('../assets/DrawerBackground.png')} style = {{padding: 20,
                                                                                                    height: 160,
                                                                                                    width: 300,
                                                                                                    justifyContent: 'center',
                                                                                                    alignItems: 'center'}}>
                    <Image 
                        source = {require('../assets/eye.png')}
                        style = {{height : 80, width : 80, borderRadius: 40, marginBottom: 10}}
                    />
                    </ImageBackground>                                                                                   
                <View style = {{flex: 1,backgroundColor:'white', paddingTop: 10}}>
                    <DrawerItemList {...props}/> 
                </View>
            </DrawerContentScrollView>
        </View>
    )
} 

export default CustomDrawer;