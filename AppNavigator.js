/* eslint-disable no-unused-vars */
//import liraries
import React, {Component} from 'react';
import {initialScreen} from './screens/initialScreen';
import {writePhone} from './screens/writePhone';
import {writeName} from './screens/writeName';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'INITIAL'}>
        <Stack.Screen name="INITIAL" component={initialScreen} />
        <Stack.Screen name="WPHONE" component={writePhone} />
        <Stack.Screen name="WNAME" component={writeName} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
