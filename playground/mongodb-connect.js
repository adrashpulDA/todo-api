// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Some text',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo');
    //     }

    //     console.log(JSON.stringify(result.ops));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Artem Drashpul',
    //     age: 29,
    //     location: 'Wroclaw Brzeska 7 50-430'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });


    db.close();
});


