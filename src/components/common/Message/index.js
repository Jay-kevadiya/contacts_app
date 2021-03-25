import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

export default Message = ({
    message,
    primary,
    danger,
    info,
    success
}) => {

    const [focused, setFocused] = useState(false);

    const getBgColor = () => {

        if (primary) {
            return colors.primary;
        }
        if (danger) {
            return colors.danger;
        }
        if (success) {
            return colors.success;
        }
        if (info) {
            return colors.secondary;
        }
    };
    return (
        <TouchableOpacity
            style={[
                styles.wrapper,
                { backgroundColor: getBgColor() }
            ]}

        >
            <View style={[styles.loaderSection]}>
                <Text style={{ color:colors.white}}>{message}</Text>

            </View>




        </TouchableOpacity>
    )
}
