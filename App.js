
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
      justifyContent: 'center', //main axis
      alignItems: 'center', //secondary


    }} >

      <Text
        style={{
          //  fontFamily: 'Roboto',
          fontSize: 30,
          fontStyle: 'italic',
          fontWeight: '600',
          color: 'purple',
          textTransform: 'capitalize',
          textDecorationLine: 'underline',
          textAlign: 'center',
          padding: 10,
          lineHeight: 35,



        }}

      >I love React Native!!Tnis is my first REact Native APp!!Here some more text</Text>





    </View>



  );
}

const styles = StyleSheet.create({});
