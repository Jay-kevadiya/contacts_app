import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';

export default Container = ({style, children}) => {
    return (
        <ScrollView>
            <View style={[styles.wrapper, style]}>{children}</View>
        </ScrollView>
    )
};