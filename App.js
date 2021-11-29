import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hello React Native</Text>
      <Image source={{
        uri: 'https://saib.com.sa/sites/default/files/logo.png',
        width: 412,
        height: 122

      }} />
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
