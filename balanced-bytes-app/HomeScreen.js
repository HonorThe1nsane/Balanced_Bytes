import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';



const HomeScreen = () => {
    const defaultProfile = {
        name: 'Troy Davidson',
        image: './assets/generic_profile.jpeg', // Replace with a valid URI
    };

    const householdChildren = [
        { id: 1, name: 'Hyrum' },
        { id: 2, name: 'Tommy' },
        // Add more children as needed
    ];
    const user = realm.objects('User').filtered(`id = "${userId}"`)[0];
    const [isModalVisible, setModalVisible] = useState(false);
    const [newChildName, setNewChildName] = useState('')

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const handleAddChild = async () => {
        //Add a child to the household
        if (newChildName.trim() !== '') {
            try {
                // Open the Realm database
                const realm = await Realm.open({
                    schema: [UserSchema, ChildSchema], // Assuming you have a ChildSchema defined
                    schemaVersion: 0,
                });
                // Begin a write transaction
                realm.write(() => {
                    // Find the currently logged-in user
                    const user = realm.objects('User')[0];

                    // Create a new Child object
                    const newChild = {
                        id: user.children.length + 1, // Generate a unique ID
                        name: newChildName.trim(),
                        age: newChild.age.trim(),
                    };

                    // Add the new child to the user's children list
                    user.children.push(newChild);
                });

                // Close the Realm database
                realm.close();

                // Reset the newChildName state
                setNewChildName('');
                // Reset Age state
                setNewChildAgent(null);
                // Close the modal
                setModalVisible(false);
            } catch (error) {
                console.error('Error adding child:', error);
            }
        }
    };
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
                            {/* Add button */}
                            <TouchableOpacity onPress={toggleModal} style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add Child</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Modal for adding a child */}
                    <Modal visible={isModalVisible} animationType="slide" transparent>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>Add Child</Text>
                                <TextInput
                                    placeholder="Child's First Name"
                                    value={newChildName}
                                    onChangeText={(text) => setNewChildName(text)}
                                    style={styles.inputField}
                                />
                                <TextInput
                                    placeholder="Child's Age"
                                    value={newChildName}
                                    onChangeText={(text) => setNewChildAge(text)}
                                    style={styles.inputField}
                                />
                                <TouchableOpacity onPress={handleAddChild} style={styles.modalButton}>
                                    <Text style={styles.modalButtonText}>Add</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleModal} style={styles.modalButton}>
                                    <Text style={styles.modalButtonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                </ScrollView>
            </SafeAreaView >
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
                    {/* <Image source={require(defaultProfile.image)} style={styles.profilePic} /> */}
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
    addButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    // Modal styles
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    modalButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
