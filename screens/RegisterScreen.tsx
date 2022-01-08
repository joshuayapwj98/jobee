import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from '../components/Themed';
import { TouchableOpacity, Image, Keyboard, ActionSheetIOS, ActivityIndicator } from 'react-native'

import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'

import { Platform, StyleSheet } from 'react-native'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Colors from '../constants/Colors'
export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [isLoading, setLoading] = useState(true);

    const auth = getAuth();

    const isLoggedIn = () => {
        auth.onAuthStateChanged((user) => {
            setLoading(false)
            if (user) {
                console.log('user is logged in');
                navigation.navigate('Root');
            }
        });
    };

    const onSignUpPressed = async () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        navigation.navigate('Root');
        // if (emailError || passwordError || nameError) {
        //     setName({ ...name, error: nameError })
        //     setEmail({ ...email, error: emailError })
        //     setPassword({ ...password, error: passwordError })
        //     return
        // }
        //  await createUserWithEmailAndPassword(auth, email.value, password.value)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         console.log("Created" + userCredential.user);
        //         navigation.navigate('Root');
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.log("Error" + errorCode + errorMessage);
        //     });
    }

    useEffect(
        isLoggedIn, // <- function that will run on every dependency update
        [] // <-- empty dependency array
    )

    return (
        <View
            style={styles.container}>
            <ActivityIndicator animating={isLoading} size="large">
                {!isLoading &&
                <View>
                <Image source={require('../assets/images/JOBEE.png')} style={{ width: 150, height: 150 }} resizeMode='contain' />
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
                <View style={styles.row}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                        </View>
                        </View>

                }
            </ActivityIndicator>
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
    }
});