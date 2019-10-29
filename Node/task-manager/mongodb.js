// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongo.ObjectID;

const {
    MongoClient,
    ObjectID
} = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionUrl, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    console.log(`Connected to ${databaseName} at ${connectionUrl}`);

    const db = client.db(databaseName);

    // db.collection('users').findOne({
    //     _id: new ObjectID("5db826828d8a3d1a347e73ce")
    // }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // });

    //     db.collection('users').find({age: 23}).toArray((error, users) => {
    //          console.log(users);
    //     });

    //     db.collection('users').find({age: 23}).count((error, count) => {
    //         console.log(count);
    //    });

    db.collection('tasks').findOne({
        _id: new ObjectID("5db823ec2cf0861b6cfd86fd")
    }, (error, task) => {
        if (error) {
            return console.log('Unable to fetch');
        }

        console.log(task);
    });

    db.collection('tasks').find({
        completed: false
    }).toArray((error, tasks) => {
        console.log(tasks);
    });

});