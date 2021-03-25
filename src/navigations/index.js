import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './homeNavigator';
import DrawerNavigator from './drawerNavigator';
import AuthNavigator from './authNavigator';
import { GlobalContext } from '../context/provider';

export default AppNavContainer = () => {
    const { authState: { isLoggedIn } } = useContext(GlobalContext);
    // console.log(isLoggedIn)
    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
};
