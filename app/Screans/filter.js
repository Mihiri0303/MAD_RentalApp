import React,{useState} from 'react';
import {StyleSheet,View,Text,StatusBar,Image,TouchableOpacity,TextInput,Alert,Animated} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faFilter} from '@fortawesome/free-solid-svg-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox,Header,Slider,Icon } from 'react-native-elements';


const Filter = ({navigation}) => {

  return (
    <>
                  <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
               <View style ={styles.header}>
               <TouchableOpacity onPress = {() => navigation.navigate('dash')}>
                  <FontAwesomeIcon style ={styles.iconArrow} icon={faArrowLeft}/>
                  </TouchableOpacity>
                    <Text style = {styles.topicText}> Vehicle Rental</Text>
                    </View>
                 <DropDownPicker
                      items={[
                         {label: "", value: ''},
                         {label: "", value: '' }]}
                            containerStyle={{height:40,width:"80%",marginTop:30,borderRadius:5}}
                            selectedLabelStyle = {{color:"#000"}}
                            placeholderStyle = {{color:"#676060",right :6}}
                      itemStyle={{
                            justifyContent: 'flex-start'}}
                            dropDownStyle={{backgroundColor: '#fafafa', borderColor: '#676060',borderWidth : 1}}/>
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
            <Text style = {{fontSize : 13,color:"#676060",marginVertical :10, right : 125 }}>Seats</Text>       
            <View style = {{ height: 10, width : "79%",marginBottom: 30, marginTop : 5, display : 'flex', flexDirection : 'row',alignItems:'center'}}>
            <View style = {{ height: 10, width : "85%",marginBottom: 30, marginTop : 5, position : "relative"}}>
                
              <Slider
                  value={0}
                  maximumValue={50}
                  minimumValue={0}
      
                  trackStyle={{ height: 3, width : "100%", backgroundColor: '#ddd' }}
                  thumbStyle={{ height: 22, width: 10, backgroundColor: '#ddd' }}/>
            </View>              
                <TextInput style = {styles.Sliderinput}
                underlineColorAndroid = "transparent"
                autoCapitalize = "none"/>
            </View>              
              
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
                  <Text style = {{fontSize : 13,color:"#676060",marginVertical :20, right : 105 }}>Rent Amount</Text>
                  <View style={styles.Forms}>
                  <TextInput style = {styles.input}
                          underlineColorAndroid = "transparent"
                          placeholder = "Min Amuont"
                          placeholderTextColor = '#676060'
                          autoCapitalize = "none"/>
                  <TextInput style = {styles.input}
                          underlineColorAndroid = "transparent"
                          placeholder = "Max Amuont"
                          placeholderTextColor = '#676060'
                          autoCapitalize = "none"/>
                  </View> 
                  <TouchableOpacity 
                  style = {styles.saveButton}>
                  <FontAwesomeIcon style ={styles.iconArrow} icon={faFilter}/>
                  <Text style = {styles.log}>Apply Filter</Text>
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
    width : "45%",
    borderRadius  : 5,
    paddingHorizontal : 10,
    right : 75,
    marginHorizontal : 10
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
    height : 45,
    borderWidth : 2,
    borderColor :  "#dcdcdc",
    backgroundColor :  "#dcdcdc",
    borderRadius  : 5,
    flexDirection : "row",
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 200
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
    fontSize : 17
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

export default Filter;
