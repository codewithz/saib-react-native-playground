import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hello React Native</Text>
      <TouchableOpacity onPress={() => console.log('Image Pressed')}>
        <Image source={{
          uri: 'https://saib.com.sa/sites/default/files/logo.png',
          width: 412,
          height: 122

        }} />

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"

  },
});
