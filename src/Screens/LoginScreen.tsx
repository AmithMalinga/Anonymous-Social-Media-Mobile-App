import { View, Text, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const { width, height } = Dimensions.get('window');
function LoginField(props: any) {
    const stack = props.stack;

    return (
        <View style={{ alignItems: 'center', marginTop: 283 }}>
            <View style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4DA5B9', borderRadius: 5, width: 280, height: 45, paddingLeft: 10 }}>
                <TextInput placeholder='Email' style={{ color: 'black' }} placeholderTextColor={'black'} />
            </View>
            <View style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4DA5B9', borderRadius: 5, width: 280, height: 45, paddingLeft: 10, marginTop: 20 }}>
                <TextInput placeholder='Password' style={{ color: 'black' }} placeholderTextColor={'black'} />
            </View>
            <ForgetPassword>Forgot Password</ForgetPassword>
            <TouchableOpacity onPress={gotoHome} style={{ backgroundColor: '#4DA5B9', padding: 10, borderRadius: 5, marginTop: 40, width: 280, height: 45 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: '600' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={gotoRegister}>
                <ForgetPassword style={{ marginTop: 5 }}>Create new account</ForgetPassword>
            </TouchableOpacity>
        </View>

    );
    function gotoRegister() {
        stack.navigate('Register');
    }

    function gotoHome(){
        stack.navigate('Home');
    }

    
}
function ForgetPassword(props: any) {
    return (
        <Text style={{ fontSize: 14, fontWeight: '600', color: 'black', alignSelf: 'center', marginTop: 55, ...props.style }}>{props.children}</Text>
    )
}



const LoginScreen = (props: any) => {

    const stack = props.navigation;

    return (
        <View style={{ flex: 1 }}>
            <Image
                style={{ width: width, height: height, position: 'absolute' }}
                source={require('../../Assets/img/loginbg.png')}
                resizeMode='cover'
            />

            <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
                <LoginField stack={stack} />
            </KeyboardAwareScrollView>

        </View>
    )
}

export default LoginScreen