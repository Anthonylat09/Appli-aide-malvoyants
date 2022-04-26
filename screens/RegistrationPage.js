import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image, KeyboardAvoidingView,Animated,Keyboard } from 'react-native';
import { ScrollView, TextInput, } from 'react-native-gesture-handler';
import {Background_1} from '../components/Background_1'
import {Card, Provider as PaperProvider} from 'react-native-paper'
import { SafeAreaView } from 'react-navigation';
import { handleSignUp } from "../services/Firebase";
import eye from '../assets/eye.png'
let IMAGE_HEIGHT = 0
let IMAGE_HEIGHT_SMALL = 0
class Registration extends Component {
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
          useNativeDriver: true,

        }),
        Animated.timing(this.imageHeight, {
          duration: event.duration,
          toValue: IMAGE_HEIGHT_SMALL,
          useNativeDriver: true ,

        }),
      ]).start();
    };
  
    keyboardWillHide = (event) => {
      Animated.parallel([
        Animated.timing(this.keyboardHeight, {
          duration: event.duration,
          toValue: 2,
          useNativeDriver: true 

        }),
        Animated.timing(this.imageHeight, {
          duration: event.duration,
          toValue: IMAGE_HEIGHT,
          useNativeDriver: true,

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
      // handles email input
      
      const handleEmailChange = (text) => 
      {
        this.setState({email:text})
      } 

      //handles password input 
      const handlePasswordChange = (text) => 
      {
        this.setState({password:text})
      } 
      //Handles sign up
      const handleSubmit = async () => {

        if (this.state.email === "" && this.state.password !== this.state.confirmedPassword && this.state.password === "" && this.state.confirmedPassword === "") {
          console.error("Invalid Credentials");
        } else {
          try {
            await handleSignUp(this.state.email, this.state.password);
            this.props.navigation.navigate('Login');

          } catch (error) {
            console.error(error);
          }
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
        padding:7,
        lineHeight: 48}}
        behavior = "padding"
        automaticallyAdjustContentInsets = {true}
        alwaysBounceVertical = {true}
        >
        <Animated.Image source={eye} style ={styles.Eye}/>
        
        <SafeAreaView top ="-47.42%" > 
      <Card>
          <Card.Content> 
            <TextInput
            style={styles.TextInput}
            placeholder="Prénom"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({firstname:text})}
            />
          </Card.Content>
          
          
        </Card>
        
        </SafeAreaView>
        <SafeAreaView  top="-36.42%" > 
      <Card>
          <Card.Content> 
            <TextInput
            
            
            placeholderTextColor="#003f5c"
            defaultValue={this.state.email}
            onChangeText={handleEmailChange}
            textContentType="emailAddress"
            placeholder="Email Address"
            keyboardType="email-address"
            returnKeyType="next"

            />
          </Card.Content>
          
          
        </Card>
        
        </SafeAreaView>
        <SafeAreaView top = "-25.42%" > 
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
        <SafeAreaView top = "-12.42%" > 
      <Card>
          <Card.Content> 
            <TextInput
            style={styles.TextInput}
            placeholder="confimer mot de passe"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({confirmerPassword:text})}
            secureTextEntry={this.state.passwordVisibility}
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
                <Button color = "#fff" title = "Inscription" onPress = {handleSubmit} /> 
                </SafeAreaView> 
                <SafeAreaView style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top:"25%"}}> 
                <Text top =" 14%"left = "45%">Deja inscrit?</Text>
                <Button  right="45%" title = "Connectez-vous" onPress = {() => this.props.navigation.navigate('Login')}></Button>
                </SafeAreaView>
        
        </KeyboardAvoidingView>
        
        </>
        
        
        
        
      
        
        

    
    );
  }
}
export {Registration}
const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    },
   
    Eye: {
      width: "50%",
      height: "45%",
      top: "-56%",
      left:"22%",
    },
    title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    paddingBottom: 24
  }
  
  })