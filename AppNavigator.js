/* eslint-disable no-unused-vars */
//import liraries
import React, {Component} from 'react';
import {initialScreen} from './screens/initialScreen';
import {writePhone} from './screens/writePhone';
import {writeName} from './screens/writeName';
import {writePasswords} from "./screens/writePasswords";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { mainMenu } from "./screens/mainMenu";
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
        <Stack.Screen name="WPASS" component={writePasswords} />
        <Stack.Screen name="MAINMENU" component={mainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
