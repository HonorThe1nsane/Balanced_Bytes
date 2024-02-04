import Realm from 'realm';

// Define the schema for User, Child, and Meal
const UserSchema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        profilePicUrl: 'string',
        // other user properties
    },
};

const ChildSchema = {
    name: 'Child',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        parentId: 'int',
        // other child properties
    },
};

const MealSchema = {
    name: 'Meal',
    primaryKey: 'id',
    properties: {
        id: 'int',
        childId: 'int',
        timestamp: 'date',
        // other meal properties
    },
};

// // Open the realm and write data
// const realm = new Realm({ schema: [UserSchema, ChildSchema, MealSchema] });

// realm.write(() => {
//     const user = realm.create('User', { id: 1, name: 'John' });
//     const child = realm.create('Child', { id: 1, name: 'Emily', parentId: user.id });
//     const meal = realm.create('Meal', { id: 1, childId: child.id, timestamp: new Date(), /* other meal data */ });
// });

// // Query data
// const users = realm.objects('User');
// const children = realm.objects('Child').filtered('parentId == $0', user.id);
// const meals = realm.objects('Meal').filtered('childId == $0', child.id);


