import React,{useState} from 'react';
import {StyleSheet,View,Text,StatusBar,TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft,} from '@fortawesome/free-solid-svg-icons';


const Add = ({navigation}) => {

  return (
    <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <View style ={styles.header}>
          <TouchableOpacity onPress = {() => navigation.navigate('dash')}> 
            <FontAwesomeIcon style ={styles.iconArrow} icon={faArrowLeft}/>
          </TouchableOpacity>
            <Text style = {styles.topicText}> Vehicle Rental</Text>
            <TouchableOpacity 
              style = {styles.loginButton}
                 onPress = {() => navigation.navigate('log')}>
                <Text style = {styles.log}>LOGIN</Text>
              </TouchableOpacity> 
          </View>
          <TouchableOpacity  onPress = {() => navigation.navigate('reserve')} style ={styles.btnFace}>
                <Text style ={styles.regs}>Rented Items</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress = {() => navigation.navigate('about')} style ={styles.btnFace}>
                <Text style ={styles.regs}>About</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress = {() => navigation.navigate('prof')} style ={styles.btnFace}>
                <Text style ={styles.regs}>Profile</Text>
              </TouchableOpacity>   
            <TouchableOpacity 
              style = {styles.signButton}
              onPress = {() => navigation.navigate('sign')}>
                <Text style = {styles.log}>SIGN UP</Text>
              </TouchableOpacity> 
              <Text style = {styles.btm}>Vehicle Rental</Text>
      </View> 
      
    </>
  );
};

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#cad7e8",
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
    fontSize : 18,
    paddingVertical : 5
   
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
    width : 80,
    height : 35,
    borderWidth : 2,
    borderColor :  "#b0c4de",
    backgroundColor :  "#b0c4de",
    borderRadius  : 5,
    alignItems : 'center',
    justifyContent : 'center',
    left : 35
  },
  saveButton : {
    width : "80%",
    height : 40,
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
    color : "#000"
  },
  regs:{
    fontSize : 19,
    color : "#000",
    
  },
  iconArrow: {
    marginHorizontal : 10
  },
  btnFace : {
    height : 60,
    width : "100%",
    paddingVertical : 15,
    paddingHorizontal: 20,
    backgroundColor:"#b0c4de",
    display : "flex",
    flexDirection : 'row',
    alignItems : "center"
  },
  signButton : {
    width : 100,
    height : 50,
    borderWidth : 2,
    borderColor :  "#b0c4de",
    backgroundColor :  "#b0c4de",
    borderRadius  : 5,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 300
  },
  btm : {
    fontSize : 18,
    color : "#b0c4de",
    fontWeight : "bold",
    marginTop : 10
  },



});

export default Add;