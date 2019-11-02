// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongo.ObjectID;

const {
    MongoClient,
    ObjectID
} = require('mongodb');
const chalk = require('chalk');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    console.log(chalk.green.inverse(`Connected to ${databaseName} at ${connectionUrl}`));

    const db = client.db(databaseName);

    // db.collection('users').deleteMany({
    //     age: 23
    // }).then(result => {
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // });

    // db.collection('tasks').deleteOne({
    //     description: 'First'
    // }).then(result => {
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // });

});