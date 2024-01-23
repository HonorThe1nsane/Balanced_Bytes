import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
// Apple login
import appleAuth, { AppleButton } from '@invertase/react-native-apple-authentication';

import { Dimensions } from 'react-native';

// Make the image size proportional to the screen dimensions
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const imageHeight = dimensions.height;



export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
          source={require('./assets/b_b_logo.png')}
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />
        <Text style={styles.welcomeText}>Balanced Bytes</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    position: 'absolute',
    top: 20, // Adjust the top position as needed
  },
});
