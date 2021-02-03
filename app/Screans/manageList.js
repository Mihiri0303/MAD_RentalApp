import React,{useState} from 'react';
import {StyleSheet,View,Text,StatusBar,TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft,faBars,faFilter,faSearch,faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox,Header,Slider,Card } from 'react-native-elements';


const MList = ({navigation}) => {
  


  return (
    <>
              <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
                <View style ={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate('manage')}>
                  <FontAwesomeIcon style ={styles.iconArrow} icon={faArrowLeft}/>
                </TouchableOpacity>
                    <Text style = {styles.topicText}> Vehicle Rental</Text>
                </View>
                <Text style = {styles.minTopic}>Manage vehicles</Text>
                <Card>
                <Text style ={styles.min}>Nissan Caravan</Text>
                <Text style ={{fontSize : 12, marginLeft : 90, marginTop : 3}}>Seats : 15</Text>
                <Text style ={{fontSize : 13, marginLeft : 90 , fontWeight :'bold', marginTop : 3}}>Hourly Rate : RS.1000.00</Text>
                <Text style ={{fontSize : 13, marginLeft : 90 , fontWeight :'bold'}}>Daily Rate : RS.24000.00</Text>
                <TouchableOpacity onPress = {() => navigation.navigate('mod')} 
                  style = {styles.loginButton}>
                  <Text style = {{color : '#ffffff',fontSize :13}}>Modify</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                  style = {styles.signButton}>
                  <Text style = {{color : '#ffffff',fontSize :13}}>Reserve</Text>
              </TouchableOpacity>
              </Card>
              <Card>
                <Text style ={styles.min}>Nissan Caravan</Text>
                <Text style ={{fontSize : 12, marginLeft : 90, marginTop : 3}}>Seats : 15</Text>
                <Text style ={{fontSize : 13, marginLeft : 90 , fontWeight :'bold', marginTop : 3}}>Hourly Rate : RS.1000.00</Text>
                <Text style ={{fontSize : 13, marginLeft : 90 , fontWeight :'bold'}}>Daily Rate : RS.24000.00</Text>
                <TouchableOpacity onPress = {() => navigation.navigate('mod')} 
                  style = {styles.loginButton}>
                  <Text style = {{color : '#ffffff',fontSize :13}}>Modify</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                  style = {styles.signButton}>
                  <Text style = {{color : '#ffffff',fontSize :13}}>Reserve</Text>
              </TouchableOpacity>
              </Card>
              <Card>
                <Text style ={styles.min}>Nissan Caravan</Text>
                <Text style ={{fontSize : 12, marginLeft : 90, marginTop : 3}}>Seats : 15</Text>
                <Text style ={{fontSize : 13, marginLeft : 90 , fontWeight :'bold', marginTop : 3}}>Hourly Rate : RS.1000.00</Text>
                <Text style ={{fontSize : 13, marginLeft : 90 , fontWeight :'bold'}}>Daily Rate : RS.24000.00</Text>
                <TouchableOpacity onPress = {() => navigation.navigate('mod')}
                  style = {styles.loginButton}>
                  <Text style = {{color : '#ffffff',fontSize :13}}>Modify</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                  style = {styles.signButton}>
                  <Text style = {{color : '#ffffff',fontSize :13}}>Reserve</Text>
              </TouchableOpacity>
              </Card>
              <Card>
                <Text style ={styles.min}>Nissan Caravan</Text>
                <Text style ={{fontSize : 12, marginLeft : 90, marginTop : 3}}>Seats : 15</Text>
                <Text style ={{fontSize : 13, marginLeft : 90 , fontWeight :'bold', marginTop : 3}}>Hourly Rate : RS.1000.00</Text>
                <Text style ={{fontSize : 13, marginLeft : 90 , fontWeight :'bold'}}>Daily Rate : RS.24000.00</Text>
                <TouchableOpacity onPress = {() => navigation.navigate('mod')} 
                  style = {styles.loginButton}>
                  <Text style = {{color : '#ffffff',fontSize :13}}>Modify</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                  style = {styles.signButton}>
                  <Text style = {{color : '#ffffff',fontSize :13}}>Reserve</Text>
              </TouchableOpacity>
              </Card>
              
              
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
    width  : "80%",
    display : "flex",
    flexDirection : "row",
    left : 70,
       
  },
  Cols : {
    position : 'relative',
    width  : "100%",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    // marginTop : 20,
    padding:10,
  },
  Rows : {
    width  : "100%",
    display : "flex",
    flexDirection : 'row',
    justifyContent : "flex-start",
    alignItems : "center",
  },

  titleText : {
    fontSize : 18,
    paddingVertical : 5
   
  },
  titleTexts : {
    marginTop : 25,
    fontSize : 30,
    fontWeight : "bold"
  },
  topicText : {
    fontSize : 26,
    fontWeight : "bold"
  },
  minTopic : {
    fontSize : 17,
    marginTop : 20,
    marginRight : 170,
    fontWeight : "bold"
  },
  min : {
    fontSize : 17,
    marginTop : -12,
    marginLeft: 90,
    fontWeight : 'bold'
  },
  input: {
    height: 40,
    borderColor: '#999999',
    borderWidth:1,
    width : "65%",
    borderRadius  : 10,
    paddingHorizontal : 10,
    marginRight : 110 ,
    marginTop : -30
  },
  inputs: {
    height: 40,
    borderColor: '#999999',
    borderWidth:1,
    width : "100%",
    borderRadius  : 5,
    paddingHorizontal : 10,
    right : 70
  },
  Input: {
    height: 60,
    borderColor: '#999999',
    borderWidth:1,
    width : "100%",
    borderRadius  : 5,
    paddingHorizontal : 10,
    right : 70,
    marginVertical :10
  },
  Sliderinput: {
    height: 40,
    borderColor: '#999999',
    borderWidth:1,
    width : "14%",
    borderRadius  : 5,
    paddingHorizontal : 5,
    margin : "4%"
  },
  loginButton : {
    width : '22%',
    height : 30,
    borderWidth : 2,
    borderColor :  "#5764ff",
    backgroundColor :  "#5764ff",
    borderRadius  : 5,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : -69,
    marginLeft : 250
  },
  saveButton : {
    width : "20%",
    height : 40,
    margin : "2%",
    borderWidth : 2,
    borderColor :  "#dcdcdc",
    backgroundColor :  "#dcdcdc",
    borderRadius  : 5,
    alignItems : 'center',
    justifyContent : 'center',
    display : "flex",
    flexDirection : "row",
    marginLeft : 275
   
    
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
    color : "#000",
    fontSize : 15,
  },
  regs:{
    fontSize : 19,
    color : "#000",
    
  },
  iconArrow: {
    marginHorizontal : 20,
  },
  iconArrows : {
    marginHorizontal : 3
  },
  iconSearch : {
    marginLeft : 155,
    marginTop : -33,
    padding : 8
    
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
    width : "22%",
    height : 30,
    borderWidth : 2,
    borderColor :  "#E64848",
    backgroundColor :  "#E64848",
    borderRadius  : 5,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 7,
    marginLeft : 250
  },
  btm : {
    fontSize : 18,
    color : "#b0c4de",
    fontWeight : "bold",
    marginTop : 370
  },



});

export default MList;