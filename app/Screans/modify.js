import React,{useState} from 'react';
import {StyleSheet,View,Text,StatusBar,TouchableOpacity,TextInput} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft,faBars,faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox,Header,Slider } from 'react-native-elements';


const Modify = ({navigation}) => {

  return (
    <>
              <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
                <View style ={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate('manage')} style = {{marginLeft : 10,width : 50,height:'100%'}}>
                  <FontAwesomeIcon style ={styles.iconArrow} icon={faArrowLeft}/>
                </TouchableOpacity>
                    <Text style = {styles.topicText}> Vehicle Rental</Text>
                </View>
                <Text style = {styles.minTopic}>Modify Vehicle</Text>
                <View style={styles.Forms}>
              <TextInput style = {styles.inputs}
                underlineColorAndroid = "transparent"
                placeholder = "Vehicle Name"
                placeholderTextColor = '#676060'
                autoCapitalize = "none"/>
                </View>
                <DropDownPicker
                      items={[
                         {label: "", value: ''},
                         {label: "", value: '' }]}
                            containerStyle={{height:40,width:"80%",marginTop:10,borderRadius:5}}
                            selectedLabelStyle = {{color:"#000"}}
                            placeholderStyle = {{color:"#676060",right :6}}
                      itemStyle={{
                            justifyContent: 'flex-start'}}
                            dropDownStyle={{backgroundColor: '#fafafa', borderColor: '#676060',borderWidth : 1}}/>
                <Text style = {{fontSize : 13,color:"#676060",marginVertical :10, right : 125 }}>Seats</Text>       
            <View style = {{ height: 10, width : "79%",marginBottom: 25, marginTop : 5, display : 'flex', flexDirection : 'row',alignItems:'center'}}>
            <View style = {{ height: 10, width : "85%",marginBottom: 35, marginTop : 5, position : "relative"}}>
                
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
            <Text style = {{fontSize : 13,color:"#676060",marginBottom :3, right : 105 }}>Rent Amount</Text>
                  <View style={styles.Forms}>
                  <TextInput style = {styles.input}
                          underlineColorAndroid = "transparent"
                          placeholder = "Hourly Rate"
                          placeholderTextColor = '#676060'
                          autoCapitalize = "none"/>
                  <TextInput style = {styles.input}
                          underlineColorAndroid = "transparent"
                          placeholder = "Daily Rate"
                          placeholderTextColor = '#676060'
                          autoCapitalize = "none"/>
                  </View>  
                  <View style={styles.Forms}>
                  <TextInput style = {styles.Input}
                          underlineColorAndroid = "transparent"
                          placeholder = "Aditional Note"
                          placeholderTextColor = '#676060'
                          autoCapitalize = "none"/>      
                  </View>
                <Text style = {{fontSize : 14,fontWeight :"bold",color:"#000",marginBottom :3, right : 105 }}>Vehicle Image</Text>
                <TouchableOpacity 
                      style = {styles.saveButton}>
                  </TouchableOpacity>
                  <TouchableOpacity 
                      style = {styles.signButton}>
                      <Text style = {styles.log}>Modify</Text>
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
    marginLeft : 15,
    fontSize : 26,
    fontWeight : "bold"
  },
  minTopic : {
    fontSize : 19,
    marginBottom : 10,
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
    width : "46%",
    height : 150,
    margin : "2%",
    borderWidth : 2,
    borderColor :  "#dcdcdc",
    backgroundColor :  "#dcdcdc",
    borderRadius  : 5,
    //alignItems : 'center',
    //justifyContent : 'center',
    display : "flex",
    flexDirection : "column",
    right : 60
    
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
    marginLeft : 10,
    top : 5
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
    borderColor :  "#008800",
    backgroundColor :  "#008800",
    borderRadius  : 5,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 25
  },
  btm : {
    fontSize : 18,
    color : "#b0c4de",
    fontWeight : "bold",
    marginTop : 370
  },



});

export default Modify;