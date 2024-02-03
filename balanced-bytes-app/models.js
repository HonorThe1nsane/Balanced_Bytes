// models.js
import Realm from 'realm';

class User { }
User.schema = {
    name: 'User',
    properties: {
        userId: 'string',
        name: 'string',
        email: 'string',
        imageUrl: 'string',
        imageSize: 'string',
        // Add other user-related properties
    },
};

class ChildProfile { }
ChildProfile.schema = {
    name: 'ChildProfile',
    properties: {
        profileId: 'string',
        userId: 'string', // Reference to the User
        childName: 'string',
        childAge: 'int',
        // Add other child profile properties
    },
};

export default new Realm({ schema: [User, ChildProfile] });
