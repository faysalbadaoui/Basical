import React from 'react';
// @ts-ignore
import type {PropsWithChildren} from 'react';
import {
  TouchableOpacity,
  View, Text,
} from 'react-native';
import { useFonts } from 'expo-font';
import SVGatorComponent from '../initialLogo';

export function mainMenu({navigation}){

  return (
    <View style={{backgroundColor:'white', width: '100%', height: '100%', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: '5%', marginLeft: '5%'}}>
      <View style={{width: '100%', alignItems: 'center', flexDirection: 'row', marginTop:'0%', justifyContent:'flex-start'}}>
        <View style={{width: 60, height: 60, alignitems: 'center', justifyContent: 'center'}}>
          <SVGatorComponent />
        </View>
        <Text style={{fontSize: 30, fontWeight:'bold', color:'#4f4f4f', marginLeft:'2%'}}>Hello Faysal</Text>
      </View>
      <Text style={{fontSize: 25, fontWeight:'bold', color:'#4f4f4f', marginTop:'2%'}}>Today's Tasks</Text>
      <View style={{width:'90%', height:'30%', borderWidth:4, borderColor:'rgba(0,0,0,0.1)', borderRadius:30, marginTop:'5%'}}>

      </View>
      <Text style={{fontSize: 25, fontWeight:'bold', color:'#4f4f4f', marginTop:'2%'}}>Upcoming Tasks</Text>
      <View style={{width:'90%', height:'30%', borderWidth:4, borderColor:'rgba(0,0,0,0.1)', borderRadius:30, marginTop:'5%'}}>

      </View>

    </View>
  );
}
