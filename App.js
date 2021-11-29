import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';

export default function App() {

  const handlePress = () => {
    console.log('Button Pressed')
  }

  return (
    <View style={styles.container}>
      <Button title="Click Me" onPress={() => { alert('Hello Alert') }} />
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
