import 'react-native-gesture-handler';
import React,{useState} from 'react';
import Login from './Screans/login';
import Sign from './Screans/sign';
import Profile from './Screans/profile';
import Add from './Screans/add';
import About from './Screans/about';
import Filter from './Screans/filter';
import Rentadd from './Screans/rentAdd';
import Manage from './Screans/manage';
import Create from './Screans/create';
import Modify from './Screans/modify';
import Zoom from './Screans/view';
import Dash from './Screans/dashBoard';
import MList from './Screans/manageList';
import List from './Screans/list';
import RList from './Screans/reserve';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Reducer from './Reducers';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

const store = createStore(Reducer);

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dash">
          <Stack.Screen name="dash" component={Dash} options={{headerShown:false}} />
          <Stack.Screen name="add" component={Add} options={{headerShown:false}}/>
          <Stack.Screen name="log" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="sign" component={Sign} options={{headerShown:false}}/>
          <Stack.Screen name="filter" component={Filter} options={{headerShown:false}}/>
          <Stack.Screen name="about" component={About} options={{headerShown:false}}/>
          <Stack.Screen name="prof" component={Profile} options={{headerShown:false}}/>
          <Stack.Screen name="zoom" component={Zoom} options={{headerShown:false}}/>
          <Stack.Screen name="reserve" component={RList} options={{headerShown:false}}/>
          <Stack.Screen name="manage" component={Manage} options={{headerShown:false}}/>
          <Stack.Screen name="rAdd" component={Rentadd} options={{headerShown:false}}/>
          <Stack.Screen name="create" component={Create} options={{headerShown:false}}/>
          <Stack.Screen name="mlist" component={MList} options={{headerShown:false}}/>
          <Stack.Screen name="list" component={List} options={{headerShown:false}}/>
          <Stack.Screen name="mod" component={Modify} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
