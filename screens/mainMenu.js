import React from 'react';
// @ts-ignore
import type {PropsWithChildren} from 'react';
import {
  TouchableOpacity,
  View, Text,ScrollView
} from 'react-native';
import { useFonts } from 'expo-font';
import SVGatorComponent from '../initialLogo';
import { TodoElem } from '../components/TodoElem';
export function mainMenu({navigation}){

  return (
    <ScrollView style={{backgroundColor:'white', width: '100%', height: '100%', padding:'2%',}}>
      <View style={{width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent:'flex-start'}}>
        <View style={{width: 60, height: 60, alignitems: 'center', justifyContent: 'center'}}>
          <SVGatorComponent />
        </View>
        <Text style={{fontSize: 30, fontWeight:'bold', color:'#4f4f4f', marginLeft:'2%'}}>Hello Faysal</Text>
      </View>
      <Text style={{fontSize: 25, fontWeight:'bold', color:'#4f4f4f', marginTop:'2%'}}>Today's Tasks</Text>
      <View style={{width:'100%', height:'20%', backgroundColor:'white', flex:1}}>
        <TodoElem />
        <TodoElem />
      </View>
      <Text style={{fontSize: 25, fontWeight:'bold',marginTop:'5%', color:'#4f4f4f'}}>Upcoming Tasks</Text>
      <View style={{width:'100%', height:'20%', backgroundColor:'white', flex:1}}>
        <TodoElem />
        <TodoElem />
        <TodoElem />

      </View>

    </ScrollView>
  );
}
