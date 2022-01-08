import * as React from 'react';
import { useState } from 'react';
import { View, Text } from '../components/Themed';
import { TouchableOpacity, Image, Keyboard } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

import { Platform, StyleSheet } from 'react-native'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Colors from '../constants/Colors'
export default function SignInScreen({ navigation }) {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [loginError, setLoginError] = useState('')

    const onLoginPressed = async () => {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate('Root') // Navigate to another screen for user data entry
                // ...
            })
            .catch((error) => {
                let errorCode = error.code;
                if (errorCode == "auth/invalid-email") {
                    setLoginError("invalid-email")
                } else if (errorCode == "auth/wrong-password") {
                    setLoginError("wrong-password")
                } else if (errorCode == "auth/user-not-found") {
                    setLoginError("user-not-found")
                }
            })
    }

    return (
        <View
            style={styles.container}>
            <Image source={require('../assets/images/JOBEE.png')} style={{ width: 150, height: 150 }} resizeMode='contain' />
            <Text style={styles.title}>Welcome to <Text style={styles.brand}>JoBee</Text></Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.subtitle}>Swipe and apply for your dream job!</Text>
            <View>
            {loginError == "invalid-email" && <Text style={styles.errorText}>{"Invalid email used!"}</Text>}
            </View>
            <View>
            {loginError == "wrong-password" && <Text style={styles.errorText}>{"Incorrect password used!"}</Text>}
            </View>
            <View>
            {loginError == "user-not-found" && <Text style={styles.errorText}>{"No account is associated with this email"}</Text>}
            </View>
            <TextInput
                description=' '
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
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
                secureTextEntry
            />
            <Button
                mode="contained"
                onPress={onLoginPressed}
                style={{ marginTop: 24 }}
            >
                Login
            </Button>
            <View style={styles.row}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.link}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
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
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: Colors.input.secondary
    },
    errorText: {
        fontWeight: 'bold',
        color: "#FF0000"
    }
});