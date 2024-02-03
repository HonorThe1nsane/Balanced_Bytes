import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as AppleAuthentication from 'expo-apple-authentication'; // Apple login

// import { Dimensions } from 'react-native';
// const dimensions = Dimensions.get('window');



const LoginScreen = () => {
    const signInWithApple = async () => {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [AppleAuthentication.AppleAuthenticationScope.EMAIL, AppleAuthentication.AppleAuthenticationScope.FULL_NAME,]
            });
            // Handle successful authentication
        } catch (error) {
            // Handle error
        }
        // If login is successful, navigate to the home screen
        navigation.navigate('Home');
    }
    const handleLogin = () => {
        signInWithApple();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image
                    source={require('./assets/b_b_logo.png')}
                    style={{
                        flex: 1,
                        resizeMode: 'cover',
                        width: '100%',
                        height: '100%',
                    }}
                />
                <View style={styles.overlay}>
                    <Text style={styles.welcomeText}>Balanced Bytes</Text>
                    <TouchableOpacity style={styles.appleButton} onPress={handleLogin}>
                        <Ionicons name="logo-apple" size={24} color="white" />
                        <Text style={styles.appleButtonText}>Sign In with Apple</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    wallpaper: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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
        marginBottom: 120,
    },
    appleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 8,
    },
    appleButtonText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;