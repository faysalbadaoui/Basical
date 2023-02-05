import React from 'react';
// @ts-ignore
import type {PropsWithChildren} from 'react';
import {
  TouchableOpacity,
  View, Text,
} from 'react-native';

import SVGatorComponent from '../initialLogo';

export function initialScreen({navigation}){
  return (
    <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20%'}}>
      <View style={{width: 250, height: 250, alignitems: 'center', justifyContent: 'center'}}>
        <SVGatorComponent />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('WPHONE')} style={{width: 190, height: 60, backgroundColor: '#E7E7E7', justifyContent: 'center', borderRadius: 20, marginTop: '80%'} }>
        <Text style={{textAlign:'center', fontSize: 20,fontWeight:'bold', textAlignVertical:'center'}}>BEGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
