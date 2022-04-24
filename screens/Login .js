import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image, KeyboardAvoidingView,Animated,Keyboard } from 'react-native';
import { ScrollView, TextInput, } from 'react-native-gesture-handler';
import {Background_1} from '../components/Background_1'
import {Card, Provider as PaperProvider} from 'react-native-paper'
import { SafeAreaView } from 'react-navigation';
import LoginImg from '../assets/LoginImg.png'
let IMAGE_HEIGHT = 193
let IMAGE_HEIGHT_SMALL = 190.6
class Login extends Component {
    constructor(props)
    {
      super(props)
      this.keyboardHeight = new Animated.Value(0);
      this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
      this.state = {
        firstname:"",
        lastName:"",
        password:"",
        confirmedPassword:"",
        passwordVisibility:true,
        rightIcon:'eye'
        

      }
         

    } 
    UNSAFE_componentWillMount () {
      this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
      this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }
  
    componentWillUnmount() {
      this.keyboardWillShowSub.remove();
      this.keyboardWillHideSub.remove();
    }
  
    keyboardWillShow = (event) => {
      Animated.parallel([
        Animated.timing(this.keyboardHeight, {
          duration: event.duration,
          toValue: event.endCoordinates.height,
          useNativeDriver: false,

        }),
        Animated.timing(this.imageHeight, {
          duration: event.duration,
          toValue: IMAGE_HEIGHT_SMALL,
          useNativeDriver: false,

        }),
      ]).start();
    };
  
    keyboardWillHide = (event) => {
      Animated.parallel([
        Animated.timing(this.keyboardHeight, {
          duration: event.duration,
          toValue: 2,
          useNativeDriver: false 

        }),
        Animated.timing(this.imageHeight, {
          duration: event.duration,
          toValue: IMAGE_HEIGHT,
          useNativeDriver: false,

        }),
      ]).start();
    };
    
    render() {
      const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
          setRightIcon('eye-off');
          setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
          setRightIcon('eye');
          setPasswordVisibility(!passwordVisibility);
        }
      };



      return (
        
          
        <> 
                <Background_1/>

        <KeyboardAvoidingView
        style = {{position: 'absolute',
        width:"80%",
        height:"40%",
        left:"12%",
        right:"71.69%",
        top:"25.42%",
        fontStyle: 'normal',
        fontSize: 32,
        textAlign: "center",
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom : 60,
        lineHeight: 48}}
        behavior = "padding"
        automaticallyAdjustContentInsets = {true}
        alwaysBounceVertical = {false}
        >
        <Animated.Image source={LoginImg} style ={[styles.LoginImg, {height:this.imageHeight}] }/>
        <Text style = {styles.title}> Bienvenue !</Text>
        
        
        <SafeAreaView  top="-17.42%" > 
      <Card>
          <Card.Content> 
            <TextInput
            
            placeholder="Nom"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({lastName:text})}

            />
          </Card.Content>
          
          
        </Card>
        
        </SafeAreaView>
        <SafeAreaView top = "-6.42%" > 
      <Card>
          <Card.Content> 
            <TextInput
            
            placeholder="mot de passe"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({password:text})}
            handlePasswordVisibility={handlePasswordVisibility}
            secureTextEntry={this.state.passwordVisibility}
            autoFocus ={true}
            rightIcon={this.state.rightIcon}



            />
          </Card.Content>
          
          
        </Card>
        
        </SafeAreaView>
       
        <SafeAreaView style = {{ position:'absolute',
                width:250,
                height:41,
                left:"8%",
                top:"120%",    
                backgroundColor: '#240071F5',
                borderRadius: 10}}>
                <Button color = "#fff" title = "se connecter" onPress = {() => this.props.navigation.navigate('Choices')} /> 
                </SafeAreaView> 
                <SafeAreaView style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top:"43%"}}> 
                <Text top =" 20%"left = "45%">Nouveau ici?</Text>
                <Button  right="45%" title = "Inscription"></Button>
                </SafeAreaView>
        
        </KeyboardAvoidingView>
        
        </>
        
        
        
        
      
        
        

    
    );
  }
}
export {Login}
const styles = StyleSheet.create({
    container: {
    justifyContent: 'center'
    },
   
    LoginImg: {
      width: "63.8%",
      height: "65.5%",
      top: "-40%",
      left:"17%",
      padding:7
    },
    title: {
      position: 'absolute',
      left: "19.1%",
      right: "4.87%",
      top: "27%",
      bottom: "-3.87%",
      fontSize : 32,
      justifyContent: 'center'

  }
  
  })