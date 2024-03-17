import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
            {
                headerShown: false,
            }
        }>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} options={
                    {
                        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
                    }
                } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation