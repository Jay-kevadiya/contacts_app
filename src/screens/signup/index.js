import React, { useState, useEffect, useContext, useCallback} from 'react';
import { View, Text } from 'react-native';
import SignupComponent from '../../components/SignUp';
import  register,{clearAuthState} from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/provider';
import axios from '../../helpers/axiosInterceptor';
import {useNavigation,  useFocusEffect} from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames';

export default Signup = (props) => {

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const {authDispatch, authR:{error, loading, data}} = useContext(GlobalContext)
    const {navigate} = useNavigation();

    useEffect(() => {
        if(data){
            navigate(LOGIN);
        }
    }, [data])

    useFocusEffect(
        useCallback(() => {
            if(data || error){
                clearAuthState()(authDispatch)
            }
        }, [data, error])
    )

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });

        if (value !== '') {

            if (name === 'password') {
                if (value.length < 6) {
                    setErrors((prev) => {
                        return { ...prev, [name]: 'This field needs min 6 characters' }

                    })
                } else {
                    setErrors((prev) => {
                        return { ...prev, [name]: null }
                    })
                }
            } else {
                setErrors((prev) => {
                    return { ...prev, [name]: null }
                })
            }

        } else {
            setErrors((prev) => {
                return { ...prev, [name]: 'This field is require' }

            })
        }
    };

    const onSubmit = () => {
        //validations

        if (!form.userName) {
            setErrors((prev) => {
                return { ...prev, userName: 'Please add a userName' }
            })
        }

        if (!form.firstName) {
            setErrors((prev) => {
                return { ...prev, firstName: 'Please add a firstName' }
            })
        }

        if (!form.lastName) {
            setErrors((prev) => {
                return { ...prev, lastName: 'Please add a lastName' }
            })
        }

        if (!form.email) {
            setErrors((prev) => {
                return { ...prev, email: 'Please add a email' }
            })
        }

        if (!form.password) {
            setErrors((prev) => {
                return { ...prev, password: 'Please add a password' }
            })
        }

        if (
            Object.values(form).length === 5 &&
            Object.values(form).every(item => item.trim().length > 0) &&
            Object.values(errors).every(item => !item)
        ) {
            register(form)(authDispatch);
        }
    };
    return (
        <SignupComponent
            form={form}
            errors={errors}
            onSubmit={onSubmit}
            onChange={onChange}
            error={error}
            loading={loading}
            {...props}
            
        />
    )
};