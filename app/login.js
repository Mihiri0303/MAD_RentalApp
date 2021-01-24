import React,{useState} from 'react';
import {StyleSheet,View,Text,StatusBar,Image,TouchableOpacity,TextInput,Alert} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft,} from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleEmail = (text) => {
    setEmail(text);
  }

  const login = () => {
    Alert.alert(
      "Login Al",
      "Email : "+email+ " AND Password : "+password,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
 }
  return (
    <> 
        <View style={styles.container}>
        <FontAwesomeIcon style ={styles.iconArrow} onPress={login} icon={faArrowLeft}/>
        <Text style = {styles.titleText}> Vehicle Rental</Text>
          <Image style = {styles.home} source={require('./asset/home.jpg')} />
          <View style={styles.Form}>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "E-mail"
                placeholderTextColor = '#676060'
                autoCapitalize = "none"
                onChangeText = {text => handleEmail(text)}/>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = '#676060' 
                autoCapitalize = "none"
                onChangeText = {text => setPassword(text)}/>
              <TouchableOpacity 
              style = {styles.loginButton}
              onPress = {login}>
                <Text style = {styles.log}>LOGIN</Text>
              </TouchableOpacity>
              <Text style = {styles.titleText2}>I have no an account.</Text>
              <TouchableOpacity style ={{backgroundColor:"#ffffff"}}>
                <Text style ={styles.regs}>Regester here</Text>
              </TouchableOpacity>
          </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#ffffff",
    height : "100%",
    display : "flex",
    alignItems: "center"
  },
  home: {
    width: 300,
    height : 210,
    resizeMode : "contain",
    marginVertical : 1,
    display : "flex",
    marginTop : 8
  },
  Form : {
    width  : "100%",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    marginTop : 1,
  },
  titleText : {
    fontSize : 30,
    marginTop : 45,
    fontWeight : "bold"
  },
  input: {
    height: 40,
    borderColor: '#999999',
    borderWidth:1,
    width : "80%",
    marginVertical : 10,
    marginBottom: 2,
    borderRadius  : 10,
    paddingHorizontal : 10
  },
  loginButton : {
    width : 90,
    height : 35,
    borderWidth : 2,
    borderColor :  "#5864FF",
    backgroundColor :  "#5864FF",
    borderRadius  : 10,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 40
  },
  titleText2 : {
    fontSize : 14,
    marginTop : 3
  },
  log : {
    color : "#FFFFFF"
  },
  regs:{
    fontSize : 13,
    textDecorationLine : "underline",
    //textDecorationStyle : "solid",
    //textDecorationColor : "#000",
    color : "#0011FF",
  },
  iconArrow: {
    top : 25,
    right : 150
  }
  




});

export default Login;
