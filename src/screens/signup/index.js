import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SignupComponent from '../../components/SignUp';

export default Signup = (props) => {

    const [form, setForm] = useState({});
    const [erros, setErrors] = useState({});

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
    };
    return (
        <SignupComponent
            form={form}
            errors={erros}
            onSubmit={onSubmit}
            onChange={onChange}
            {...props}
        />
    )
};