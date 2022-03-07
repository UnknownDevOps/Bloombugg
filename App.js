import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from './screen/LoginScreen';
import OtpScreen from './screen/OtpScreen';
import HomeScreen from './screen/HomeScreen/HomeScreen';
import Navigate from './Navigation/Navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>      
      <Navigate/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
