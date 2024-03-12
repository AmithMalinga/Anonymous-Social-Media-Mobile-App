import React from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet } from 'react-native'; // Added imports
import MainFont from './src/components/MainFont';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      
      {/* <MainFont>Hello Anonymous!</MainFont> */}

      <TextInput
        style={{
          fontFamily: 'Cagliostro',
          borderWidth: 1,
          borderColor: '#4DA5B9',
          borderRadius: 5,
          width: 250,
          marginTop: 250,
          height: 40,
          paddingLeft: 20,
          fontSize: 12,
        }}
        placeholder="Email"
      />

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#4DA5B9',
          borderRadius: 5,
          width: 250,
          marginTop: 10,
          height: 40,
          paddingLeft: 20,
          fontSize: 12,
        }}
        placeholder="Password"
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Handle login logic here
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#4DA5B9',
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    width:232,
  },
});

export default App;
