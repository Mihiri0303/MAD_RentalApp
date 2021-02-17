import React,{useEffect} from 'react';
import {StyleSheet,View,Text,StatusBar,Image,TouchableOpacity,TextInput} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft,faBars,faFilter,faSearch,faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { CheckBox,Header,Slider,Card } from 'react-native-elements';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';



const Dash = ({navigation}) => {
  
  const State = useSelector(state => state);

  const Reserve = () => {
    if(State.is_logged){
      navigation.navigate('manage');
    }else{
      navigation.navigate('log');
    }
  }; 

  useEffect(() => {
    const usersCollection = firestore().collection('Users').get().then(col => {
      console.log(col);
    });
  });
  return (
    <>
              <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
                <View style ={styles.header}>
                  <TouchableOpacity onPress = {() => navigation.navigate('add')}> 
                  <FontAwesomeIcon style ={styles.iconArrow} icon={faBars}/>
                  </TouchableOpacity>
                    <Text style = {styles.topicText}> Vehicle Rental</Text>
                </View>
                <TouchableOpacity onPress = {() => navigation.navigate('filter')}
                  style = {styles.saveButton}>
                  <FontAwesomeIcon style ={styles.iconArrows} icon={faFilter}/>
                  <Text style = {styles.log}>Filter</Text>
              </TouchableOpacity>
              <FontAwesomeIcon style ={styles.iconSearch} icon={faSearch}/>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Search Vehicle"
                placeholderTextColor = '#676060'
                autoCapitalize = "none"/>
              <Card>
                <Text style ={styles.minTopic}>Nissan Caravan</Text>
                <Text style ={{fontSize : 13, marginLeft : 130, marginTop : 3}}>Seats : 15</Text>
                <Text style ={{fontSize : 13, marginLeft : 130, marginTop : 3}}>Licence Type : Heavy vehicle</Text>
                <Text style ={{fontSize : 15, marginLeft : 130 , fontWeight :'bold', marginTop : 3, textDecorationLine : "underline"}}>RS.1000.00/hr</Text>
                <Text style ={{fontSize : 15, marginLeft : 130 , fontWeight :'bold'}}>RS.24000.00/day</Text>
                <TouchableOpacity onPress = {Reserve}
                  style = {styles.signButton}>
                  <Text style = {{color : '#ffffff',fontSize :13}}>Reserve</Text>
              </TouchableOpacity>
              </Card>
              <Card>
                <Text style ={styles.minTopic}>Nissan Caravan</Text>
                <Text style ={{fontSize : 13, marginLeft : 130, marginTop : 3}}>Seats : 15</Text>
                <Text style ={{fontSize : 13, marginLeft : 130, marginTop : 3}}>Licence Type : Heavy vehicle</Text>
                <Text style ={{fontSize : 15, marginLeft : 130 , fontWeight :'bold', marginTop : 3, textDecorationLine : "underline"}}>RS.1000.00/hr</Text>
                <Text style ={{fontSize : 15, marginLeft : 130 , fontWeight :'bold'}}>RS.24000.00/day</Text>
                <TouchableOpacity onPress = {() => navigation.navigate('zoom')} 
                  style = {styles.signButton}>
                  <Text style = {{color : '#ffffff',fontSize :13}}>Reserve</Text>
              </TouchableOpacity>
              </Card>
              <Card>
                <Text style ={styles.minTopic}>Nissan Caravan</Text>
                <Text style ={{fontSize : 13, marginLeft : 130, marginTop : 3}}>Seats : 15</Text>
                <Text style ={{fontSize : 13, marginLeft : 130, marginTop : 3}}>Licence Type : Heavy vehicle</Text>
                <Text style ={{fontSize : 15, marginLeft : 130 , fontWeight :'bold', marginTop : 3, textDecorationLine : "underline"}}>RS.1000.00/hr</Text>
                <Text style ={{fontSize : 15, marginLeft : 130 , fontWeight :'bold'}}>RS.24000.00/day</Text>
                <TouchableOpacity onPress = {() => navigation.navigate('zoom')} 
                  style = {styles.signButton}>
                  <Text style = {{color : '#ffffff',fontSize :13}}>Reserve</Text>
              </TouchableOpacity>
              </Card>
              <Card>
                <Text style ={styles.minTopic}>Nissan Caravan</Text>
                <Text style ={{fontSize : 13, marginLeft : 130, marginTop : 3}}>Seats : 15</Text>
                <Text style ={{fontSize : 13, marginLeft : 130, marginTop : 3}}>Licence Type : Heavy vehicle</Text>
                <Text style ={{fontSize : 15, marginLeft : 130 , fontWeight :'bold', marginTop : 3, textDecorationLine : "underline"}}>RS.1000.00/hr</Text>
                <Text style ={{fontSize : 15, marginLeft : 130 , fontWeight :'bold'}}>RS.24000.00/day</Text>
                <TouchableOpacity onPress = {() => navigation.navigate('zoom')}
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
    fontSize : 22,
    marginTop : -12,
    marginLeft: 130,
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
    width : "21%",
    height : 30,
    borderWidth : 2,
    borderColor :  "#E64848",
    backgroundColor :  "#E64848",
    borderRadius  : 5,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : -25,
    marginLeft : 250
  },
  btm : {
    fontSize : 18,
    color : "#b0c4de",
    fontWeight : "bold",
    marginTop : 370
  },



});

export default Dash;