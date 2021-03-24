import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

export default Message = ({
    title,
    loading,
    disabled,
    secondary,
    primary,
    danger,
    onpress,
}) => {

    const [focused, setFocused] = useState(false);

    const getBgColor = () => {

        if (disabled) {
            return colors.grey;
        }
        if (primary) {
            return colors.primary;
        }
        if (danger) {
            return colors.danger;
        }
        if (secondary) {
            return colors.secondary;
        }
    };
    return (
        <TouchableOpacity
            disabled={disabled}
            style={[
                styles.wrapper,
                { backgroundColor: getBgColor() }
            ]}
            onPress={onpress}
        >
            <View style={[styles.loaderSection]}>
                {loading && <ActivityIndicator color={primary?colors.secondary : colors.primary} />}
                {title && <Text style={{ color: disabled ? 'black' : colors.white, padding: loading ? 5 : 0 }}>{title}</Text>}

            </View>




        </TouchableOpacity>
    )
}
