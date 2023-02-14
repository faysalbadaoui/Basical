import React from 'react';
// @ts-ignore
import type {PropsWithChildren} from 'react';
import {
  TouchableOpacity,
  View, Text,
} from 'react-native';
import { useFonts } from 'expo-font';
import SVGatorComponent from '../initialLogo';

export function TodoElem({navigation, taskName}){
  return (
    <View style={{backgroundColor:'white', width: '100%',
      height: 60, padding:5,  alignItems: 'flex-start', justifyContent: 'center', marginTop: '5%',
      borderWidth: 3, borderColor:'#7E7E7E', borderRadius: 12, alignSelf:'center', flexDirection:'row'}}>
      <TouchableOpacity style={{
        width: 35,
        height: 35,
        borderRadius: 10,
        backgroundColor:'grey',
      }}>
      </TouchableOpacity>
      <Text style={{fontFamily:'OldSansBlack', fontSize: 20, alignSelf:'flex-start'}}>{taskName}</Text>
    </View>
  );
}
