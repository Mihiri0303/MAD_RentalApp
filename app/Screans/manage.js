import 'react-native-gesture-handler';
import React,{useState} from 'react';
import {StyleSheet,View,Text,StatusBar,TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars,faPlusSquare,faTasks,faList,faEdit,faKey} from '@fortawesome/free-solid-svg-icons';



const Manage = ({navigation}) => {

  return (
    <>
              <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
                <View style ={styles.header}>
                <TouchableOpacity onPress = {() => { navigation.navigate('rAdd')}} style = {{marginLeft : 10,width : 50,height:'100%'}}>
                  <FontAwesomeIcon style ={styles.iconArrow} icon={faBars}/>
                </TouchableOpacity>
                    <Text style = {styles.topicText}> Vehicle Rental</Text>
                </View>
            <View style={styles.Cols}> 
              <View style={styles.Rows}> 
                <TouchableOpacity onPress = {() => navigation.navigate('create')}
                      style = {styles.saveButton}>
                       <FontAwesomeIcon size={50} icon={faPlusSquare}/>
                      <Text style = {styles.log}>Create</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => navigation.navigate('mlist')} 
                      style = {styles.saveButton}>
                       <FontAwesomeIcon size={50} icon={faEdit}/>
                      <Text style = {styles.log}>Manage</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.Rows}> 
                <TouchableOpacity onPress = {() => navigation.navigate('list')} 
                      style = {styles.saveButton}>
                      <FontAwesomeIcon size={50} icon={faList}/>
                      <Text style = {styles.log}>Request</Text>
                      <Text style = {styles.log}>Request</Text>
                     
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => navigation.navigate('dash')} 
                      style = {styles.saveButton}>
                      <FontAwesomeIcon size={50} icon={faKey}/>
                      <Text style = {styles.log}>Rent</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.Rows}> 
                <TouchableOpacity onPress = {() => navigation.navigate('reserve')}
                      style = {styles.saveButton}>
                       <FontAwesomeIcon size={50} icon={faTasks}/>
                      <Text style = {styles.log}>Rented List</Text>
                  </TouchableOpacity>
              </View>
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
    marginLeft : 15,
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
    marginLeft : 10,
    top : 8
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

export default Manage;
