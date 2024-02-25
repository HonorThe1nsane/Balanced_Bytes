import React, { useEffect } from 'react';
import Realm from 'realm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen.js'; // Replace with your actual login screen component
import HomeScreen from './HomeScreen.js';
import NewUserPage from './NewUserPage.js';
import { UserSchema } from './models.js';
import { AppRegistry } from 'react-native';



import { Dimensions } from 'react-native';

// Make the image size proportional to the screen dimensions
const dimensions = Dimensions.get('window');
// const imageWidth = dimensions.width;
// const imageHeight = dimensions.height;

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    // Initialize realm
    Realm.open({
      schema: [UserSchema],
      schemaVersion: 0,
    }).then((realm) => {
      const existingUser = realm.objects('User')[0];
      const initialRouteName = existingUser ? 'Home' : 'NewUserPage';
      //Close the Realm instance
      realm.close();
      // Set the initial route based on the check
      navigationRef.current?.navigate(initialRouteName);
    });}, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: 'rgba(67, 41, 94, 0.8)' },
        cardStyle: { backgroundColor: 'rgba(67, 41, 94, 0.8)' },
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewUserPage" component={NewUserPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;