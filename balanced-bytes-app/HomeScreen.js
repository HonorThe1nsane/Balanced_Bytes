import React , { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';

const defaultProfile = {
    name: 'Troy Davidson',
    imagePath: './assets/generic_profile.jpeg', // Replace with a valid URI
};

const householdChildren = [
    { id: 1, name: 'Hyrum' },
    { id: 2, name: 'Tommy' },
    // Add more children as needed
];
const user = realm.objects('User').filtered(`id = "${userId}"`)[0];

const HomeScreen = () => {
    if (user) {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Image
                        source={require('./assets/b_b_logo.png')}
                        style={styles.backgroundImage}
                    />
                    <View style={styles.contentContainer}>
                        <Text style={styles.welcomeText}>Welcome {user.name}</Text>
                        <Image source={require('./assets/b_b_loading.png')} style={styles.profilePic} />

                        <View style={styles.householdSection}>
                            <Text style={styles.sectionTitle}>Household</Text>
                            {householdChildren.length > 0 ? (
                                householdChildren.map((child) => (
                                    <Text key={child.id} style={styles.childText}>
                                        {child.name}
                                    </Text>
                                ))
                            ) : (
                                <Text style={styles.childText}>No children in the household</Text>
                            )}
                            <TouchableOpacity onPress={() => handleAddChild()}>
                                <Text style={styles.addButton}>Add Child</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image
                    source={require('./assets/b_b_logo.png')}
                    style={styles.backgroundImage}
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.welcomeText}>Welcome {defaultProfile.name}</Text>
                    <Image source={require(defaultProfile.imagePath)} style={styles.profilePic} />
                    <View style={styles.householdSection}>
                        <Text style={styles.sectionTitle}>Household</Text>
                        {householdChildren.map((child) => (
                            <Text key={child.id} style={styles.childText}>
                                {child.name}
                            </Text>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    contentContainer: {
        paddingHorizontal: 16,
        paddingTop: 200,
        alignItems: 'center', // Adjust this value based on your logo's height
    },
    welcomeText: {
        fontSize: 24,
        marginBottom: 20,
        color: 'white',
        textAlign: 'center',// Set the text color to contrast with the background
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 50,
        marginBottom: 20,
        alignItems: 'center',
    },
    householdSection: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Set a background color for better readability
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    childText: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center',
    },
});

export default HomeScreen;
