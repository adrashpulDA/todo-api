// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // findOneAndUpdate
    db.collection('Users')
        .findOneAndUpdate(
        {
            name: 'Artem Drashpul'
        },
        {
            $inc:
                {
                    age: 1
                }
        },
        {
            returnOriginal: false
        })
        .then(result => console.log(result));
    // findOneAndDelete
    // db.collection('Todos')
    //     .findOneAndDelete({ text: 'Eat lunch' })
    //     .then(result => console.log(result));

    // db.close();
});


