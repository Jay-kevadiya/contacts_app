import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import { LOGIN } from '../../constants/routeNames';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default SignupComponent = ({
    onSubmit,
    onChange,
    errors,
    form,
    error,
    loading
    
}) => {
    const navigation = useNavigation();
    // console.log('aaaaa', error)
    return (
        <Container>
            <Image
                source={require('../../assets/images/logo.png')}
                height={70}
                width={70}
                style={styles.logoImage}
            />

            <View>

                <Text style={styles.title}>Welcome to Contacts</Text>
                <Text style={styles.subTitle}>Create a free account</Text>


                <View style={styles.form}>

                    {error?.error && <Text>{error.error}</Text>}
                    <Input
                        lable="Username"
                        iconPosition="right"
                        placeholder="Enter Username"
                        error={errors.userName || error?.username?.[0]}
                        onChangeText={(value) => {
                            onChange({ name: 'userName', value })
                        }}

                    />

                    <Input
                        lable="First name"
                        iconPosition="right"
                        placeholder="Enter First name"
                        onChangeText={(value) => {
                            onChange({ name: 'firstName', value })
                        }}
                        error={errors.firstName || error?.first_name?.[0]}
                    />

                    <Input
                        lable="Last name"
                        iconPosition="right"
                        placeholder="Enter Last name"
                        error={errors.lastName || error?.last_name?.[0]}
                        onChangeText={(value) => {
                            onChange({ name: 'lastName', value })
                        }}
                    />

                    <Input
                        lable="Email"
                        iconPosition="right"
                        placeholder="Enter Email"
                        error={errors.email || error?.email?.[0]}
                        onChangeText={(value) => {
                            onChange({ name: 'email', value })
                        }}
                    />

                    <Input
                        lable="Password"
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        error={errors.password || error?.password?.[0]}
                        onChangeText={(value) => {
                            onChange({ name: 'password', value })
                        }}

                    />

                    <CustomButton
                        title="Submit"
                        primary
                        onpress={onSubmit}
                        loading={loading}
                        disabled={loading}
                    />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </Container>
    )
};
