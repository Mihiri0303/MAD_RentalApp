import React,{useState} from 'react';
import {StyleSheet,View,Text,StatusBar,Image,TouchableOpacity,TextInput,Alert} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft,} from '@fortawesome/free-solid-svg-icons';



const About = ({navigation}) => {

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
           <Text style = {styles.minTopic}>About</Text>
           <Text> Simply this app allows anyone to rent any type of vehicle, they can rent a
vehicle to travel using this app on their mobile phone.
Also, the user of this app will be able to find the any types of vehicle they want. Users can
search (filter) for vehicles by using this. In addition to that, the user can cancel their reservation
and also the person providing the vehicle on a rental basis can cancel that request but if the
reservation is confirmed then the reservation cannot be canceled by the user. The renter can insert,
update and cancel the information provided and also return to the rented list when the vehicles
rented are returned.
In the proposed system, a person behaves as a person who provides vehicle on a rental
basis as well as, as a person who obtains vehicles on a rental basis.</Text>
          
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
    marginTop : 250
  },
  btm : {
    fontSize : 18,
    color : "#b0c4de",
    fontWeight : "bold",
    marginTop : 10
  },



});

export default About;