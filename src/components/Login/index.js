import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import { SIGNUP } from '../../constants/routeNames';
import styles from './styles';

export default LoginComponent = (props) => {
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
                <Text style={styles.subTitle}>Please login here</Text>


                <View style={styles.form}>
                    <Input
                        lable="Username"
                        iconPosition="right"
                        placeholder="Enter Username"
                    // error={"This field is required"}
                    />

                    <Input
                        lable="Password"
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                    />



                    <CustomButton
                        title="Submit"
                        primary
                    />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate(SIGNUP)}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </Container>
    )
};
