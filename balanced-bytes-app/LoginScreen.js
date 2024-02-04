import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as AppleAuthentication from 'expo-apple-authentication'; // Apple login
import { useNavigation } from '@react-navigation/native';
import Realm from 'realm';
import { UserSchema } from './models.js';




const LoginScreen = () => {
    const navigation = useNavigation();

    const signInWithApple = async () => {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                ],
            });

            // Handle successful authentication
            const { email, fullName, user: { identifier } } = credential;

            // Save the user data to Realm
            Realm.open({
                schema: [UserSchema],
                schemaVersion: 0,
            }).then((realm) => {
                realm.write(() => {
                    realm.create('User', {
                        id: identifier,
                        name: fullName,
                        email: email,
                    });
                });
            });

            // If login is successful, navigate to the home screen
            navigation.navigate('Home');
        } catch (error) {
            // Handle error
            console.log(error);
        }
    };
    const handleLogin = () => {
        signInWithApple();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('./assets/b_b_logo.png')} style={styles.wallpaper} resizeMode="cover" />
            <View style={styles.overlay}>
                <Text style={styles.welcomeText}>Balanced Bytes</Text>
                <TouchableOpacity style={styles.appleButton} onPress={handleLogin}>
                    <Ionicons name="logo-apple" size={24} color="white" />
                    <Text style={styles.appleButtonText}>Sign In with Apple</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    wallpaper: {
        ...StyleSheet.absoluteFillObject,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 32,
        color: 'white',
        marginTop: 20,
    },
    appleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
    },
    appleButtonText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default LoginScreen;