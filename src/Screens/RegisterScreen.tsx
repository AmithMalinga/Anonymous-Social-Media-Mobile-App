import { View, Text, Dimensions, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase/firebaseinit';
import LoginScreen from './LoginScreen';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');
function LoginField(props:any) {

  const stack = props.stack;
  const [name,setName] = useState(" "); 
  const [email,setEmail] = useState(" ");
  const [password,setPassword] = useState(" ");
  const [isSaving,setIsSaving] = useState(false);
  const nav:any = useNavigation();

  function saveUser(){
    setIsSaving(true);
    addDoc(collection(db,'Users'),{
      Name:name,
      Email:email,
      Password:password
    }).then(t=>{
      setIsSaving(false);
      Alert.alert("User Successfully Registered");
      nav.navigate('Login');
    }).catch(e=>{
      setIsSaving(false);
      Alert.alert("User Account creation failed!")
  })
}

  return (
    <View style={{ alignItems: 'center', marginTop: 250 }}>
      <View style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4DA5B9', borderRadius: 5, width: 280, height: 45, paddingLeft: 10 }}>
        <TextInput placeholder='Anonymous Name' style={{ color: 'black' }} placeholderTextColor={'#aaa'} onChangeText={(v)=>setName(v)}/>
      </View>
      <View style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4DA5B9', borderRadius: 5, width: 280, height: 45, paddingLeft: 10, marginTop: 20 }}>
        <TextInput placeholder='Email' style={{ color: 'black' }} placeholderTextColor={'#aaa'} onChangeText={(v)=>setEmail(v)}/>
      </View>
      <View style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4DA5B9', borderRadius: 5, width: 280, height: 45, paddingLeft: 10, marginTop: 20 }}>
        <TextInput placeholder='Password' style={{ color: 'black' }} secureTextEntry placeholderTextColor={'#aaa'} onChangeText={(v)=>setPassword(v)}/>
      </View>
      <View style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4DA5B9', borderRadius: 5, width: 280, height: 45, paddingLeft: 10, marginTop: 20 }}>
        <TextInput placeholder='Confirm Password' style={{ color: 'black' }} secureTextEntry placeholderTextColor={'#aaa'} />
      </View>
      <TouchableOpacity 
                activeOpacity={0.7} 
                onPress={saveUser} 
                style={{ backgroundColor: '#4DA5B9', padding: 10, borderRadius: 55, marginTop: 40, width: 280, height: 45 }}>
                {(isSaving) ? <SavingScreen /> : <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: '600' }}>Register</Text>}
            </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={gotoLogin}>
      <ForgetPassword style={{ marginTop:5 }}>Already have an account?</ForgetPassword>
      </TouchableOpacity>

      <ForgetPassword style={{ marginTop:2 }}>Forgot Password?</ForgetPassword>


    </View>
  );


  function gotoLogin(){
    stack.navigate('Login');
}
}
function ForgetPassword(props:any) {
    return (
      <Text style={{ fontSize: 14, fontWeight: '600', color: 'black', alignSelf: 'center', marginTop: 55 , ...props.style}}>{props.children}</Text>
    )
  }

  function SavingScreen(){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size='small' color='#fff'/>
        </View>
    )
}


const RegisterScreen = (props: any) => {
  const stack = props.navigation;

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: width, height: height, position: 'absolute' }}
        source={require('../../Assets/img/Registerbg.png')}
        resizeMode='cover'
      />

      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
        <LoginField stack={stack}/>
      </KeyboardAwareScrollView>

    </View>     
  )
}

export default RegisterScreen