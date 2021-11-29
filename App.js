import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={3} onPress={() => console.log('Text Pressed')}>
        Hello React Native- This is a
        long text and it supposed to be a very very very long text.
        I really want to make it very very large text.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50

  },
});
