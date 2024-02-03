import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const defaultProfile = {
    name: 'Troy Davidson',
    imageUrl: './assets/generic_profile.jpeg',
    imageSize: 90,
};

const HomeScreen = () => {
    // Dummy data for illustration
    const profilePicUri = 'https://example.com/profile-pic.jpg';
    const householdChildren = [
        { id: 1, name: 'Child 1' },
        { id: 2, name: 'Child 2' },
        // Add more children as needed
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome {defaultProfile.name}</Text>
            <Image src={defaultProfile.imageUrl} style={styles.profilePic} />

            <View style={styles.householdSection}>
                <Text style={styles.sectionTitle}>Household</Text>
                {householdChildren.map((child) => (
                    <Text key={child.id} style={styles.childText}>
                        {child.name}
                    </Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 24,
        marginBottom: 20,
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    householdSection: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    childText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default HomeScreen;
