
import React from 'react';
import {
  StyleSheet,
  Text, View,
  SafeAreaView,
  Image, TouchableOpacity,
  Button, Alert,
  Platform, StatusBar

} from 'react-native';

export default function App() {

  const handlePress = () => {
    console.log('Button Pressed')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" onPress={() => {

        Alert.alert('My Title', 'My Message', [
          {
            text: 'Yes',
            onPress: () => {
              console.log('Yes Clicked');
              console.log('Platform:' + Platform.OS);
              console.log('Status Bar Height:' + StatusBar.currentHeight);
            }
          },
          {
            text: 'No',
            onPress: () => { console.log('No Pressed') }
          }
        ])

      }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0


  },
});
