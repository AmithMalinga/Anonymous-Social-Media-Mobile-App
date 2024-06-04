import { Icon } from '@rneui/base';
import React from 'react';
import { View, Image, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1}}>
      <View style={{width:'100%',elevation:1, height:'13%',position: 'absolute'}}>
        <HeaderSection />
        <NavigationBar /> 
      </View>   
    </View>
  );
}

const HeaderSection = () => {
  return (
    <View style={{ flexDirection: 'row', padding: '5%', alignItems: 'center',marginTop:'-1%'}}>
      <Image 
        style={{ marginBottom:'0%', width: 40, height: 30 }} 
        source={require('../../Assets/img/ngs_care_8-removebg-preview.png')} 
      />
      <View style={{
        flex:1
        }}>
        <Text 
          style={{color:'black', fontSize:25, paddingLeft:'5%'}}>FeelWings
        </Text>
      </View> 
      <Icon size={30} style={{padding:'5%'}} type="Ionicons" name="search"></Icon>
      <Icon size={28} type="Ionicons" name="message"></Icon>

    </View>
  );
}

const NavigationBar = () =>{
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:'-1%'}}>
      <View style={{flex:1}}>
        <Icon size={28} type="Ionicons" name="home"></Icon>
      </View>
      <View style={{flex:1}}>
        <Icon size={28} type="Ionicons" name="notifications"></Icon>
      </View>
      <View style={{flex:1}}>
        <Icon size={28} type="Ionicons" name="home"></Icon>
      </View>
    </View>
  )
}
export default HomeScreen;
