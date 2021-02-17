import React,{useEffect, useState} from 'react';
import {StyleSheet,View,Text,StatusBar,Image,TouchableOpacity,TextInput,Alert} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft,} from '@fortawesome/free-solid-svg-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox } from 'react-native-elements';

const Sign = ({navigation}) => {



  return (
    <>
        <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <TouchableOpacity style ={{display:"flex",alignItems:"center",justifyContent:'center',position:"absolute",marginTop:15,top:0,left:0,width:50,height:50}} onPress = {() => navigation.navigate('add')}> 
          <FontAwesomeIcon icon={faArrowLeft}/>
          </TouchableOpacity>
          <Text style = {styles.titleTexts}> Vehicle Rental</Text>
          <Image style = {styles.sign_up} source={require('./../asset/sign_up.jpg')}/>
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
              <DropDownPicker
                  items={[
                      {label: "Renter", value: 'rent'},
                      {label: "User", value: 'use' }]}
                        containerStyle={{height:40,width:"80%",marginTop:10,borderRadius:5}}
                        selectedLabelStyle = {{color:"#000"}}
                        placeholderStyle = {{color:"#676060",right :6}}
                  itemStyle={{
                       justifyContent: 'flex-start'}}
                  dropDownStyle={{backgroundColor: '#fafafa', borderColor: '#676060',borderWidth : 1}}/>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "E-mail"
                placeholderTextColor = '#676060'
                autoCapitalize = "none"/>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = '#676060'
                autoCapitalize = "none"/>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Confirm Password"
                placeholderTextColor = '#676060'
                autoCapitalize = "none"/>
              <CheckBox
                title='Agree to the terms and conditions'
                containerStyle = {{backgroundColor:"none",borderColor:"#fff",marginTop :-9,marginBottom :-10,right :14}}
                // checked={this.state.checked}
              />
              <TouchableOpacity onPress = {() => navigation.navigate('dash')}
                 style = {styles.loginButton}>
                <Text style = {styles.log}>SIGN UP</Text>
              </TouchableOpacity>
              <Text style = {styles.titleText2}>Already have an account</Text> 
              <TouchableOpacity onPress = {() => navigation.navigate('dash')} style ={{backgroundColor:"#ffffff"}}>
                <Text style ={styles.regs}>Login here</Text>
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
    top : 25,
    right : 150
  },
  




});

export default Sign;