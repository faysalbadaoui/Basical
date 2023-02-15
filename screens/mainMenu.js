import React, { useEffect, useState } from "react";
// @ts-ignore
import type {PropsWithChildren} from 'react';
import {
  TouchableOpacity,
  View, Text, ScrollView, Keyboard, Platform,StyleSheet,KeyboardAvoidingView,TextInput
} from "react-native";
import { useFonts } from 'expo-font';
import SVGatorComponent from '../initialLogo';
import { TodoElem } from '../components/TodoElem';
export function mainMenu({navigation}){
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year
    );
  }, []);
  return (

    <ScrollView contentContainerStyle={{width: '100%', height: '100%', padding:'2%', paddingTop:'5%', backgroundColor:'white'}}>
      <View style={{width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent:'flex-start'}}>
        <View style={{width: 60, height: 60, alignitems: 'center', justifyContent: 'center'}}>
          <SVGatorComponent />
        </View>
        <Text style={{fontSize: 30, color:'#4f4f4f', marginLeft:'2%', fontFamily: 'OldSansBlack'}}>Hello Faysal</Text>
      </View>
      <Text style={{fontSize: 25, color:'#4f4f4f', marginTop:'2%', fontFamily: 'OldSansBlack'}}>Today's Tasks</Text>
      <View style={{width:'100%', height:'20%', backgroundColor:'white', flex:1}}>
        {
          taskItems.map((item, index) => {
            return (
              <View style={{backgroundColor:'#E7E7E7', width: '100%',
                height: 60, padding:10,  alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: '5%',
                borderRadius: 20,flexDirection:'row'}} key={index}>
                <TouchableOpacity style={{
                  width: 35,
                  height: 35,
                  borderRadius: 10,
                  backgroundColor:'white',
                  borderWidth:3,
                  borderColor:'#7E7E7E',
                  alignSelf:'center',
                }} onPress={() => completeTask(index)}>
                </TouchableOpacity>
                <Text style={{fontFamily:'OldSansBlack', fontSize: 20, alignSelf:'center', marginLeft:'2%'}}>{item}</Text>
              </View>
            )
          })
        }
      </View>
      <KeyboardAvoidingView
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity style={{alignSelf: 'flex-end', marginBottom:'5%'}} onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    flex:1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    alignSelf: 'flex-end',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#7E7E7E',
    borderWidth: 3,
    width: '80%',
    alignSelf: 'flex-end',
    marginBottom:'5%',
    height: 60,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#7E7E7E',
    borderWidth: 3,
    fontSize: 80,
    textAlignVertical:'center',
    alignSelf: 'flex-end',
  },
  addText: {
    fontSize:40,
    alignSelf:'center',
    textAlignVertical:'center',
  },
});
