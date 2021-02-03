import React,{useState} from 'react';
import {StyleSheet,View,Text,StatusBar,Image,TouchableOpacity,TextInput,Alert} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft,} from '@fortawesome/free-solid-svg-icons';


const Profile = ({navigation}) => {

  return (
    <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <View style ={styles.header}>
          <TouchableOpacity onPress = {() => navigation.navigate('add')}>
            <FontAwesomeIcon style ={styles.iconArrow} icon={faArrowLeft}/>
          </TouchableOpacity>
            <Text style = {styles.topicText}> Vehicle Rental</Text>
          </View>
          <Text style = {styles.minTopic}>Profile</Text>
            <View style={styles.Forms}>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "First Name"
                placeholderTextColor = '#676060'
                autoCapitalize = "none"/>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Last Name"
                placeholderTextColor = '#676060'
                autoCapitalize = "none"/>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Mobile no"
                placeholderTextColor = '#676060'
                autoCapitalize = "none"/>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "E-mail"
                placeholderTextColor = '#676060'
                autoCapitalize = "none"/>
              <TouchableOpacity 
                  style = {styles.saveButton}>
                  <Text style = {styles.log}>Save</Text>
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
  header : {
    display : "flex",
    alignItems : 'center',
    flexDirection : 'row',
    backgroundColor : '#6495ed',
    paddingVertical: 10,
    width : "100%",
  },
  home: {
    width: 300,
    height : 210,
    resizeMode : "contain",
    marginVertical : 1,
    display : "flex",
    marginTop : 8
  },
  sign_up : {
    marginTop : -8,
    width: 100,
    height : 100,
  },
  Form : {
    width  : "100%",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    marginTop : 1,
  },
  Forms : {
    width  : "100%",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    marginVertical : -20
  },
  titleText : {
    fontSize : 30,
    marginTop : 45,
    fontWeight : "bold"
  },
  titleTexts : {
    marginTop : 20,
    fontSize : 30,
    fontWeight : "bold"
  },
  topicText : {
    marginLeft : 10,
    fontSize : 26,
    fontWeight : "bold"
  },
  minTopic : {
    fontSize : 19,
    marginBottom : 35,
    marginTop : 20,
    right : 110,
    fontWeight : "bold"
  },
  input: {
    height: 40,
    borderColor: '#999999',
    borderWidth:1,
    width : "80%",
    marginVertical : 10,
    marginBottom: 2,
    borderRadius  : 5,
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
  saveButton : {
    width : "80%",
    height : 44,
    borderWidth : 2,
    borderColor :  "#32cd32",
    backgroundColor :  "#32cd32",
    borderRadius  : 5,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 280
  },
  titleText2 : {
    fontSize : 14,
    marginTop : 3
  },
  titleText3 : {
    fontSize : 14,
    color :'#676060',
    marginTop : 5
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
    marginHorizontal : 10
  },
  




});

export default Profile;