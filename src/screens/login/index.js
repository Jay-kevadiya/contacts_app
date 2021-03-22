import React, { useState } from 'react';
import LoginComponent from '../../components/Login';

export default Login = (props) => {
    const [value, onChangeText] = useState('');
    return (
        <LoginComponent {...props}/>

    )
};