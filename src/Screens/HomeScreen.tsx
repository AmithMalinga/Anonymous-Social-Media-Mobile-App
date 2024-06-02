import { Icon } from '@rneui/base';
import React from 'react';
import { View, Image, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderSection />    
    </View>
  );
}

const HeaderSection = () => {
  return (
    <View style={{ flexDirection: 'row', padding: '5%', alignItems: 'center',marginTop:'-3%'}}>
      <Image 
        style={{ marginBottom:'1%', width: 40, height: 30 }} 
        source={require('../../Assets/img/ngs_care_8-removebg-preview.png')} 
      />
      <View style={{
        flex:1
        }}>
        <Text 
          style={{color:'black', fontSize:25, padding:'5%'}}>FeelWings
        </Text>
      </View> 
      <Icon size={30} style={{padding:'5%'}} type="EvilIcons" name="search"></Icon>
      <Icon size={28} type="Entypo" name="message"></Icon>

    </View>
  );
}

export default HomeScreen;
