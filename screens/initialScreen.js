import React from 'react';
// @ts-ignore
import type {PropsWithChildren} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

import SVGatorComponent from '../initialLogo';

export function initialScreen({navigation}) {
  state = {
    animation: new Animated.Value(0),
  };
  const heightStyle = {
    marginTop: this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-15, 0],
    }),
    paddingBottom: this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 0],
    }),
  };
  const inner = {
    borderRadius: this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [12, 16],
    }),
  };
  handleAirhorn = async () => {
    try {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 100,
      }).start();
      setTimeout(function(){      navigation.navigate('WPHONE')}, 400);

    } catch (e) {}
  };
  handleButtonUp = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 50,
    }).start();
  };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '20%',
      }}>
      <View
        style={{
          width: 250,
          height: 250,
          alignitems: 'center',
          justifyContent: 'center',
        }}>
        <SVGatorComponent />
      </View>
      <Text style={{fontSize: 35,color:'rgba(0, 0, 0, 0.9)', fontFamily: 'Kusanagi'}}>BASICAL</Text>
      <TouchableWithoutFeedback style={{marginTop: '80%'}} onPressIn={this.handleAirhorn} onPressOut={this.handleButtonUp}>
        <View style={styles.button}>
          <View style={styles.outer}>
            <Animated.View style={[styles.height, heightStyle]}>
              <Animated.View style={[styles.inner, inner]}>
                <Text style={styles.white}>BEGIN</Text>
              </Animated.View>
            </Animated.View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: '60%',
    marginTop: '80%',
  },
  outer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 14,
  },
  height: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderRadius: 16,
  },
  inner: {
    height: '100%',
    backgroundColor: 'rgba(89, 89, 89, 0.63)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: '#FFF',
    fontSize: 20,
    fontFamily:'Kusanagi',
  },
});
