import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image, KeyboardAvoidingView,Animated,Keyboard } from 'react-native';
import { ScrollView, TextInput, } from 'react-native-gesture-handler';
import {Background_1} from '../components/Background_1'
import { SafeAreaView } from 'react-navigation';
import eye from '../assets/eye.png'
import *as auth from 'firebase/auth'
import {AddUser} from '../services/Users'
let IMAGE_HEIGHT = 120
let IMAGE_HEIGHT_SMALL = 100
class Registration extends Component {
    constructor(props)
    {
      super(props)
      this.keyboardHeight = new Animated.Value(0);
      this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
      this.state = {
        name:"",
        password:"",
        email:"",
        confirmedPassword:"",
        passwordVisibility:true,
        image:"",
        location:"",
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
          useNativeDriver: false ,

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
      const handleSignUp = async (email, password) => {
        await auth.createUserWithEmailAndPassword(auth.getAuth(),email, password)
          .then(() => {
            console.log(auth.getAuth().currentUser);
            const userID = auth.getAuth().currentUser.uid;
            console.log("weshhhhh" + userID)
            AddUser(userID,this.state.name, this.state.email, this.state.image, this.state.location).
            then(() => { 
              alert("bongoMan")
            }).catch((error) => { 
              alert(err);
            })
            this.props.navigation.navigate('Login');
            console.log("uhaubfuiabf")

          })
          .catch((error) => {
            console.error(error);
          });
      };
      //Handles sign up
      const handleSubmit = async () => {

        if (this.state.email === "" && this.state.password !== this.state.confirmedPassword && this.state.password === "" && this.state.confirmedPassword === "") {
          console.error("Invalid Credentials");
        } else {
          try {
            await handleSignUp(this.state.email, this.state.password);

          } catch (error) {
            console.error(error);
          }
        }
      };

      return (
        
          
        <>
        <Background_1/>

        <KeyboardAvoidingView
        style = {styles.container} 
        automaticallyAdjustContentInsets = {true}
        alwaysBounceVertical = {false}

        >
        <Animated.Image source={eye} style ={[styles.Eye, {height:this.imageHeight},{width:this.imageHeight}] }/>
        <Text style = {styles.title}> Bienvenue !</Text>
        <SafeAreaView style = {[styles.inputView, {top:-500}]}>
          
          <TextInput
          
          defaultValue={this.state.name}
          textContentType="name"
          placeholder="Nom"
          returnKeyType="next"
          style = {styles.TextInput}

          />
         
       </SafeAreaView> 
      
        <SafeAreaView style = {[styles.inputView, {top:-430}]}>
          
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

         <SafeAreaView style = {[styles.inputView, {top:-360}]}>
          
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
         <SafeAreaView style = {[styles.inputView, {top:-290}]}>
          
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
                position:'absolute',
                width:"65%",
                height:40,
                backgroundColor: '#240071F5',
                alignItems: "center",
                justifyContent: 'center',
                top:-100,
                borderRadius: 10}}>
                <Button color = "#fff" title = "Inscription" onPress = {handleSubmit} /> 
                </SafeAreaView> 
                

                <SafeAreaView style={{position:'absolute', flexDirection: 'row',justifyContent: 'center', alignItems: 'center', top:-60}}> 
                <Text left = "45%%">Deja inscrit?</Text>

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
    
    backgroundColor: "#E5d5E6",
    alignItems: "center",
  justifyContent: "center",
     
  },
 
  Eye: {
          position: 'absolute',

    width:150,
    top:-700,
  },
  title: {
   
    fontSize : 32,
    top:-580,
    justifyContent: 'center'

},
TextInput: {
  height: 50,
  flex: 1,
  padding: 10,
},
inputView: {
  position:'absolute',

  width: "80%",
  backgroundColor :"#fff",
  borderRadius: 10,
  height: 45,
  marginBottom: 20,
},

})   