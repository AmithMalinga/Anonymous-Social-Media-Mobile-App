import { View, Text, Dimensions, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Firebase/firebaseinit';
import { ActivityIndicator } from 'react-native-paper';


const { width, height } = Dimensions.get('window');
function LoginField(props: any) {
    const stack = props.stack;
    const [userEmail,setUserEmail] = useState(" "); 
    const [userPassword,setUserPassword] = useState(" ");
    const [isLogging,setIsLogging] = useState(false);

    return (
        <View style={{ alignItems: 'center', marginTop: 283 }}>
            <View style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4DA5B9', borderRadius: 5, width: 280, height: 45, paddingLeft: 10 }}>
                <TextInput placeholder='Email' style={{ color: 'black' }} placeholderTextColor={'#aaa'} onChangeText={(v)=>setUserEmail(v)}/>
            </View>
            <View style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4DA5B9', borderRadius: 5, width: 280, height: 45, paddingLeft: 10, marginTop: 20 }}>
                <TextInput placeholder='Password' style={{ color: 'black' }} placeholderTextColor={'#aaa'} secureTextEntry={true} onChangeText={(v)=>setUserPassword(v)}/>
            </View>
            <ForgetPassword>Forgot Password</ForgetPassword>
            <TouchableOpacity 
                activeOpacity={0.7} 
                onPress={gotoHome} 
                style={{ backgroundColor: '#4DA5B9', padding: 10, borderRadius: 55, marginTop: 40, width: 280, height: 45 }}>
                {(isLogging) ? <LoggingScreen /> : <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: '600' }}>Login</Text>}
            </TouchableOpacity>
            <TouchableOpacity 
                activeOpacity={0.7} 
                onPress={gotoRegister}>
                <ForgetPassword style={{ marginTop: 5 }}>Create new account</ForgetPassword>
            </TouchableOpacity>
        </View>

    );

    // authorization from backend
    function getUser(){
        getDocs(
            query(
                collection(db,'Users'),
                where('Email','==',userEmail.toLowerCase()))).then(ds=>{
                    setIsLogging(false);
                    if(ds.size == 1){
                        const dt = ds.docs[0].data()
                        if(dt.Password==userPassword){
                            stack.navigate('Home');
                        }else{
                            Alert.alert('Message','Incorrect Email or Password');
                        }
                    }else{
                        Alert.alert('Message','Incorrect Email!');
                    }
                }
            ).catch(e=>{
                setIsLogging(false);
                Alert.alert('Message',e.message);
            })
    }

    //button navigations
    function gotoRegister() {
        stack.navigate('Register');
    }

    function gotoHome(){
        setIsLogging(true);
        getUser();
    }    
}

function LoggingScreen(){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size='small' color='#fff'/>
        </View>
    )
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