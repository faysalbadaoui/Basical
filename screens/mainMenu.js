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
    <ScrollView style={{width: '100%', height: '100%', padding:'2%', paddingTop:'5%', backgroundColor:'white'}}>
      <View style={{width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent:'flex-start'}}>
        <View style={{width: 60, height: 60, alignitems: 'center', justifyContent: 'center'}}>
          <SVGatorComponent />
        </View>
        <Text style={{fontSize: 30, color:'#4f4f4f', marginLeft:'2%', fontFamily: 'OldSansBlack'}}>Hello User</Text>
      </View>
      <Text style={{fontSize: 25, color:'#4f4f4f', marginTop:'2%', fontFamily: 'OldSansBlack'}}>Today's Tasks</Text>
      <View style={{width:'100%', height:'20%', backgroundColor:'white', flex:1}}>
        <TodoElem taskName={"Task1"}/>
        <TodoElem taskName={"Tsk2"}/>
      </View>
      <Text style={{fontSize: 25, marginTop:'5%', color:'#4f4f4f', fontFamily: 'OldSansBlack'}}>Upcoming Tasks</Text>
      <View style={{width:'100%', height:'20%', backgroundColor:'white', flex:1}}>
        <TodoElem taskName={"Task3"}/>
        <TodoElem taskName={"Task4"}/>
        <TodoElem taskName={"Task5"}/>
      </View>
    </ScrollView>
  );
}
