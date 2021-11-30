
import React from 'react';
import {
  StyleSheet,
  Text, View,
  SafeAreaView,
  Image, TouchableOpacity,
  Button, Alert,
  Platform, StatusBar,
  Dimensions

} from 'react-native';

import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {


  return (
    <View style={{
      backgroundColor: '#eee',
      flex: 1,
      flexDirection: 'row', //column,row,column-reverse,row-reverse
      justifyContent: 'space-evenly', //main axis
      alignItems: 'center', //secondary

    }} >

      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 300,
        alignSelf: 'flex-start'
      }} >
      </View>

      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100,
      }} >
      </View>

      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
      }} >
      </View>


    </View>



  );
}

const styles = StyleSheet.create({});
