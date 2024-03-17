import React from 'react';
import { Button, Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';

function App(): React.JSX.Element {
  return (
    // <LoginScreen/>
    <RegisterScreen/>
  );
}

export default App;
