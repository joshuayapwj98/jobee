import * as React from 'react';
import { View, Text } from '../components/Themed';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Platform, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registration</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Button title="Go to Details"
                onPress={() => navigation.navigate('Root')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});