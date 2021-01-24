import React,{useState} from 'react';
import {StyleSheet,View,Text,StatusBar,Image,TouchableOpacity,TextInput,Alert,Animated} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft,faBars,faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox,Header,Slider } from 'react-native-elements';
import Login from './login';
import Sign from './sign';
import Profile from './profile';
import Add from './add';
import About from './about';
import Filter from './filter';
import Rentadd from './rentAdd';
import Manage from './manage';

const App = () => {

  return (
    <>
              <StatusBar barStyle="dark-content" />
                  {/*<Login/>*/}
                  {/*<Sign/>*/}
                  {/*<Profile/>*/}
                  {/*<Add/>*/}
                  {/*<About/>*/}
                  {<Filter/>}
                  {/*<Rentadd/>*/}
                  {/*<Manage/>*/}
        <View style={styles.container}>
                <View style ={styles.header}>
                  <FontAwesomeIcon style ={styles.iconArrow} icon={faArrowLeft}/>
                    <Text style = {styles.topicText}> Vehicle Rental</Text>
                </View>
                <Text style = {styles.minTopic}>Create New Vehicle</Text>
        
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
    marginLeft : 35,
    fontSize : 26,
    fontWeight : "bold"
  },
  minTopic : {
    fontSize : 19,
    marginBottom : 35,
    marginTop : 15,
    right : 70,
    fontWeight : "bold"
  },
  input: {
    height: 40,
    borderColor: '#999999',
    borderWidth:1,
    width : "40%",
    borderRadius  : 5,
    paddingHorizontal : 10,
    right : 70
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
    width : "46%",
    height : 160,
    margin : "2%",
    borderWidth : 2,
    borderColor :  "#dcdcdc",
    backgroundColor :  "#dcdcdc",
    borderRadius  : 5,
    alignItems : 'center',
    justifyContent : 'center',
    display : "flex",
    flexDirection : "column"
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
    fontSize : 18,
    fontWeight : "bold",
  
  },
  regs:{
    fontSize : 19,
    color : "#000",
    
  },
  iconArrow: {
    left : 25,
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
    marginTop : 250
  },
  btm : {
    fontSize : 18,
    color : "#b0c4de",
    fontWeight : "bold",
    marginTop : 370
  },



});

export default App;
