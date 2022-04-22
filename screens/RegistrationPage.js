import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image, KeyboardAvoidingView,Animated,Keyboard } from 'react-native';
import { ScrollView, TextInput, } from 'react-native-gesture-handler';
import {Background_1} from '../components/Background_1'
import {Card, Provider as PaperProvider} from 'react-native-paper'
import { SafeAreaView } from 'react-navigation';
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
        confirmedPassword:"",
        passwordVisibility:true,
        rightIcon:'eye'
        

      }
         

    } 
    componentWillMount () {
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
          toValue: 0,
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



      return (
        
          
        <> 
                <Background_1/>

        <Animated.View 
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

        
        <SafeAreaView top ="25.42%" > 
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
        <SafeAreaView  top="36.42%" > 
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
        <SafeAreaView top = "47.42%" > 
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
        <SafeAreaView top = "58.42%" > 
      <Card>
          <Card.Content> 
            <TextInput
            style={styles.TextInput}
            placeholder="confimer mot de passe"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({confirmerPassword:text})}
            autoCorrect = {true}
            rightIcon={this.state.rightIcon}

            />
          </Card.Content>
          
          
        </Card>
        
        </SafeAreaView>
        
        </Animated.View>
        
        </>
        
        
        
        
      
        
        

    
    );
  }
}
export {Registration}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      position: 'absolute',
      width:325,
      height:165,
      left:33,
      top:125,
      fontStyle: 'normal',
      fontSize: 32,
      textAlign: "center",
      fontWeight: "bold",
      textAlign: 'center',
      lineHeight: 48
    }, 
    bottomText: {
      position: 'absolute',
      width:332,
      height:175,
      left:32,
      top:475,
      fontStyle: 'normal',
      fontWeight:700,
      width:320, 
      fontSize: 23,
      textAlign: "center",
      fontWeight: "bold",
      lineHeight:36,
      textAlign: 'center'
      
      
    },
    Eye: {
      width: 150,
      height: 150,
      resizeMode: 'stretch',
      top: -30,
    },
    title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    paddingBottom: 24
  }
  
  });