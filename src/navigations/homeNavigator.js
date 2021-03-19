import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
    CONTACT_DETAIL,
    CONTACT_LIST,
    CREATE_CONTACT,
    SETTINGS
} from '../constants/routeNames';
import Contact from '../screens/contact';
import ContactDetail from '../screens/contactDetail';
import CreateContact from '../screens/createContact';
import Settings from '../screens/settings';



const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return <Stack.Navigator>
        <Stack.Screen name={CONTACT_LIST} component={Contact} />
        <Stack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
        <Stack.Screen name={CREATE_CONTACT} component={CreateContact} />
        <Stack.Screen name={SETTINGS} component={Settings} />
    </Stack.Navigator>;
};

export default HomeNavigator;
