import React from 'react';
import { Button, Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/Screens/Navigations/AppNavigation';
import 'react-native-gesture-handler';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import { Icon } from '@rneui/themed';

function App(): React.JSX.Element {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4DA5B9',
      secondary: '#F50CA0',
    },
  };

  return (
    <PaperProvider>
      <AppNavigation/>
    </PaperProvider>
  );
}

export default App;
