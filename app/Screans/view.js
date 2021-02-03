import React,{useState} from 'react';
import {StyleSheet,View,Text,StatusBar,TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft,faBars,faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import DropDownPicker from 'react-native-dropdown-picker';


const Zoom = ({navigation}) => {

  return (
    <>
              <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
                <View style ={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate('dash')}  style = {{marginLeft : 10,width : 50,height:'100%'}}>
                  <FontAwesomeIcon style ={styles.iconArrow} icon={faArrowLeft}/>
                </TouchableOpacity>
                    <Text style = {styles.topicText}> Vehicle Rental</Text>
                </View>
                <Text style = {styles.minTopic}>Vehicle Details</Text>
                <View style = {styles.saveButton}></View>
                <Text style ={styles.minTopic}>Nissan Caravan</Text>
                <Text style ={{fontSize : 15, marginLeft : 220, marginTop : -30}}>Seats : 15</Text>
                <Text style ={{fontSize : 14, marginRight : 115}}>Licence Type : Heavy vehicle</Text>
                <Text style ={{fontSize : 15, marginRight : 195 , fontWeight :'bold', marginTop : 20, textDecorationLine : "underline"}}>RS.1000.00/hr</Text>
                <Text style ={{fontSize : 15, marginRight : 180 , fontWeight :'bold'}}>RS.24000.00/day</Text>
                <Text style ={{fontSize : 15, marginRight : 140, marginTop : 30}}>Contact No: 0779561266</Text>
                <DropDownPicker
                  items={[
                      {label: "Renter", value: 'rent'},
                      {label: "User", value: 'use' }]}
                        containerStyle={{height:35,width:"45%",marginTop:-105,borderRadius:5, marginLeft : 130}}
                        selectedLabelStyle = {{color:"#000"}}
                        placeholderStyle = {{color:"#676060",right :6}}
                  itemStyle={{
                       justifyContent: 'flex-start'}}
                  dropDownStyle={{backgroundColor: '#fafafa', borderColor: '#676060',borderWidth : 1}}/>
                  <DropDownPicker
                  items={[
                      {label: "Renter", value: 'rent'},
                      {label: "User", value: 'use' }]}
                        containerStyle={{height:35,width:"45%",marginTop:2,borderRadius:5, marginLeft : 130}}
                        selectedLabelStyle = {{color:"#000"}}
                        placeholderStyle = {{color:"#676060",right :6}}
                  itemStyle={{
                       justifyContent: 'flex-start'}}
                  dropDownStyle={{backgroundColor: '#fafafa', borderColor: '#676060',borderWidth : 1}}/>
                  <DropDownPicker
                  items={[
                      {label: "Renter", value: 'rent'},
                      {label: "User", value: 'use' }]}
                        containerStyle={{height:35,width:"25%",marginTop:2,borderRadius:5, marginLeft : 200}}
                        selectedLabelStyle = {{color:"#000"}}
                        placeholderStyle = {{color:"#676060",right :6}}
                  itemStyle={{
                       justifyContent: 'flex-start'}}
                  dropDownStyle={{backgroundColor: '#fafafa', borderColor: '#676060',borderWidth : 1}}/>
               
                <TouchableOpacity onPress = {() => navigation.navigate('dash')}
                      style = {styles.signButton}>
                      <Text style = {styles.log}>Reserve</Text>
                  </TouchableOpacity>
                      
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
    marginLeft : 3,
    fontSize : 26,
    fontWeight : "bold"
  },
  minTopic : {
    fontSize : 20,
    marginBottom : 10,
    marginTop : 15,
    marginRight : 155,
    fontWeight : "bold"
  },
  input: {
    height: 40,
    borderColor: '#999999',
    borderWidth:1,
    width : "40%",
    borderRadius  : 5,
    paddingHorizontal : 10,
    right : 75,
    marginHorizontal : 10
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
    height : 300,
    margin : "2%",
    borderWidth : 2,
    borderColor :  "#dcdcdc",
    backgroundColor :  "#dcdcdc",
    borderRadius  : 5,
    alignItems : 'center',
    justifyContent : 'center',
    display : "flex",
    flexDirection : "column",
    //right : 60
    
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
    color : "#ffffff",
    fontSize : 16,
    fontWeight : "bold",
  
  },
  regs:{
    fontSize : 19,
    color : "#000",
    
  },
  iconArrow: {
    left : 15,
    top : 10
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
    width : "80%",
    height : 45,
    borderWidth : 2,
    borderColor :  "#E64848",
    backgroundColor :  "#E64848",
    borderRadius  : 5,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 30
  },
  btm : {
    fontSize : 18,
    color : "#b0c4de",
    fontWeight : "bold",
    marginTop : 370
  },



});

export default Zoom;