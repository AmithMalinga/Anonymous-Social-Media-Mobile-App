import React from 'react';
import { Button, Text, View } from 'react-native';
import FeelWings from './src/components/FeelWingsLogo';

function App(): React.JSX.Element {
  
  return (
    <View style={{alignItems:'center'}}>
      <Text>Welcome</Text>
      <FeelWings/>
    </View>
  );
}



export default App;
