import { View, Text, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const { width, height } = Dimensions.get('window');
function LoginField(props:any) {

  const stack = props.stack;

  return (
    <View style={{ alignItems: 'center', marginTop: 283 }}>
      <View style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4DA5B9', borderRadius: 5, width: 280, height: 45, paddingLeft: 10 }}>
        <TextInput placeholder='Email' style={{ color: 'black' }} placeholderTextColor={'black'} />
      </View>
      <View style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4DA5B9', borderRadius: 5, width: 280, height: 45, paddingLeft: 10, marginTop: 20 }}>
        <TextInput placeholder='Password' style={{ color: 'black' }} placeholderTextColor={'black'} />
      </View>
      <View style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4DA5B9', borderRadius: 5, width: 280, height: 45, paddingLeft: 10, marginTop: 20 }}>
        <TextInput placeholder='Confirm Password' style={{ color: 'black' }} placeholderTextColor={'black'} />
      </View>
      <TouchableOpacity style={{ backgroundColor: '#4DA5B9', padding: 10, borderRadius: 5, marginTop: 40, width:280, height:45 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize:15, fontWeight:'600' }}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={gotoLogin}>
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