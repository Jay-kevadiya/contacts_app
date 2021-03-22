import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { LOGIN, SIGNUP } from '../constants/routeNames';

import Login from '../screens/login';
import Signup from '../screens/signup';




const AuthNavigator = () => {
    const Stack = createStackNavigator();
    return <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={LOGIN} component={Login} />
        <Stack.Screen name={SIGNUP} component={Signup} />

    </Stack.Navigator>;
};

export default AuthNavigator;
