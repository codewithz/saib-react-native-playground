
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
    <View style={{ backgroundColor: '#eee', flex: 1 }} >

      <View style={{
        backgroundColor: 'dodgerblue',
        flex: 2,
      }} >
      </View>

      <View style={{
        backgroundColor: 'gold',
        flex: 1,
      }} >
      </View>

      <View style={{
        backgroundColor: 'tomato',
        flex: 1,
      }} >
      </View>


    </View>



  );
}

const styles = StyleSheet.create({});
