import { View, Text } from 'react-native';
import React from 'react';

const MainFont = (props:any) => {
  return (
    <View>
      <Text style={{ color: '#666666', fontFamily: 'Cagliostro', fontSize:50, marginVertical:50, textAlign:'center' }}>
        {props.children}
      </Text>
    </View>
  );
};

export default MainFont;
