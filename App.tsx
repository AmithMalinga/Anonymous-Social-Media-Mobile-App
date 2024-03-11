import React from 'react';
import { TextInput, Text, View } from 'react-native';
import MainFont from './src/components/MainFont';

function App(): React.JSX.Element {
  return (
    <View style={{ alignItems: 'center' }}>
      <MainFont>Hello Anonymous!</MainFont>
      

      
      <TextInput
        style={{
          fontFamily: 'Cagliostro',
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 5,
          width: 250,
          marginTop: 4,
          height: 40,
          paddingLeft: 20,
          fontSize: 12,
        }}
        placeholder="Email"
      />
      
      
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'blue',
          borderRadius: 5,
          width: 250,
          marginTop: 4,
          height: 40,
          paddingLeft: 20,
          fontSize: 12,
        }}
        placeholder="Password"
        secureTextEntry={true}
      />
    </View>
  );
}

export default App;
