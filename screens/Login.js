import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image, KeyboardAvoidingView,Animated,Keyboard } from 'react-native';
import { ScrollView, TextInput, } from 'react-native-gesture-handler';
import {Background_1} from '../components/Background_1'
import { SafeAreaView } from 'react-navigation'
import LoginImg from '../assets/LoginImg.png'
import { handleSignIn } from "../services/Firebase";
let IMAGE_HEIGHT = 170
let IMAGE_HEIGHT_SMALL = 150
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
        email:"",
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
      
 
        //Handles sign  in
     const handleSubmit = async () => {
        if (this.state.email === "" || this.state.password === "") {
          console.error("Invalid Credentials");
        } else {
       try {
        await handleSignIn(this.state.email, this.state.password);
        this.props.navigation.navigate('Choices');
       } catch (error) {
        console.error(error);
       }
       }
      }; 
      const handleEmailChange = (text) => 
      {
        this.setState({email:text})
      } 
      return (
        
          
        <>
        <Background_1/>

        <KeyboardAvoidingView
        style = {styles.container} 
        automaticallyAdjustContentInsets = {true}
        alwaysBounceVertical = {false}

        >
        <Animated.Image source={LoginImg} style ={[styles.LoginImg, {height:this.imageHeight},{width:this.imageHeight}] }/>
        <Text style = {styles.title}> Bienvenue !</Text>
        <SafeAreaView style = {styles.inputView}>
          
            <TextInput
            
            defaultValue={this.state.email}
            onChangeText={handleEmailChange}
            textContentType="emailAddress"
            placeholder="Email Address"
            keyboardType="email-address"
            returnKeyType="next"
            style = {styles.TextInput}

            />
           
         </SafeAreaView> 

         <SafeAreaView style = {styles.inputView}>
          
            <TextInput
            
            placeholder="mot de passe"
            onChangeText={(text) => this.setState({password:text})}
            handlePasswordVisibility={handlePasswordVisibility}
            secureTextEntry={this.state.passwordVisibility}
            autoFocus ={true}
            rightIcon={this.state.rightIcon}
            style = {styles.TextInput}



            />
           
         </SafeAreaView>
        
        
        
         <SafeAreaView style = {{
                width:"55%",
                height:40,
                backgroundColor: '#240071F5',
                alignItems: "center",
                justifyContent: 'center',
                top:-150,
                borderRadius: 10}}>
                <Button color = "#fff" title = "se connecter" onPress = {handleSubmit} /> 
                </SafeAreaView> 
                

                <SafeAreaView style={{position:'absolute', flexDirection: 'row',justifyContent: 'center', alignItems: 'center', top:"48%"}}> 
                <Text left = "45%%">Nouveau ici?</Text>

                <Button  right="45%" title = "Inscription" onPress = {() => this.props.navigation.navigate('Sign Up')}></Button>

                </SafeAreaView>


        
        </KeyboardAvoidingView>
      
        
        
        
        </>
      
        
        

    
    );
  }
}
export {Login}
const styles = StyleSheet.create({
    container: {
      
      backgroundColor: "#E5d5E6",
      alignItems: "center",
    justifyContent: "center",
       
    },
   
    LoginImg: {
            position: 'absolute',

      width:150,
      top:-525,
      justifyContent:'center'
    },
    title: {
     
      fontSize : 32,
      top:-350,
      justifyContent: 'center'

  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  inputView: {
    width: "80%",
    backgroundColor :"#fff",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    top:-275
  },
  
  })   