import * as React from 'react';
import { useState } from 'react';
import { View, Text } from '../components/Themed';
import { Image, Keyboard } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'

import { Platform, StyleSheet } from 'react-native'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const onSignUpPressed = async () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError || nameError) {
            setName({ ...name, error: nameError })
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }
        Keyboard.dismiss()
        try {
            const jsonValue = JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value
            })
            await AsyncStorage.setItem('@storage_Key', jsonValue)
          } catch (e) {
            console.log(e)
          }
        navigation.navigate('Root') // Navigate to another screen for user data entry
    }

    return (
        // <TouchableWithoutFeedback
        //     onPress={() => {
        //         Keyboard.dismiss()
        //     }}
        // >
        <View
            style={styles.container}>
            <Image source={require('../assets/images/JOBEE.png')} style={{ width: 220, height: 220 }} resizeMode='contain' />
            <Text style={styles.title}>Welcome to <Text style={styles.brand}>JoBee</Text></Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.subtitle}>Swipe and apply for your dream job!</Text>
            <TextInput
                description=' '
                label="Name"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
            />

            <TextInput
                description=' '
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                description=' '
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <Button
                mode="contained"
                onPress={onSignUpPressed}
                style={{ marginTop: 24 }}
            >
                Signup
            </Button>
        </View>
        // </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    separator: {
        marginVertical: 5,
        height: 1,
        width: '80%',
    },
    brand: {
        color: '#FCC603'
    }
});