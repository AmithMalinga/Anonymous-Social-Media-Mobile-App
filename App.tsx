import React from 'react';
import { Button, Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/Screens/Navigations/AppNavigation';
import 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <AppNavigation/>
    // <LoginScreen/>
    // <RegisterScreen/>
  );
}

export default App;
