
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
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {


  return (
    <View style={{
      backgroundColor: '#eee',
      flex: 1,
      flexDirection: 'row', //column,row,column-reverse,row-reverse
      justifyContent: 'center', //main axis
      alignItems: 'center', //secondary


    }} >

      <MaterialIcons name="mail" size={60} color="dodgerblue" />




    </View>



  );
}

const styles = StyleSheet.create({});
